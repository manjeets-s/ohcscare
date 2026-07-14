import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Heart, ArrowRight } from 'lucide-react';

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
    <footer className="relative bg-primary-950 text-slate-300 overflow-hidden">
      {/* Soft glow accents */}
      <div aria-hidden="true" className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] rounded-full bg-teal-500/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-48 right-0 w-[30rem] h-[30rem] rounded-full bg-sky-500/10 blur-3xl" />

      {/* CTA band */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 border border-white/10 px-8 py-12 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-lift">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Ready when you are — let's talk about care.
            </h2>
            <p className="mt-3 text-lg text-sky-100/75 max-w-xl">
              A free, no-obligation conversation about you or your loved one. No call centres, no scripts — just people who care.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary-800 font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgb(0_0_0/0.5)]"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0220622505"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              022 062 2505
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden bg-[#faf6ef] ring-1 ring-white/20">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">OHCS Care</span>
                <span className="text-[10px] text-slate-400 leading-tight tracking-[0.14em] uppercase">
                  Ōtautahi Home Care
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Compassionate, professional home care and disability support — delivered with dignity, warmth, and respect.
              Proudly locally owned & operated.
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <Heart className="w-4 h-4 text-teal-400" />
              Serving Christchurch & surrounding areas
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="text-white text-sm font-semibold tracking-[0.12em] uppercase mb-6">Explore</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-teal-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-white text-sm font-semibold tracking-[0.12em] uppercase mb-6">Services</h3>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-teal-300 transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-white text-sm font-semibold tracking-[0.12em] uppercase mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:0220622505" className="flex items-start gap-3 text-sm text-slate-400 hover:text-teal-300 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                  022 062 2505
                </a>
              </li>
              <li>
                <a href="mailto:info@ohcscare.co.nz" className="flex items-start gap-3 text-sm text-slate-400 hover:text-teal-300 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                  info@ohcscare.co.nz
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                Christchurch, New Zealand
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Clock className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <span>
                  24/7 emergency support
                  <br />
                  Office: Mon–Fri, 8am–6pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ōtautahi Home Care Services. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">He tangata, he tangata, he tangata — it is people, it is people, it is people.</p>
          <p className="text-sm text-slate-500">
            Website created by <span className="font-semibold text-slate-300">Flyfre</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
