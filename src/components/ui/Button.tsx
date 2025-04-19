import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-md hover:shadow-lg",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-50",
    text: "bg-transparent text-blue-900 hover:bg-blue-50"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-2.5"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;