import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Daughter of a client',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=320&h=320&q=75',
    rating: 5,
    content:
      "OHCS Care has been a blessing for our family. The carers are compassionate, professional, and truly care about Mum's wellbeing. I can finally rest easy knowing she's in good hands.",
  },
  {
    name: 'David R.',
    role: 'Client',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=320&h=320&q=75',
    rating: 5,
    content:
      "The team helped me maintain my independence after my surgery. They're always on time, respectful, and go above and beyond. I highly recommend their services.",
  },
  {
    name: 'Margaret T.',
    role: 'Family member',
    photo: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&w=320&h=320&q=75',
    rating: 5,
    content:
      'From the first call, OHCS made us feel comfortable and supported. The personalised care plan they created for Dad was exactly what we needed. Outstanding service.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <Reveal>
      <div
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lift">
          <Quote
            aria-hidden="true"
            className="absolute top-8 right-10 w-20 h-20 text-teal-100 dark:text-teal-900/60"
            strokeWidth={1}
          />
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-8 py-12 sm:px-14 sm:py-16">
                <div
                  className="flex items-center gap-1 mb-6"
                  role="img"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-xl sm:text-2xl leading-relaxed text-slate-800 dark:text-slate-100 font-medium tracking-tight text-balance">
                  “{t.content}”
                </blockquote>
                <figcaption className="mt-9 flex items-center gap-4">
                  <img
                    src={t.photo}
                    alt={`${t.name}, ${t.role}`}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-teal-50 dark:ring-teal-900/50"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="p-3 rounded-full glass shadow-soft text-primary-700 dark:text-sky-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-400 ${
                  i === index ? 'w-8 bg-teal-500' : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-teal-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="p-3 rounded-full glass shadow-soft text-primary-700 dark:text-sky-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Reveal>
  );
}
