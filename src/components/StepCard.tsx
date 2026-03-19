import { type ReactNode } from 'react';

interface StepCardProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function StepCard({ step, icon, title, description }: StepCardProps) {
  return (
    <div className="relative text-center group">
      {/* Step number */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center z-10">
        {step}
      </div>
      <div className="bg-white rounded-2xl p-8 pt-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
