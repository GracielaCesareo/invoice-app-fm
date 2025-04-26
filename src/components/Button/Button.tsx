// src/components/Button/Button.tsx
import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';
// Button component implementation
const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-300';
  
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-blue-600',
      secondary: 'bg-secondary text-gray-800 hover:bg-yellow-500',
      accent: 'bg-accent text-white hover:bg-pink-600',
    };
  
    return (
      <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick}>
        {children}
      </button>
    );
  };
  
export default Button;

