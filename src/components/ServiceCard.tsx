import { type ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  expanded?: boolean;
  onToggle?: () => void;
}

export default function ServiceCard({ icon, title, description, expanded, onToggle }: ServiceCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-600/5 hover:border-primary-100 transition-all duration-300 cursor-pointer"
      onClick={onToggle}
    >
      <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-5 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className={`text-sm text-gray-600 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
        {description}
      </p>
      {onToggle && (
        <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
          {expanded ? 'Show less' : 'Learn more →'}
        </button>
      )}
    </div>
  );
}
