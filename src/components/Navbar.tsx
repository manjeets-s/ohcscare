import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="OHCS Care Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">OHCS Care</span>
              <span className="text-[10px] text-gray-500 leading-tight tracking-wide uppercase">Ōtautahi Home Care</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0220622505"
              className="hidden sm:flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              022 062 2505
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/30"
            >
              Get Started
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-3 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors mt-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
