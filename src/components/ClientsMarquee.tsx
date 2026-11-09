import { clients } from '../data/portfolio';
import { useLanguage } from '../providers/LanguageProvider';

/** Scrolling strip of organizations, shown right under the hero. */
export function ClientsMarquee() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.clients.label} className="py-10">
      <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {t.clients.label}
      </p>

      <div className="marquee-mask mx-auto mt-7 max-w-5xl overflow-hidden">
        {/* Two identical halves; the track slides by exactly one half. */}
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0">
              {clients.map((name) => (
                <li
                  key={name}
                  className="whitespace-nowrap pr-16 font-display text-2xl font-semibold tracking-tight text-muted/60 transition-colors hover:text-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
