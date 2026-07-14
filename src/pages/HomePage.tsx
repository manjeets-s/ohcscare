import {
  ArrowRight,
  Award,
  Brain,
  CalendarClock,
  Car,
  CheckCircle2,
  ClipboardList,
  HandHeart,
  HeartHandshake,
  Home,
  MapPin,
  Moon,
  PhoneCall,
  Pill,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import ContactForm from '../components/ContactForm';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1543333995-a78aea2eee50?auto=format&fit=crop&crop=focalpoint&fp-x=0.3&fp-y=0.55&fp-z=1.3&w=1100&h=1300&q=80',
  hands: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&h=700&q=80',
  homeVisit: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=900&h=700&q=80',
  couple: 'https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=900&h=600&q=80',
};

const heroCards = [
  { icon: ShieldCheck, label: 'Trusted Support', sub: 'Police-vetted carers', pos: 'top-6 -left-4 lg:-left-12', delay: '0s' },
  { icon: Award, label: 'Qualified Carers', sub: 'Trained & experienced', pos: 'top-1/3 -right-3 lg:-right-10', delay: '1.2s' },
  { icon: CalendarClock, label: 'Flexible Care Plans', sub: 'No lock-in contracts', pos: 'bottom-1/4 -left-4 lg:-left-14', delay: '2.1s' },
  { icon: PhoneCall, label: '24/7 Assistance', sub: 'Someone always answers', pos: 'bottom-6 -right-3 lg:-right-8', delay: '0.7s' },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'Police-vetted carers' },
  { icon: Award, label: 'Fully insured' },
  { icon: HeartHandshake, label: 'Individualised funding friendly' },
  { icon: MapPin, label: 'Locally owned & operated' },
  { icon: Star, label: '4.9 average family rating' },
];

const services = [
  { icon: Stethoscope, title: 'Personal Care', description: 'Dignified assistance with bathing, grooming, dressing, and personal hygiene — always at your pace.' },
  { icon: Pill, title: 'Medication Management', description: 'Reminders, administration assistance, and monitoring for safe, stress-free medication routines.' },
  { icon: UtensilsCrossed, title: 'Meal Preparation', description: 'Support with planning and preparing nutritious meals, guided by your tastes and independence.' },
  { icon: Home, title: 'Household Tasks', description: 'Light housekeeping, laundry, and organising — a clean, safe home without the burden.' },
  { icon: SmilePlus, title: 'Companionship', description: 'Genuine connection: conversation, shared activities, and someone who truly looks forward to seeing you.' },
  { icon: Car, title: 'Transportation', description: 'Safe, reliable transport to appointments, shopping, and the moments that keep life full.' },
  { icon: Brain, title: 'Dementia Support', description: 'Specialised, patient care for dementia and Alzheimer’s — routines, reassurance, and family support.' },
  { icon: Moon, title: 'Overnight Care', description: 'Peace of mind through the night, with sleepover support and evening and morning routines covered.' },
];

const whyUs = [
  {
    icon: HandHeart,
    title: 'Care that feels like family',
    description: 'We hire for heart first. Our carers build real relationships — they know your stories, your routines, your cup of tea.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted, trained, insured',
    description: 'Every carer is police-vetted, reference-checked, and professionally trained before their first visit. No exceptions.',
  },
  {
    icon: Users,
    title: 'Personality-matched carers',
    description: 'We match carers to clients by personality, culture, and interests — because trust grows from connection.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible, no lock-in plans',
    description: 'Life changes, and your care plan changes with it. Scale support up or down anytime, with no lock-in contracts.',
  },
  {
    icon: MapPin,
    title: 'Local & accountable',
    description: 'We’re Christchurch locals, not a franchise. When you call, you speak to someone who knows you by name.',
  },
  {
    icon: PhoneCall,
    title: 'Real humans, 24/7',
    description: 'Day or night, weekends and holidays — a real person who knows your situation is only ever a phone call away.',
  },
];

