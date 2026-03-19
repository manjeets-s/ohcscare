import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  'Personal Care',
  'Medication Management',
  'Companionship',
  'Transportation',
  'Dementia Support',
  'Overnight Care',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="OHCS Care Logo" className="h-10 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">OHCS Care</span>
                <span className="text-[10px] text-gray-400 leading-tight tracking-wide uppercase">Ōtautahi Home Care</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Providing compassionate, professional home care services with dignity and respect. Proudly locally owned & operated.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-primary-400" />
              Serving Christchurch & surrounding areas
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <a href="tel:0220622505" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  022 062 2505
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <a href="mailto:info@ohcscare.co.nz" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  info@ohcscare.co.nz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span className="text-sm text-gray-400">Christchurch, New Zealand</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>24/7 Emergency Support</p>
                  <p>Office: Mon–Fri 8AM–6PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ōtautahi Home Care Services. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Proudly locally owned & operated
          </p>
        </div>
      </div>
    </footer>
  );
}
