import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const variants: Record<string, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/30',
  secondary:
    'bg-accent-500 text-white hover:bg-accent-600 shadow-md shadow-accent-500/25',
  outline:
    'bg-white text-primary-700 border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50',
  white:
    'bg-white text-primary-700 hover:bg-gray-50 shadow-md',
};

const sizes: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
