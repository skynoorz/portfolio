import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Accessible label for the landmark region. */
  ariaLabel?: string;
}

/** Semantic <section> landmark with consistent spacing and scroll anchor. */
export function Section({ id, children, className = '', ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`relative scroll-mt-24 ${className}`}
    >
      <div className="section-padding">{children}</div>
    </section>
  );
}
