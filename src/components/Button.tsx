import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'white' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap ' +
  'transition-all duration-300 ease-out will-change-transform ' +
  'hover:-translate-y-0.5 active:translate-y-0 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500';

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-to-br from-primary-600 to-primary-800 ' +
    'shadow-[0_8px_24px_-8px_rgb(15_76_129/0.55)] hover:shadow-[0_14px_36px_-10px_rgb(15_76_129/0.6)]',
  secondary:
    'text-white bg-gradient-to-br from-teal-500 to-teal-700 ' +
    'shadow-[0_8px_24px_-8px_rgb(58_175_169/0.55)] hover:shadow-[0_14px_36px_-10px_rgb(58_175_169/0.6)]',
  outline:
    'text-primary-700 dark:text-sky-200 bg-white/70 dark:bg-white/5 backdrop-blur ' +
    'border border-primary-200 dark:border-white/15 ' +
    'hover:border-primary-400 dark:hover:border-white/30 hover:shadow-soft',
  white:
    'text-primary-700 bg-white shadow-[0_8px_24px_-8px_rgb(5_29_51/0.5)] hover:shadow-[0_14px_36px_-10px_rgb(5_29_51/0.55)]',
  ghost: 'text-primary-700 dark:text-sky-200 hover:bg-primary-50 dark:hover:bg-white/5',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
