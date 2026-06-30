import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce, zoomIn } from '../lib/motion';
import { useLanguage } from '../providers/LanguageProvider';

export function About() {
  const { t } = useLanguage();
  const about = t.about;
  return (
    <Section id="about" ariaLabel={about.eyebrow}>
      <SectionHeading
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-8 lg:grid-cols-[1.5fr_1fr]"
      >
        <motion.article
          variants={fadeUp}
          className="glass rounded-3xl p-8 shadow-soft sm:p-10"
        >
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.article>

        <motion.ul
          variants={staggerContainer(0.1)}
          className="grid grid-cols-2 gap-4"
        >
          {about.highlights.map((item, i) => (
            <motion.li
              key={i}
              variants={zoomIn}
              className="glass flex flex-col justify-center rounded-2xl p-5 transition-colors hover:border-primary/40"
            >
              <span className="text-xs uppercase tracking-wider text-muted">
                {item.label}
              </span>
              <span className="mt-1 font-display text-base font-semibold text-foreground">
                {item.value}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Section>
  );
}
