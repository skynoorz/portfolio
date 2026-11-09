import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { techCategories, technologies } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { trackPointer } from '../lib/spotlight';
import { useLanguage } from '../providers/LanguageProvider';

/** Brand-tinted glow for hex colors; a neutral one for theme-following icons. */
function glowFor(color: string): CSSProperties {
  return {
    ['--glow' as string]: color.startsWith('#')
      ? `${color}66`
      : 'rgb(var(--c-line) / 0.3)',
  };
}

export function Technologies() {
  const { t } = useLanguage();

  return (
    <Section id="technologies" ariaLabel={t.technologies.title}>
      <SectionHeading
        index="02"
        eyebrow={t.technologies.eyebrow}
        title={t.technologies.title}
        description={t.technologies.description}
      />

      <motion.ul
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2"
      >
        {techCategories.map((category) => {
          const items = technologies.filter((tech) => tech.category === category);
          return (
            <motion.li
              key={category}
              variants={fadeUp}
              onMouseMove={trackPointer}
              className="spotlight glass rounded-3xl p-6 sm:p-7"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t.technologies.categories[category]}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {String(items.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2.5">
                {items.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    style={glowFor(color)}
                    className="group relative z-10 flex items-center gap-2.5 rounded-xl border border-line/10 bg-glass/[0.03] py-2 pl-2 pr-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-line/25 hover:shadow-[0_14px_30px_-14px_var(--glow)]"
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-glass/[0.05] transition-transform duration-300 group-hover:scale-110"
                      style={{ color }}
                      aria-hidden="true"
                    >
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
