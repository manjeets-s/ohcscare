import {
  Heart,
  Shield,
  Clock,
  Users,
  Stethoscope,
  Pill,
  UtensilsCrossed,
  Home,
  SmilePlus,
  Car,
  Brain,
  Moon,
  PhoneCall,
  ClipboardCheck,
  HandHeart,
  ArrowRight,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { lazy, Suspense, Component, type ReactNode } from 'react';

class Hero3DErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-[350px] lg:h-[550px] flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-100 to-accent-100" />
        </div>
      );
    }
    return this.props.children;
  }
}
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import StepCard from '../components/StepCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';
import Button from '../components/Button';

const Hero3D = lazy(() => import('../components/Hero3D'));

const services = [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: 'Personal Care',
    description:
      'Assistance with daily activities including bathing, grooming, dressing, and personal hygiene to help maintain dignity and independence.',
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: 'Medication Management',
    description:
      'Medication reminders, administration assistance, and monitoring for safe medication compliance and peace of mind.',
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: 'Meal Preparation',
    description:
      'Assisting with meal preparation by helping organise ingredients, guiding through cooking steps, and supporting kitchen safety.',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Household Tasks',
    description:
      'Light housekeeping, laundry, organising, and maintaining a clean, safe living environment for comfort and wellbeing.',
  },
  {
    icon: <SmilePlus className="w-6 h-6" />,
    title: 'Companionship',
    description:
      'Emotional support, conversation, recreational activities, and social interaction to brighten every day.',
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Transportation',
    description:
      'Safe transportation to medical appointments, grocery shopping, and social activities so you stay connected.',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Dementia Support',
    description:
      'Specialised care for individuals with dementia and Alzheimer\'s, including cognitive stimulation, routine maintenance, and family support.',
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Overnight Care',
    description:
      'Providing peace of mind and support during night hours with overnight care and sleepover support, including evening and morning personal care.',
  },
];

const steps = [
  {
    icon: <PhoneCall className="w-7 h-7" />,
    title: 'Get in Touch',
    description: 'Call us or fill out our contact form to discuss your care needs. We\'re available 24/7.',
  },
  {
    icon: <ClipboardCheck className="w-7 h-7" />,
    title: 'Personalised Plan',
    description: 'We assess your needs and create a tailored care plan that fits your lifestyle and preferences.',
  },
  {
    icon: <HandHeart className="w-7 h-7" />,
    title: 'Quality Care Begins',
    description: 'Our compassionate caregivers begin delivering professional, dignified care in your home.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Daughter of a client',
    content:
      'OHCS Care has been a blessing for our family. The caregivers are compassionate, professional, and truly care about Mum\'s wellbeing. I can finally rest easy knowing she\'s in good hands.',
  },
  {
    name: 'David R.',
    role: 'Client',
    content:
      'The team helped me maintain my independence after my surgery. They\'re always on time, respectful, and go above and beyond. I highly recommend their services.',
  },
  {
    name: 'Margaret T.',
    role: 'Family member',
    content:
      'From the first call, OHCS made us feel comfortable and supported. The personalised care plan they created for Dad was exactly what we needed. Outstanding service.',
  },
];

const stats = [
  { value: '100%', label: 'Dedicated Care' },
  { value: '24/7', label: 'Available Support' },
  { value: '500+', label: 'Families Served' },
  { value: '4.9★', label: 'Client Rating' },
];

const trustBadges = [
  { icon: <Shield className="w-5 h-5" />, label: 'Licensed & Insured' },
  { icon: <Clock className="w-5 h-5" />, label: '24/7 Availability' },
  { icon: <Users className="w-5 h-5" />, label: 'Personalised Plans' },
  { icon: <Award className="w-5 h-5" />, label: 'Professional Staff' },
];

export default function HomePage() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50/30" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border border-primary-100 shadow-sm mb-8">
                <Heart className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">Trusted Home Care in Christchurch</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Empowering Independence with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-400">
                  Expert Care
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-xl">
                Compassionate, professional home care services tailored to your unique needs.
                We help you or your loved ones maintain dignity and quality of life in the comfort of home.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/services" variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white/70 backdrop-blur rounded-xl border border-gray-100 shadow-sm"
                  >
                    <span className="text-primary-600">{badge.icon}</span>
                    <span className="text-xs font-medium text-gray-700">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Scene */}
            <div className="order-1 lg:order-2">
              <Hero3DErrorBoundary>
              <Suspense
                fallback={
                  <div className="w-full h-[350px] lg:h-[550px] flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 animate-pulse" />
                  </div>
                }
              >
                <Hero3D />
              </Suspense>
              </Hero3DErrorBoundary>
            </div>
          </div>
        </div>
      </section>

      {/* ======= STATS ======= */}
      <Section bg="white" className="!py-0">
        <div className="relative -mt-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      {/* ======= SERVICES ======= */}
      <Section bg="light" id="services">
        <SectionHeader
          badge="What We Offer"
          title="Comprehensive Home Care Solutions"
          subtitle="Tailored to your needs — from personal care to overnight support, we're here for you every step of the way."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button to="/services" variant="outline">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* ======= HOW IT WORKS ======= */}
      <Section bg="white">
        <SectionHeader
          badge="Simple Process"
          title="How It Works"
          subtitle="Getting started is easy. We guide you through every step to ensure you receive the right care."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={i + 1} icon={step.icon} title={step.title} description={step.description} />
          ))}
        </div>
      </Section>

      {/* ======= ABOUT PREVIEW ======= */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="About Us"
              title="We're Committed to Your Wellbeing"
              subtitle="We understand that every individual has unique needs and preferences. Our mission is to help you or your loved ones maintain independence, dignity, and quality of life."
              centered={false}
            />
            <ul className="space-y-4 mb-8">
              {[
                'Licensed and insured caregivers',
                'Personalised care plans for every client',
                'Compassionate and professional staff',
                '24/7 emergency support available',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/about" variant="primary">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src="/logo.png" alt="OHCS Care Logo" className="w-full h-auto" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-primary-600">100%</p>
              <p className="text-xs text-gray-600 font-medium">Dedicated Care</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ======= TESTIMONIALS ======= */}
      <Section bg="white">
        <SectionHeader
          badge="Testimonials"
          title="What Our Families Say"
          subtitle="Hear from the families and individuals who trust us with their care."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} name={t.name} role={t.role} content={t.content} />
          ))}
        </div>
      </Section>

      {/* ======= CTA ======= */}
      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader
            badge="Ready to Get Started?"
            title="Let's Find the Right Care for You"
            subtitle="Contact us today for a free consultation. We'll work together to create a personalised care plan that fits your unique needs."
            light
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="white" size="lg">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="tel:0220622505" variant="outline" size="lg" className="!bg-transparent !text-white !border-white/30 hover:!bg-white/10">
              Call 022 062 2505
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
