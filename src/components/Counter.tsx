import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Counts up from 0 when scrolled into view. Respects prefers-reduced-motion. */
export default function Counter({ end, duration = 1800, prefix = '', suffix = '', className = '' }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      if (reduced) {
        setValue(end);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-NZ')}
      {suffix}
    </span>
  );
}
