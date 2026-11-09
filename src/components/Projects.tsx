import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectCover } from './ProjectCover';
import { projectMeta } from '../data/portfolio';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { trackPointer } from '../lib/spotlight';
import { useLanguage } from '../providers/LanguageProvider';

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" ariaLabel={t.projects.title}>
      <SectionHeading
        index="04"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projectMeta.map((meta, i) => {
          const item = t.projects.items[i];
          return (
            <motion.article
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onMouseMove={trackPointer}
              className="spotlight group glass flex flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line/10 bg-glass/[0.02]">
                <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.05]">
                  <ProjectCover id={meta.cover} title={item.title} />
                </div>
                <span className="absolute left-4 top-4 font-mono text-[11px] tracking-widest text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {meta.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line/10 bg-glass/[0.03] px-3 py-1 text-xs font-medium text-primary-light"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
