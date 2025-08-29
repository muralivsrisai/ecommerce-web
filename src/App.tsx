import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import type { Product } from './types';

type PageType = 'home' | 'products' | 'categories' | 'cart' | 'checkout' | 'login' | 'register' | 'about' | 'contact' | 'product-detail' | 'profile' | 'orders' | 'admin';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageType);
    if (page !== 'product-detail') {
      setSelectedProduct(null);
    }
    if (page !== 'products') {
      setSearchQuery('');
    }
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onPageChange={handlePageChange}
            onProductSelect={handleProductSelect}
          />
        );
      case 'products':
        return (
          <ProductsPage
            searchQuery={searchQuery}
            onProductSelect={handleProductSelect}
          />
        );
      case 'categories':
        return (
          <CategoriesPage
            onPageChange={handlePageChange}
          />
        );
      case 'cart':
        return (
          <CartPage
            onPageChange={handlePageChange}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            onPageChange={handlePageChange}
          />
        );
      case 'login':
      case 'register':
        return (
          <AuthPage
            onPageChange={handlePageChange}
          />
        );
      case 'about':
        return (
          <AboutPage
            onPageChange={handlePageChange}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onClose={() => handlePageChange('products')}
          />
        ) : (
          <HomePage
            onPageChange={handlePageChange}
            onProductSelect={handleProductSelect}
          />
        );
      case 'profile':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Profile</h2>
              <p className="text-gray-600">Profile page coming soon...</p>
              <button
                onClick={() => handlePageChange('home')}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order History</h2>
              <p className="text-gray-600">Order history page coming soon...</p>
              <button
                onClick={() => handlePageChange('home')}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      case 'admin':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h2>
              <p className="text-gray-600">Admin functionality coming soon...</p>
              <button
                onClick={() => handlePageChange('home')}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      default:
        return (
          <HomePage
            onPageChange={handlePageChange}
            onProductSelect={handleProductSelect}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          {currentPage !== 'product-detail' && (
            <Header
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onSearch={handleSearch}
            />
          )}
          
          <main>
            {renderPage()}
          </main>
          
          {currentPage !== 'product-detail' && currentPage !== 'login' && currentPage !== 'register' && (
            <Footer onPageChange={handlePageChange} />
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;