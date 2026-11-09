import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce, zoomIn } from '../lib/motion';
import { trackPointer } from '../lib/spotlight';
import { useLanguage } from '../providers/LanguageProvider';

export function About() {
  const { t } = useLanguage();
  const about = t.about;
  const [lead, ...rest] = about.paragraphs;

  return (
    <Section id="about" ariaLabel={about.eyebrow}>
      <SectionHeading
        index="01"
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 lg:grid-cols-[1.6fr_1fr]"
      >
        <motion.article
          variants={fadeUp}
          onMouseMove={trackPointer}
          className="spotlight glass flex flex-col rounded-3xl p-8 shadow-soft sm:p-10"
        >
          <p className="text-balance font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
            {lead}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {rest.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-line/10 pt-6 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {about.current}
          </div>
        </motion.article>

        <motion.ul
          variants={staggerContainer(0.1)}
          className="grid grid-cols-2 gap-5 lg:grid-cols-1"
        >
          {about.highlights.map((item, i) => (
            <motion.li
              key={i}
              variants={zoomIn}
              onMouseMove={trackPointer}
              className="spotlight glass flex flex-col justify-center rounded-2xl p-5 lg:flex-row lg:items-center lg:justify-between lg:px-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                {item.label}
              </span>
              <span className="mt-1 font-display text-base font-semibold text-foreground lg:mt-0 lg:text-right">
                {item.value}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Section>
  );
}
