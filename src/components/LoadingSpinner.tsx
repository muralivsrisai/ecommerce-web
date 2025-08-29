import React from 'react';
import { Package } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const containerClasses = {
    sm: 'space-y-2',
    md: 'space-y-3',
    lg: 'space-y-4',
  };

  const textClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerClasses[size]}`}>
      <div className="relative">
        <Package className={`${sizeClasses[size]} text-blue-600 animate-bounce`} />
        <div className="absolute inset-0 animate-ping">
          <Package className={`${sizeClasses[size]} text-blue-300 opacity-75`} />
        </div>
      </div>
      <p className={`text-gray-600 font-medium ${textClasses[size]}`}>{text}</p>
    </div>
  );
};

export default LoadingSpinner;