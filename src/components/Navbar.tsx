import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(scrollTop > 12);
        setProgress(max > 0 ? Math.min(scrollTop / max, 1) : 0);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Reading progress */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 via-sky-400 to-primary-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />

      <nav
        aria-label="Main"
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? 'mt-3 max-w-5xl rounded-full glass shadow-lift px-2'
            : 'mt-0 max-w-none bg-transparent px-4 sm:px-6 lg:px-10'
        }`}
      >
        <div className={`flex items-center justify-between ${scrolled ? 'h-14 px-4' : 'h-20'}`}>
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="OHCS Care — home">
            <span
              className={`inline-flex items-center justify-center rounded-xl overflow-hidden bg-[#faf6ef] ring-1 ring-black/5 dark:ring-white/20 transition-all duration-500 ${
                scrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`}
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt=""
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                OHCS Care
              </span>
              {!scrolled && (
                <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-slate-500 dark:text-slate-400 leading-tight">
                  Ōtautahi Home Care
                </span>
              )}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-primary-700 dark:text-sky-300 bg-primary-50 dark:bg-white/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-white hover:bg-primary-50/60 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:0220622505"
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-white transition-colors"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              022 062 2505
            </a>
            <ThemeToggle />
            <div className="hidden md:block">
              <Button to="/contact" size="sm">
                Book Consultation
              </Button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="md:hidden p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden mx-4 mt-2 rounded-3xl glass shadow-lift overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-3 rounded-2xl text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary-700 dark:text-sky-300 bg-primary-50 dark:bg-white/10'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-primary-50/60 dark:hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1 flex items-center gap-3">
            <Button to="/contact" size="sm" className="flex-1" onClick={() => setIsOpen(false)}>
              Book Free Consultation
            </Button>
            <a
              href="tel:0220622505"
              className="p-3 rounded-full bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300"
              aria-label="Call 022 062 2505"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
