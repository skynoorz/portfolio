import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { experienceMeta } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { trackPointer } from '../lib/spotlight';
import { useLanguage } from '../providers/LanguageProvider';

export function Experience() {
  const { t } = useLanguage();

  // The timeline rail fills in as the list scrolls through the viewport.
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 75%', 'end 55%'],
  });
  const railProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <Section id="experience" ariaLabel={t.experience.title}>
      <SectionHeading
        index="03"
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.description}
      />

      <motion.ol
        ref={listRef}
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative"
      >
        {/* Timeline rail: faint track + scroll-driven fill */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[17px] top-2 w-px bg-line/10 sm:left-[21px]"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: railProgress }}
          className="absolute bottom-0 left-[17px] top-2 w-px origin-top bg-gradient-to-b from-primary via-primary-light to-cyan-400 sm:left-[21px]"
        />

        {experienceMeta.map((meta, i) => {
          const item = t.experience.items[i];
          return (
            <motion.li
              key={meta.company}
              variants={fadeUp}
              className="relative mb-8 pl-14 last:mb-0 sm:pl-16"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary-light shadow-glow sm:h-11 sm:w-11"
              >
                <HiOutlineBriefcase size={18} />
              </span>

              <div
                onMouseMove={trackPointer}
                className="spotlight glass rounded-2xl p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary-light">
                      {meta.company}
                      {item.location && (
                        <span className="text-muted"> · {item.location}</span>
                      )}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                  </div>
                  <span className="rounded-full border border-line/10 bg-glass/[0.03] px-3 py-1 font-mono text-[11px] text-muted">
                    {item.date}
                  </span>
                </div>

                <ul className="mt-4 max-w-3xl space-y-2">
                  {item.description.map((line, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
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
