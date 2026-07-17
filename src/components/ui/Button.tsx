import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
}) => {
  const baseClasses = 'font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black hover:bg-gray-200',
    outline: 'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white',
    white: 'bg-white text-black hover:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button onClick={onClick} className={classes}>{children}</button>;
};

export default Button;