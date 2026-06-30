import { useRef, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { profile, socials } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { useLanguage } from '../providers/LanguageProvider';

type Status = 'idle' | 'sending' | 'success' | 'error';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const inputClass =
  'rounded-xl border border-line/10 bg-glass/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const { t } = useLanguage();
  const c = t.contact;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    // Fallback when EmailJS isn't configured: open the user's mail client.
    if (!emailjsConfigured) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      form.reset();
      return;
    }

    try {
      setStatus('sending');
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" ariaLabel={c.eyebrow}>
      <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-8 lg:grid-cols-[1fr_1.4fr]"
      >
        {/* Contact info */}
        <motion.div variants={fadeUp} className="glass rounded-3xl p-8">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {c.getInTouch}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{c.blurb}</p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block font-medium text-primary-light hover:underline"
          >
            {profile.email}
          </a>

          <ul className="mt-8 flex gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:text-primary-light"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                {c.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={c.namePlaceholder}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                {c.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={c.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              {c.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={c.messagePlaceholder}
              className={`resize-none ${inputClass}`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? c.sending : c.send}
            <FiSend />
          </button>

          {/* Live status for screen readers and sighted users */}
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-center text-sm ${
              status === 'error' ? 'text-red-400' : 'text-primary-light'
            }`}
          >
            {status === 'success' &&
              (emailjsConfigured ? c.successSent : c.successMailto)}
            {status === 'error' && c.error}
          </p>
        </motion.form>
      </motion.div>
    </Section>
  );
}
