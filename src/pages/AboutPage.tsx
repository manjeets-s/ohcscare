import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  Gem,
  Heart,
  Shield,
  Star,
  Target,
  Users,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import Button from '../components/Button';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every client with genuine care, empathy, and emotional warmth — as if they were our own family.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honesty, transparency, and trust are the cornerstone of every relationship we build with clients and families.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards of care, continuously improving our services and training.',
  },
  {
    icon: Users,
    title: 'Respect',
    description: 'Every individual deserves dignity. We respect your choices, culture, preferences, and independence.',
  },
  {
    icon: Gem,
    title: 'Quality First',
    description: "Quality isn't just a promise — it's embedded in every assessment, care plan, and interaction we deliver.",
  },
  {
    icon: Award,
    title: 'Accountability',
    description: 'We take full responsibility for the care we provide and are transparent in everything we do.',
  },
];

const trustSignals = [
  'Police-vetted and insured carers',
  '24/7 emergency support availability',
  'Personalised care plans for every client',
  'Rigorous hiring and training standards',
  'Regular quality reviews and audits',
  'Proudly locally owned and operated',
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 aurora bg-surface dark:bg-[#060d17]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <SectionHeader
            badge="About OHCS Care"
            title="Compassionate care, right at home"
            subtitle="Our story, our mission, and the values that guide every visit we make."
          />
        </div>
      </section>

      {/* Story */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase mb-5 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white mb-8 text-balance">
              Built on a foundation of care & community
            </h2>
            <div className="space-y-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Ōtautahi Home Care Services was founded with a simple but powerful mission: to provide compassionate,
                professional home care that empowers individuals to live with dignity and independence in their own homes.
              </p>
              <p>
                Based in Christchurch, New Zealand, we understand that every individual has unique needs and preferences.
                That's why we take a personalised approach to every care plan, ensuring our services fit seamlessly into
                your lifestyle.
              </p>
              <p>
                As a proudly locally owned and operated business, we're deeply connected to our community. Our team brings
                not just professional expertise, but genuine warmth and compassion to every interaction.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&h=700&q=80"
                  alt="A nurse checking a client's blood pressure during a home visit"
                  width={640}
                  height={500}
                  loading="lazy"
                  className="w-full aspect-[9/7] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl shadow-lift px-6 py-4 animate-float">
                <p className="text-2xl font-bold text-primary-700 dark:text-sky-300">24/7</p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Always here</p>
              </div>
              <div className="absolute -top-5 -right-5 glass rounded-2xl shadow-lift px-6 py-4 animate-float" style={{ animationDelay: '1.4s' }}>
                <p className="text-2xl font-bold text-teal-600 dark:text-teal-300">100%</p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Dedicated</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-10 shadow-soft">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center mb-6 shadow-lift">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                To help individuals maintain their independence, dignity, and quality of life in the comfort of home by
                providing compassionate, professional home care that is personalised to each person's unique needs.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-10 shadow-soft">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center mb-6 shadow-glow">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                To be the most trusted home care provider in Christchurch and beyond — known for exceptional quality,
                genuine compassion, and a deep commitment to empowering every individual we serve.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section bg="white">
        <SectionHeader
          badge="What Drives Us"
          title="Our core values"
          subtitle="These values guide every decision we make and every interaction we have."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="group h-full rounded-3xl bg-surface dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-lift hover:bg-white dark:hover:bg-white/[0.06] hover:border-teal-200 dark:hover:border-teal-700/60">
                <div className="w-13 h-13 p-3.5 rounded-2xl bg-white dark:bg-white/10 shadow-soft text-primary-600 dark:text-sky-300 inline-flex items-center justify-center mb-5 transition-transform duration-400 group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-3">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Trust signals */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Why Trust Us"
              title="Your care, our commitment"
              subtitle="We go beyond standard care to ensure you and your family feel safe, supported, and confident."
              centered={false}
            />
            <ul className="space-y-4">
              {trustSignals.map((signal, i) => (
                <Reveal key={signal} delay={i * 70} as="li">
                  <span className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                    <span className="text-lg text-slate-700 dark:text-slate-300">{signal}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="mt-10">
              <Button to="/contact" size="lg">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="rounded-[2rem] overflow-hidden shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=900&h=700&q=80"
                alt="An elderly couple enjoying time together outdoors"
                width={640}
                height={500}
                loading="lazy"
                className="w-full aspect-[9/7] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
