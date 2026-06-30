import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Consistent heading block used at the top of every section. */
export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
