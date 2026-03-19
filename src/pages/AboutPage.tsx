import {
  Heart,
  Shield,
  Users,
  Star,
  Award,
  Target,
  Eye,
  Gem,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Compassion',
    description: 'We treat every client with genuine care, empathy, and emotional warmth — as if they were our own family.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Integrity',
    description: 'Honesty, transparency, and trust are the cornerstone of every relationship we build with clients and families.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards of care, continuously improving our services and training.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Respect',
    description: 'Every individual deserves dignity. We respect your choices, culture, preferences, and independence.',
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: 'Quality First',
    description: 'Quality isn\'t just a promise — it\'s embedded in every assessment, care plan, and interaction we deliver.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Accountability',
    description: 'We take full responsibility for the care we provide and are transparent in everything we do.',
  },
];

const trustSignals = [
  'Licensed and insured caregivers',
  '24/7 emergency support availability',
  'Personalised care plans for every client',
  'Rigorous hiring and training standards',
  'Regular quality reviews and audits',
  'Proudly locally owned and operated',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="About OHCS Care"
            title="Compassionate Care, Right at Home"
            subtitle="Learn about our story, our mission, and the values that drive everything we do."
          />
        </div>
      </section>

      {/* Company Story */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 bg-primary-50 text-primary-700 border border-primary-100">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Built on a Foundation of Care & Community
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ōtautahi Home Care Services was founded with a simple but powerful mission: to provide
                compassionate, professional home care that empowers individuals to live with dignity and
                independence in their own homes.
              </p>
              <p>
                Based in Christchurch, New Zealand, we understand that every individual has unique needs and
                preferences. That's why we take a personalised approach to every care plan, ensuring our
                services fit seamlessly into your lifestyle.
              </p>
              <p>
                As a proudly locally owned and operated business, we're deeply connected to our community. Our
                team of dedicated caregivers brings not just professional expertise, but genuine warmth and
                compassion to every interaction.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="OHCS Care Logo" className="h-24 w-auto mx-auto mb-4" />
                <p className="text-primary-700 font-bold text-2xl">OHCS Care</p>
                <p className="text-primary-600/70 text-sm mt-2">Ōtautahi Home Care Services</p>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-primary-600">24/7</p>
              <p className="text-xs text-gray-600 font-medium">Always Here</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-5 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-accent-600">100%</p>
              <p className="text-xs text-gray-600 font-medium">Dedicated</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-5">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To help individuals maintain their independence, dignity, and quality of life in the comfort
              of home by providing compassionate, professional home care services that are personalised
              to each person's unique needs and preferences.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-5">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted home care provider in Christchurch and beyond — known for
              exceptional quality, genuine compassion, and a deep commitment to empowering every
              individual we serve to live their best life at home.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="white">
        <SectionHeader
          badge="What Drives Us"
          title="Our Core Values"
          subtitle="These values guide every decision we make and every interaction we have."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-5 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Signals */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Why Trust Us"
              title="Your Care, Our Commitment"
              subtitle="We go beyond standard care to ensure you and your family feel safe, supported, and confident."
              centered={false}
            />
            <ul className="space-y-4">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Shield className="w-8 h-8" />, label: 'Licensed & Insured', color: 'bg-primary-50 text-primary-600' },
              { icon: <Award className="w-8 h-8" />, label: 'Quality Assured', color: 'bg-accent-50 text-accent-600' },
              { icon: <Users className="w-8 h-8" />, label: 'Expert Team', color: 'bg-blue-50 text-blue-600' },
              { icon: <Heart className="w-8 h-8" />, label: 'Community Focused', color: 'bg-rose-50 text-rose-600' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader
            badge="Join Our Care Family"
            title="Ready to Experience the OHCS Difference?"
            subtitle="Contact us today and let's discuss how we can support you or your loved ones."
            light
          />
          <Button to="/contact" variant="white" size="lg">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
