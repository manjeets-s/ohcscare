interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, light = false, centered = true }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-primary-50 text-primary-700 border border-primary-100'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
