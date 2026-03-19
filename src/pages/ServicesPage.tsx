import { useState } from 'react';
import {
  Stethoscope,
  Pill,
  UtensilsCrossed,
  Home,
  SmilePlus,
  Car,
  Brain,
  Moon,
  ArrowRight,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const services = [
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: 'Personal Care',
    short: 'Assistance with daily activities including bathing, grooming, dressing, and personal hygiene.',
    details:
      'Our personal care services are designed to maintain your dignity and independence. We provide compassionate assistance with daily routines, including bathing, grooming, dressing, toileting, and personal hygiene. Our caregivers are trained to deliver these services with the utmost respect and sensitivity.',
  },
  {
    icon: <Pill className="w-7 h-7" />,
    title: 'Medication Management',
    short: 'Medication reminders, administration assistance, and monitoring for safe medication compliance.',
    details:
      'Our medication management service ensures safe and timely medication compliance. We provide medication reminders, administration assistance, tracking, and communication with healthcare providers. Our trained caregivers help prevent missed doses, double-dosing, and other medication-related risks.',
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7" />,
    title: 'Meal Preparation',
    short: 'Helping you organise ingredients, guiding through cooking steps, and supporting kitchen safety.',
    details:
      'We assist with meal preparation by helping you organise ingredients, guiding through cooking steps, and supporting kitchen safety — we assist you in cooking, we do not cook for you. This empowerment-based approach helps maintain your skills and independence while ensuring nutritious, enjoyable meals.',
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: 'Household Tasks',
    short: 'Light housekeeping, laundry, organising, and maintaining a clean, safe living environment.',
    details:
      'Our household support includes light housekeeping, laundry, dusting, vacuuming, dish washing, bed making, and general tidying. We help maintain a clean, safe, and comfortable living environment so you can focus on the things that matter most to you.',
  },
  {
    icon: <SmilePlus className="w-7 h-7" />,
    title: 'Companionship',
    short: 'Emotional support, conversation, recreational activities, and social interaction.',
    details:
      'Loneliness can have a profound impact on health. Our companionship services provide meaningful social interaction, emotional support, conversation, games, walks, reading, and shared activities. We help combat isolation and brighten your day with genuine human connection.',
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: 'Transportation',
    short: 'Safe transportation to medical appointments, grocery shopping, and social activities.',
    details:
      'Getting around safely is essential for independence. We provide reliable transportation to medical appointments, grocery shopping, social outings, and other errands. Our drivers are trained, insured, and focused on your comfort and safety.',
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'Dementia Support',
    short: 'Specialised care for individuals with dementia and Alzheimer\'s disease.',
    details:
      'Our dementia care specialists provide compassionate, specialised support including cognitive stimulation activities, routine maintenance, wandering prevention, behaviour management, and family support. We focus on maintaining quality of life and slowing cognitive decline through evidence-based approaches.',
  },
  {
    icon: <Moon className="w-7 h-7" />,
    title: 'Overnight Care Services',
    short: 'Peace of mind and support during night hours with overnight and sleepover support.',
    details:
      'Our overnight care includes evening and morning personal care routines, night-time monitoring and reassurance, medication assistance, and supervision throughout the night. Whether you need occasional respite or regular overnight support, we\'re here to help.',
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (title: string) => {
    setExpanded(expanded === title ? null : title);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Home Care Solutions"
            subtitle="Tailored to your needs — from personal care to overnight support, we deliver compassionate, professional care in the comfort of your home."
          />
        </div>
      </section>

      {/* Service Cards */}
      <Section bg="white" className="!pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const isExpanded = expanded === service.title;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-600/5 hover:border-primary-100 transition-all duration-300 overflow-hidden"
              >
                <div className="p-7">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.short}</p>

                      {/* Expandable details */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'max-h-60 mt-4' : 'max-h-0'
                        }`}
                      >
                        <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                          {service.details}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mt-4">
                        <button
                          onClick={() => toggle(service.title)}
                          className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {isExpanded ? 'Show less' : 'Learn more →'}
                        </button>
                        <Button to="/contact" variant="primary" size="sm">
                          Enquire Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader
            badge="Need Help Choosing?"
            title="We'll Help You Find the Right Care"
            subtitle="Not sure which service is right for you? Contact us for a free, no-obligation consultation and we'll guide you."
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
