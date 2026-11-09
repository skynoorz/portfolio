import { motion } from 'framer-motion';

const key = 'text-primary-light';
const str = 'text-emerald-500';
const punct = 'text-muted';

const lines = [
  <>
    <span className={punct}>{'{'}</span>
  </>,
  <>
    {'  '}
    <span className={key}>"role"</span>
    <span className={punct}>: </span>
    <span className={str}>"Backend Developer"</span>
    <span className={punct}>,</span>
  </>,
  <>
    {'  '}
    <span className={key}>"stack"</span>
    <span className={punct}>: [</span>
    <span className={str}>"Java"</span>
    <span className={punct}>, </span>
    <span className={str}>"Kotlin"</span>
    <span className={punct}>],</span>
  </>,
  <>
    {'  '}
    <span className={key}>"experience"</span>
    <span className={punct}>: </span>
    <span className={str}>"4+ years"</span>
    <span className={punct}>,</span>
  </>,
  <>
    {'  '}
    <span className={key}>"available"</span>
    <span className={punct}>: </span>
    <span className="text-amber-500">true</span>
  </>,
  <>
    <span className={punct}>{'}'}</span>
  </>,
];

/** Decorative "API response" card that overlaps the hero photo. */
export function HeroTerminal() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -bottom-16 -left-16 hidden w-60 rounded-2xl border border-line/10 bg-surface/90 p-4 font-mono text-[11px] leading-relaxed shadow-soft backdrop-blur-md sm:block"
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-auto rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-500">
          200 OK
        </span>
      </div>

      <p className="mb-2 text-foreground">
        <span className="text-primary-light">GET</span> /api/v1/profile
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } } }}
      >
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className="whitespace-pre"
            variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0 } }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
