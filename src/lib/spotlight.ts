import type { MouseEvent } from 'react';

/**
 * Writes the pointer position (relative to the element) into the --mx / --my
 * custom properties, which the `.spotlight` class uses to place its glow.
 */
export function trackPointer(event: MouseEvent<HTMLElement>): void {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  el.style.setProperty('--my', `${event.clientY - rect.top}px`);
}
