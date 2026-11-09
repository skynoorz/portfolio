import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface SectionHeadingProps {
  /** Two-digit section number shown before the eyebrow, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

/** Editorial heading: numbered eyebrow + title on the left, lede on the right. */
export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-14"
    >
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs font-medium tracking-widest text-primary-light">
          {index}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-line/20 to-transparent"
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-12">
        <h2 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-muted lg:pb-1 lg:text-lg">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
