import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Mobile',
    value: '022 062 2505',
    href: 'tel:0220622505',
    description: 'Call us anytime for urgent enquiries',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'info@ohcscare.co.nz',
    href: 'mailto:info@ohcscare.co.nz',
    description: 'We respond within 24 hours',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Service Area',
    value: 'Christchurch, NZ',
    description: 'Serving the greater Christchurch metropolitan area',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Hours',
    value: '24/7 Emergency Support',
    description: 'Office: Mon–Fri 8AM–6PM',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Contact Us"
            title="Get in Touch"
            subtitle="Have questions or ready to get started? Reach out and we'll guide you through the process."
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section bg="white" className="!pt-8 !pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((info) => (
            <div key={info.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:border-primary-100 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{info.title}</h3>
              {info.href ? (
                <a href={info.href} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-primary-600 font-semibold">{info.value}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">{info.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Form + Map */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <ContactForm />
            </div>
          </div>

          {/* Map & additional info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h2>
            <p className="text-gray-600 mb-8">
              Serving Christchurch and the surrounding areas with pride.
            </p>
            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <iframe
                  title="OHCS Care Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92457.3722027073!2d172.5369!3d-43.532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d322f4863c5ed01%3A0x500ef8684799945!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[300px]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Ōtautahi Home Care Services</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-500 shrink-0" />
                    Christchurch, New Zealand
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                    <a href="tel:0220622505" className="hover:text-primary-600 transition-colors">022 062 2505</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                    <a href="mailto:info@ohcscare.co.nz" className="hover:text-primary-600 transition-colors">info@ohcscare.co.nz</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
