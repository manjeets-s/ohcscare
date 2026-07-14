import { useState, type FormEvent } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import Button from './Button';

const serviceOptions = [
  'Personal Care',
  'Medication Management',
  'Meal Preparation',
  'Household Tasks',
  'Companionship',
  'Transportation',
  'Dementia Support',
  'Overnight Care',
  'Other',
];

const fieldClasses =
  'w-full px-5 py-3.5 rounded-2xl text-sm transition-all duration-200 ' +
  'bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ' +
  'border border-slate-200 dark:border-white/10 ' +
  'focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent';

const labelClasses = 'block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-teal-50 dark:bg-teal-900/25 border border-teal-200 dark:border-teal-800/60 p-10 text-center" role="status">
        <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto mb-5 shadow-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Thank you — we've got it.</h3>
        <p className="text-slate-600 dark:text-slate-400">
          We've received your message and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Your name <span aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@example.com" className={fieldClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="022 000 0000" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service of interest
          </label>
          <select id="service" name="service" className={fieldClasses}>
            <option value="">Choose a service…</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us about your needs
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe the care or support you're looking for…"
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
        <Send className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </Button>
      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
        We typically respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
