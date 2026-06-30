import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statMeta } from '../data/portfolio';
import { staggerContainer, viewportOnce, zoomIn } from '../lib/motion';
import { useCountUp } from '../hooks/useCountUp';
import { useLanguage } from '../providers/LanguageProvider';

function StatCard({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix?: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <motion.li
      variants={zoomIn}
      className="glass rounded-3xl p-8 text-center transition-colors hover:border-primary/40"
    >
      <span className="font-display text-4xl font-bold gradient-text sm:text-5xl">
        {count}
        {suffix ?? ''}
      </span>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </motion.li>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section ref={ref} aria-label="Key statistics" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {statMeta.map((stat, i) => (
            <StatCard
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={t.stats.labels[i]}
              active={inView}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
