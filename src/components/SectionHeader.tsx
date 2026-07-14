import Reveal from './Reveal';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, light = false, centered = true }: SectionHeaderProps) {
  return (
    <Reveal className={`max-w-3xl mb-16 lg:mb-20 ${centered ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase mb-5 ${
            light
              ? 'bg-white/10 text-sky-200 border border-white/15'
              : 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-800/50'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-sky-300' : 'bg-teal-500'}`} />
          {badge}
        </span>
      )}
      <h2
        className={`text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-balance ${
          light ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg sm:text-xl leading-relaxed ${
            light ? 'text-sky-100/80' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
