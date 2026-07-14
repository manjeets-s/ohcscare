import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: 'How do we get started with OHCS Care?',
    answer:
      "It starts with a conversation. Call us or send a message through the contact form, and we'll arrange a free, no-obligation consultation — at your home or over the phone. From there we assess your needs together and design a care plan around your life, not the other way around.",
  },
  {
    question: 'What funding options can we use?',
    answer:
      'We support privately funded care as well as individualised funding arrangements. During your free consultation we can help you understand which options may apply to your situation and how to make the most of your funding.',
  },
  {
    question: 'How are your carers selected and vetted?',
    answer:
      'Every carer is police-vetted, reference-checked, and trained before they ever step into a home. Beyond qualifications, we select for warmth and empathy — then match carers to clients based on personality, culture, and interests, so support feels natural.',
  },
  {
    question: 'Can our care plan change as needs change?',
    answer:
      "Always. Care needs evolve, and your plan should too. We review plans regularly and you can request changes at any time — whether that's more hours, different services, or a different schedule. No lock-in contracts.",
  },
  {
    question: 'Which areas do you serve?',
    answer:
      "We serve Christchurch (Ōtautahi) and the surrounding Canterbury areas. If you're unsure whether we cover your location, just ask — we'll do our best to accommodate you.",
  },
  {
    question: 'Is support really available 24/7?',
    answer:
      'Yes. Alongside scheduled visits, we offer overnight care, sleepover support, and a 24/7 emergency line for existing clients. Whatever the hour, someone who knows your situation will answer.',
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-panel-${index}`;

  return (
    <Reveal delay={index * 60}>
      <div
        className={`rounded-3xl border transition-all duration-300 ${
          open
            ? 'bg-white dark:bg-white/5 border-teal-200 dark:border-teal-800/60 shadow-soft'
            : 'bg-white/60 dark:bg-white/[0.03] border-slate-100 dark:border-white/10 hover:border-teal-200 dark:hover:border-teal-800/60'
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 rounded-3xl"
        >
          <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
            {question}
          </span>
          <span
            className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              open ? 'bg-teal-500 text-white rotate-45' : 'bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300'
            }`}
          >
            <Plus className="w-4 h-4" />
          </span>
        </button>
        <div
          id={panelId}
          className={`grid transition-all duration-400 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-7 pb-7 text-slate-600 dark:text-slate-400 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Faq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqs.map((faq, i) => (
        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
      ))}
    </div>
  );
}
