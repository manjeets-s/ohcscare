import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'light' | 'primary' | 'dark';
}

const bgClasses: Record<string, string> = {
  white: 'bg-white dark:bg-[#08101d]',
  light: 'bg-surface dark:bg-[#060d17]',
  primary: 'bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900',
  dark: 'bg-primary-950',
};

export default function Section({ children, className = '', id, bg = 'light' }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 lg:py-32 ${bgClasses[bg]} ${className}`}>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}
