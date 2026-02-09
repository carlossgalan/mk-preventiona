import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-display tracking-wide";
  
  const variants = {
    primary: "border-transparent text-white bg-mk-cyan hover:brightness-95 focus:ring-mk-cyan shadow-sm hover:shadow-md",
    secondary: "border-transparent text-mk-blue bg-white hover:bg-gray-50 focus:ring-mk-blue border border-gray-200 shadow-sm",
    outline: "border-2 border-white/70 text-white bg-transparent hover:bg-white/10 focus:ring-white",
    white: "border-transparent text-mk-blue bg-white hover:bg-gray-50 focus:ring-white shadow-sm"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};