const processSteps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Contact',
    description: 'Reach out by phone or online. We listen first — your story, your needs, your hopes for support.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Assessment',
    description: 'A free, friendly in-home visit to understand daily routines, health needs, and what matters most.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Personalised Plan',
    description: 'Together we design a care plan around your life — services, schedule, and a carefully matched carer.',
  },
  {
    icon: HeartHandshake,
    step: '04',
    title: 'Ongoing Support',
    description: 'Care begins, and we stay close — regular reviews, open communication, and support that grows with you.',
  },
];

const stats = [
  { end: 10, suffix: '+', label: 'Years of Experience' },
  { end: 500, suffix: '+', label: 'Happy Clients & Families' },
  { end: 45, suffix: '+', label: 'Qualified Carers' },
  { end: 120000, suffix: '+', label: 'Support Hours Delivered' },
];

const team = [
  {
    name: 'Emma Walker',
    role: 'Founder & Care Director',
    bio: 'Fifteen years in community health, and still does home visits every week.',
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Priya Sharma',
    role: 'Registered Nurse — Clinical Lead',
    bio: 'Oversees clinical standards, medication safety, and carer training.',
    gradient: 'from-teal-400 to-teal-600',
  },
  {
    name: 'James Thompson',
    role: 'Care Coordinator',
    bio: 'Your first call. James matches every client with the right carer.',
    gradient: 'from-sky-400 to-sky-600',
  },
  {
    name: 'Aroha Williams',
    role: 'Support Team Lead',
    bio: 'Leads our support workers with warmth, humour, and high standards.',
    gradient: 'from-primary-400 to-teal-500',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================= 1. HERO ================= */}
      <section className="relative min-h-svh flex items-center overflow-hidden aurora bg-surface dark:bg-[#060d17] pt-28 pb-20 lg:pt-32 lg:pb-24">
        {/* Drifting gradient orbs */}
        <div aria-hidden="true" className="absolute top-16 -right-24 w-[34rem] h-[34rem] rounded-full bg-sky-200/40 dark:bg-sky-500/10 blur-3xl [animation:drift_18s_ease-in-out_infinite]" />
        <div aria-hidden="true" className="absolute -bottom-32 -left-24 w-[30rem] h-[30rem] rounded-full bg-teal-200/40 dark:bg-teal-500/10 blur-3xl [animation:drift_22s_ease-in-out_infinite_reverse]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-12 items-center">
            {/* Left: copy */}
            <div className="text-center lg:text-left">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-soft text-sm font-medium text-primary-700 dark:text-sky-200">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                  </span>
                  Home care & disability support · Ōtautahi Christchurch
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.02] text-slate-900 dark:text-white text-balance">
                  Compassionate care that feels like{' '}
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-teal-400 to-sky-400">
                    family
                  </span>
                  .
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-8 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                  From personal care and companionship to specialised dementia and overnight support, we help you or your
                  loved ones live safely, independently, and joyfully — in the comfort of home.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button to="/contact" size="lg" className="animate-pulse-ring">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                  <Button to="/services" variant="outline" size="lg">
                    Our Services
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {['EW', 'PS', 'JT', 'AW'].map((initials, i) => (
                      <span
                        key={initials}
                        className={`w-10 h-10 rounded-full ring-[3px] ring-surface dark:ring-[#060d17] flex items-center justify-center text-[11px] font-bold text-white bg-gradient-to-br ${
                          ['from-primary-500 to-primary-700', 'from-teal-400 to-teal-600', 'from-sky-400 to-sky-600', 'from-primary-400 to-teal-500'][i]
                        }`}
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1" role="img" aria-label="Rated 4.9 out of 5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                      <strong className="text-slate-900 dark:text-white font-semibold">4.9</strong> from 500+ families
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: photography + floating cards */}
            <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative">
                <div aria-hidden="true" className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-teal-300/40 via-sky-300/30 to-primary-300/30 dark:from-teal-500/20 dark:via-sky-500/15 dark:to-primary-500/15 blur-2xl" />
                <img
                  src={IMG.hero}
                  alt="A carer walking with a client in a wheelchair through a sunlit park at golden hour"
                  width={550}
                  height={650}
                  fetchPriority="high"
                  className="relative w-full aspect-[11/13] object-cover rounded-[2.5rem] shadow-lift ring-1 ring-white/60 dark:ring-white/10"
                />

                {heroCards.map(({ icon: Icon, label, sub, pos, delay }) => (
                  <div
                    key={label}
                    className={`absolute ${pos} glass rounded-2xl shadow-lift px-4 py-3 flex items-center gap-3 animate-float`}
                    style={{ animationDelay: delay }}
                  >
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white leading-tight whitespace-nowrap">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                        {label}
                      </span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{sub}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= 2. TRUSTED BY FAMILIES ================= */}
      <section className="relative py-14 bg-white dark:bg-[#08101d] border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-center text-sm font-semibold tracking-[0.16em] uppercase text-slate-400 dark:text-slate-500 mb-8">
              Trusted by families across Canterbury
            </p>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {trustBadges.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 80}>
                <span className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400 font-medium">
                  <Icon className="w-5 h-5 text-teal-500" />
                  <span className="text-sm sm:text-base">{label}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. SERVICES ================= */}
      <Section id="services" bg="light">
        <SectionHeader
          badge="Our Services"
          title="Everything home care should be"
          subtitle="Eight pillars of support, delivered by carers you'll know by name — mix and match to build the care your family needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 4) * 90}>
              <article className="group relative h-full rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-8 shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-lift hover:border-teal-200 dark:hover:border-teal-700/60">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-900/40 dark:to-sky-900/30 text-teal-600 dark:text-teal-300 flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-teal-600 group-hover:text-white group-hover:shadow-glow">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-14">
          <Button to="/services" variant="outline" size="lg">
            Explore all services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Reveal>
      </Section>

      {/* ================= 4. WHY CHOOSE US ================= */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div>
            <SectionHeader
              badge="Why Choose Us"
              title="Chosen with your heart, backed by our standards"
              subtitle="Inviting someone into your home is an act of trust. Here's how we honour it, every single visit."
              centered={false}
            />
            <Reveal delay={150}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-lift">
                <img
                  src={IMG.hands}
                  alt="A carer gently holding a client's hands"
                  width={640}
                  height={500}
                  loading="lazy"
                  className="w-full aspect-[9/7] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary-950/85 to-transparent">
                  <p className="text-white font-medium text-lg tracking-tight">
                    "The small moments matter most."
                  </p>
                  <p className="text-sky-200/80 text-sm mt-1">— The OHCS care philosophy</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyUs.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group h-full rounded-3xl p-7 bg-surface dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 transition-all duration-400 hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-soft hover:border-teal-200 dark:hover:border-teal-700/60">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 shadow-soft text-primary-600 dark:text-sky-300 flex items-center justify-center mb-5 transition-transform duration-400 group-hover:scale-110">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white tracking-tight mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= 5. CARE PROCESS ================= */}
      <Section bg="light">
        <SectionHeader
          badge="Our Care Process"
          title="From first call to lasting care"
          subtitle="Four gentle steps. No pressure, no obligation — just a clear path to the right support."
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Connecting line (desktop) */}
          <div aria-hidden="true" className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-teal-200 via-sky-300 to-primary-300 dark:from-teal-800 dark:via-sky-800 dark:to-primary-700" />

          {processSteps.map(({ icon: Icon, step, title, description }, i) => (
            <Reveal key={step} delay={i * 120}>
              <div className="relative h-full rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-8 pt-10 shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-lift text-center">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 to-primary-600 rotate-6 opacity-15" />
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center shadow-lift">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <span className="absolute top-6 right-7 text-4xl font-bold text-slate-100 dark:text-white/10 select-none" aria-hidden="true">
                  {step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= 6. TESTIMONIALS ================= */}
      <Section bg="white">
        <SectionHeader
          badge="Testimonials"
          title="Words from our families"
          subtitle="The trust of the families we serve is the measure we care about most."
        />
        <Testimonials />
      </Section>

      {/* ================= 7. STATISTICS ================= */}
      <Section bg="primary" className="overflow-hidden">
        <div aria-hidden="true" className="absolute -top-32 right-10 w-[28rem] h-[28rem] rounded-full bg-teal-400/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-40 -left-10 w-[26rem] h-[26rem] rounded-full bg-sky-400/15 blur-3xl" />
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map(({ end, suffix, label }, i) => (
            <Reveal key={label} delay={i * 100} className="text-center">
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                <Counter end={end} suffix={suffix} />
              </p>
              <p className="mt-3 text-sm sm:text-base font-medium text-sky-200/80">{label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= 8. MEET OUR TEAM ================= */}
      <Section bg="white">
        <SectionHeader
          badge="Meet Our Team"
          title="The people behind the care"
          subtitle="Led by health professionals, powered by people who chose care as a calling — not just a career."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, bio, gradient }, i) => (
            <Reveal key={name} delay={i * 100}>
              <article className="group h-full rounded-3xl bg-surface dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 p-8 text-center transition-all duration-400 hover:-translate-y-2 hover:shadow-lift hover:bg-white dark:hover:bg-white/[0.06]">
                <div
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl font-bold text-white shadow-lift ring-4 ring-white dark:ring-white/10 transition-transform duration-400 group-hover:scale-105`}
                  aria-hidden="true"
                >
                  {name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white tracking-tight">{name}</h3>
                <p className="mt-1 text-sm font-semibold text-teal-600 dark:text-teal-300">{role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= 9. FAQ ================= */}
      <Section bg="light">
        <SectionHeader
          badge="Questions"
          title="Frequently asked questions"
          subtitle="Everything families usually want to know before getting started. Anything else — just ask."
        />
        <Faq />
      </Section>

      {/* ================= 10. CONTACT ================= */}
      <Section id="contact" bg="white">
        <SectionHeader
          badge="Contact"
          title="Let's start the conversation"
          subtitle="Tell us a little about your situation, and we'll be in touch within 24 hours — no pressure, no obligation."
        />
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
          {/* Info card */}
          <Reveal>
            <div className="relative h-full rounded-[2rem] bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 text-white p-10 overflow-hidden shadow-lift">
              <div aria-hidden="true" className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-400/20 blur-3xl" />
              <h3 className="text-2xl font-bold tracking-tight">We're here to listen.</h3>
              <p className="mt-3 text-sky-100/75 leading-relaxed">
                Prefer to talk it through? Call any time — a real person who understands care will answer.
              </p>
              <ul className="mt-10 space-y-6">
                <li>
                  <a href="tel:0220622505" className="flex items-center gap-4 group">
                    <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-colors group-hover:bg-teal-500">
                      <PhoneCall className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.14em] text-sky-200/60">Phone — 24/7</span>
                      <span className="block font-semibold text-lg">022 062 2505</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ohcscare.co.nz" className="flex items-center gap-4 group">
                    <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-colors group-hover:bg-teal-500">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.14em] text-sky-200/60">Email</span>
                      <span className="block font-semibold text-lg">info@ohcscare.co.nz</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-sky-200/60">Service area</span>
                    <span className="block font-semibold text-lg">Christchurch & Canterbury</span>
                  </span>
                </li>
              </ul>
              <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-white/15">
                <img
                  src={IMG.couple}
                  alt="An elderly couple sitting together on a bench"
                  width={640}
                  height={430}
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150}>
            <div className="h-full rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-lift p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={100} className="mt-8">
          <div className="rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/10 shadow-soft">
            <iframe
              title="OHCS Care service area — Christchurch, New Zealand"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92457.3722027073!2d172.5369!3d-43.532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d322f4863c5ed01%3A0x500ef8684799945!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-[35%] contrast-[1.05] dark:invert dark:grayscale dark:contrast-[0.9]"
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
