import { motion } from 'framer-motion';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { experienceMeta } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { useLanguage } from '../providers/LanguageProvider';

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" ariaLabel={t.experience.title}>
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.description}
      />

      <motion.ol
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl"
      >
        {/* Vertical timeline line */}
        <span
          aria-hidden="true"
          className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-line/10 to-transparent sm:left-5"
        />

        {experienceMeta.map((meta, i) => {
          const item = t.experience.items[i];
          return (
            <motion.li
              key={meta.company}
              variants={fadeUp}
              className="relative mb-10 pl-14 last:mb-0 sm:pl-16"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary-light shadow-glow sm:h-11 sm:w-11"
              >
                <HiOutlineBriefcase size={18} />
              </span>

              <div className="glass rounded-2xl p-6 transition-colors hover:border-primary/30">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-primary-light">
                    {item.date}
                  </span>
                </div>

                <p className="mt-0.5 text-sm font-medium text-muted">
                  {meta.company}
                  {item.location && (
                    <span className="text-muted/70"> · {item.location}</span>
                  )}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.description.map((line, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {meta.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line/10 bg-glass/[0.03] px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </Section>
  );
}
