import React from 'react';
import { ButtonProps } from './Button.types';
import '../../styles/index.css';

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  iconLeft,
  iconRight,
  children,
  onClick,
  disabled,
}: ButtonProps) => {
  const baseStyles = 'flex items-center justify-center gap-2 font-semibold rounded focus:outline-none transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const className = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '',
  ].join(' ');

  return (
    <button 
      className={className} 
      onClick={onClick} 
      disabled={disabled || isLoading}
      aria-busy={isLoading}
    >
      {isLoading && <span className="animate-spin">⌀</span>}
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;