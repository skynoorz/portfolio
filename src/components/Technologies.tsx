import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { technologies } from '../data/portfolio';
import { staggerContainer, viewportOnce, zoomIn } from '../lib/motion';
import { useLanguage } from '../providers/LanguageProvider';

export function Technologies() {
  const { t } = useLanguage();
  return (
    <Section id="technologies" ariaLabel={t.technologies.title}>
      <SectionHeading
        eyebrow={t.technologies.eyebrow}
        title={t.technologies.title}
        description={t.technologies.description}
      />

      <motion.ul
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {technologies.map(({ name, icon: Icon, color }) => (
          <motion.li
            key={name}
            variants={zoomIn}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group glass flex items-center gap-3 rounded-2xl p-4 transition-colors hover:border-primary/40 hover:bg-glass/[0.06]"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-glass/[0.04] transition-transform duration-300 group-hover:scale-110"
              style={{ color }}
              aria-hidden="true"
            >
              <Icon size={24} />
            </span>
            <span className="text-sm font-medium text-foreground">{name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
