import { useState } from 'react';
import {
  ArrowRight,
  Brain,
  Car,
  ChevronDown,
  Home,
  Moon,
  Pill,
  SmilePlus,
  Stethoscope,
  UtensilsCrossed,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import Button from '../components/Button';

const services = [
  {
    icon: Stethoscope,
    title: 'Personal Care',
    short: 'Assistance with daily activities including bathing, grooming, dressing, and personal hygiene.',
    details:
      'Our personal care services are designed to maintain your dignity and independence. We provide compassionate assistance with daily routines, including bathing, grooming, dressing, toileting, and personal hygiene. Our carers are trained to deliver these services with the utmost respect and sensitivity.',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    short: 'Medication reminders, administration assistance, and monitoring for safe medication compliance.',
    details:
      'Our medication management service ensures safe and timely medication compliance. We provide medication reminders, administration assistance, tracking, and communication with healthcare providers. Our trained carers help prevent missed doses, double-dosing, and other medication-related risks.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Meal Preparation',
    short: 'Helping you organise ingredients, guiding through cooking steps, and supporting kitchen safety.',
    details:
      'We assist with meal preparation by helping you organise ingredients, guiding through cooking steps, and supporting kitchen safety — we assist you in cooking, we do not cook for you. This empowerment-based approach helps maintain your skills and independence while ensuring nutritious, enjoyable meals.',
  },
  {
    icon: Home,
    title: 'Household Tasks',
    short: 'Light housekeeping, laundry, organising, and maintaining a clean, safe living environment.',
    details:
      'Our household support includes light housekeeping, laundry, dusting, vacuuming, dish washing, bed making, and general tidying. We help maintain a clean, safe, and comfortable living environment so you can focus on the things that matter most to you.',
  },
  {
    icon: SmilePlus,
    title: 'Companionship',
    short: 'Emotional support, conversation, recreational activities, and social interaction.',
    details:
      'Loneliness can have a profound impact on health. Our companionship services provide meaningful social interaction, emotional support, conversation, games, walks, reading, and shared activities. We help combat isolation and brighten your day with genuine human connection.',
  },
  {
    icon: Car,
    title: 'Transportation',
    short: 'Safe transportation to medical appointments, grocery shopping, and social activities.',
    details:
      'Getting around safely is essential for independence. We provide reliable transportation to medical appointments, grocery shopping, social outings, and other errands. Our drivers are trained, insured, and focused on your comfort and safety.',
  },
  {
    icon: Brain,
    title: 'Dementia Support',
    short: "Specialised care for individuals with dementia and Alzheimer's disease.",
    details:
      'Our dementia care specialists provide compassionate, specialised support including cognitive stimulation activities, routine maintenance, wandering prevention, behaviour management, and family support. We focus on maintaining quality of life through evidence-based approaches.',
  },
  {
    icon: Moon,
    title: 'Overnight Care',
    short: 'Peace of mind and support during night hours with overnight and sleepover support.',
    details:
      "Our overnight care includes evening and morning personal care routines, night-time monitoring and reassurance, medication assistance, and supervision throughout the night. Whether you need occasional respite or regular overnight support, we're here to help.",
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 aurora bg-surface dark:bg-[#060d17]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <SectionHeader
            badge="Our Services"
            title="Support for every part of daily life"
            subtitle="From an hour of companionship to round-the-clock care — every service is delivered with warmth, skill, and respect."
          />
        </div>
      </section>

      <Section bg="white" className="!pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, short, details }, i) => {
            const isExpanded = expanded === title;
            return (
              <Reveal key={title} delay={(i % 2) * 100}>
                <article className="group h-full rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-soft transition-all duration-400 hover:shadow-lift hover:border-teal-200 dark:hover:border-teal-700/60 p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-sky-50 dark:from-teal-900/40 dark:to-sky-900/30 text-teal-600 dark:text-teal-300 flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:from-teal-500 group-hover:to-teal-600 group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">{title}</h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{short}</p>

                      <div
                        className={`grid transition-all duration-400 ease-out ${
                          isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/10 pt-4">
                            {details}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-5 mt-5">
                        <button
                          onClick={() => setExpanded(isExpanded ? null : title)}
                          aria-expanded={isExpanded}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-300 hover:text-teal-700 transition-colors"
                        >
                          {isExpanded ? 'Show less' : 'Learn more'}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <Button to="/contact" size="sm" variant="outline">
                          Enquire
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mt-16">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Not sure which service fits? We'll help you figure it out — free, and with no obligation.
          </p>
          <Button to="/contact" size="lg">
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
