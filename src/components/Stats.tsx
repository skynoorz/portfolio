import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statMeta } from '../data/portfolio';
import { fadeUp, viewportOnce } from '../lib/motion';
import { trackPointer } from '../lib/spotlight';
import { useCountUp } from '../hooks/useCountUp';
import { useLanguage } from '../providers/LanguageProvider';

/** Hairlines between cells: a 2×2 grid on mobile, a single row on desktop. */
const cellBorders = [
  'border-b border-r lg:border-b-0',
  'border-b lg:border-b-0 lg:border-r',
  'border-r',
  '',
];

function StatCell({
  value,
  suffix,
  label,
  active,
  borders,
}: {
  value: number;
  suffix?: string;
  label: string;
  active: boolean;
  borders: string;
}) {
  const count = useCountUp(value, active);
  return (
    <li className={`border-line/10 px-6 py-10 text-center ${borders}`}>
      <span className="font-display text-5xl font-bold tabular-nums tracking-tight text-foreground sm:text-6xl">
        {count}
        <span className="text-primary-light">{suffix ?? ''}</span>
      </span>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        {label}
      </p>
    </li>
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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onMouseMove={trackPointer}
          className="spotlight glass grid grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-4"
        >
          {statMeta.map((stat, i) => (
            <StatCell
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={t.stats.labels[i]}
              active={inView}
              borders={cellBorders[i] ?? ''}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
