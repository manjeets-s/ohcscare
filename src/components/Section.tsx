import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'light' | 'primary' | 'dark';
}

const bgClasses: Record<string, string> = {
  white: 'bg-white',
  light: 'bg-gray-50',
  primary: 'bg-primary-600',
  dark: 'bg-gray-900',
};

export default function Section({ children, className = '', id, bg = 'white' }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${bgClasses[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
