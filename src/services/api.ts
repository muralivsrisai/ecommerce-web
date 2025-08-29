import type { 
  Product, 
  User, 
  Order, 
  Category, 
  Review, 
  ApiResponse, 
  PaginatedResponse, 
  LoginCredentials, 
  RegisterData, 
  ProductFilters 
} from '../types';

// Base API configuration - configurable for backend connection
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('authToken');
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API request error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // ✅ Products API
  async getProducts(
    filters?: ProductFilters, 
    page = 1, 
    limit = 12
  ): Promise<ApiResponse<PaginatedResponse<Product>>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(filters?.category && { category: filters.category }),
      ...(filters?.search && { search: filters.search }),
      ...(filters?.minPrice && { minPrice: filters.minPrice.toString() }),
      ...(filters?.maxPrice && { maxPrice: filters.maxPrice.toString() }),
      ...(filters?.brand && { brand: filters.brand.join(',') }),
      ...(filters?.rating && { rating: filters.rating.toString() }),
      ...(filters?.inStock && { inStock: filters.inStock.toString() }),
      ...(filters?.sortBy && { sortBy: filters.sortBy }),
    });
  
    return this.request<PaginatedResponse<Product>>(`/products?${params.toString()}`);
  }

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    return this.request<Product>(`/products/${id}`);
  }

  async getFeaturedProducts(): Promise<ApiResponse<Product[]>> {
    return this.request<Product[]>(`/products/featured`);
  }

  // ✅ Categories API
  async getCategories(): Promise<ApiResponse<Category[]>> {
    return this.request<Category[]>(`/categories`);
  }

  // ✅ Authentication API
  async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request<{ user: User; token: string }>(`/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: RegisterData): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request<{ user: User; token: string }>(`/auth/register`, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<void> {
    localStorage.removeItem('authToken');
    await this.request(`/auth/logout`, { method: 'POST' });
  }

  // ✅ Orders API
  async createOrder(orderData: Omit<Order, '_id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Order>> {
    return this.request<Order>(`/orders`, {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getUserOrders(userId: string): Promise<ApiResponse<Order[]>> {
    return this.request<Order[]>(`/users/${userId}/orders`);
  }

  // ✅ Reviews API
  async getProductReviews(productId: string): Promise<ApiResponse<Review[]>> {
    return this.request<Review[]>(`/products/${productId}/reviews`);
  }

  async createReview(reviewData: Omit<Review, '_id' | 'createdAt'>): Promise<ApiResponse<Review>> {
    return this.request<Review>(`/reviews`, {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
  }
}

export const apiService = new ApiService();
