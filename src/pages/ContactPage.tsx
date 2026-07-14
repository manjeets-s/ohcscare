import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '022 062 2505',
    href: 'tel:0220622505',
    description: 'Call us anytime — 24/7',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@ohcscare.co.nz',
    href: 'mailto:info@ohcscare.co.nz',
    description: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    value: 'Christchurch, NZ',
    description: 'Greater Christchurch & Canterbury',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: '24/7 Support',
    description: 'Office: Mon–Fri, 8am–6pm',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 aurora bg-surface dark:bg-[#060d17]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <SectionHeader
            badge="Contact Us"
            title="Let's talk about care"
            subtitle="Have questions or ready to get started? Reach out and we'll guide you through every step."
          />
        </div>
      </section>

      <Section bg="white" className="!pt-16">
        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactInfo.map(({ icon: Icon, title, value, href, description }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-surface dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 p-8 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift hover:bg-white dark:hover:bg-white/[0.06] hover:border-teal-200 dark:hover:border-teal-700/60">
                <div className="w-13 h-13 p-3.5 rounded-2xl bg-white dark:bg-white/10 shadow-soft text-teal-600 dark:text-teal-300 inline-flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-sm font-semibold tracking-[0.1em] uppercase text-slate-500 dark:text-slate-400 mb-2">
                  {title}
                </h2>
                {href ? (
                  <a
                    href={href}
                    className="block text-lg font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-300 transition-colors tracking-tight"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{value}</p>
                )}
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lift p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Send us a message</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Tell us a little about your situation and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full rounded-[2rem] overflow-hidden bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-soft flex flex-col">
              <iframe
                title="OHCS Care service area — Christchurch, New Zealand"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92457.3722027073!2d172.5369!3d-43.532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d322f4863c5ed01%3A0x500ef8684799945!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full flex-1 min-h-[320px] grayscale-[35%] contrast-[1.05] dark:invert dark:grayscale dark:contrast-[0.9]"
              />
              <div className="p-8">
                <h3 className="font-bold text-slate-900 dark:text-white tracking-tight mb-4">Ōtautahi Home Care Services</h3>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-teal-500 shrink-0" />
                    Christchurch, New Zealand
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                    <a href="tel:0220622505" className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
                      022 062 2505
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                    <a href="mailto:info@ohcscare.co.nz" className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
                      info@ohcscare.co.nz
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
