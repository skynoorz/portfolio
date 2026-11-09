import { socials, profile } from '../data/portfolio';
import { useLanguage } from '../providers/LanguageProvider';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const surname = profile.name.split(' ').slice(-1)[0];

  return (
    <footer className="relative overflow-hidden">
      <div className="divider-glow" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="font-display text-lg font-bold text-foreground"
          >
            {profile.name}
            <span className="text-primary">.</span>
          </a>
          <p className="mt-1 text-sm text-muted">
            © {year} {profile.fullName}. {t.footer.rights}
          </p>
        </div>

        <ul className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary-light"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Oversized outlined wordmark */}
      <p
        aria-hidden="true"
        className="wordmark pointer-events-none -mb-[0.22em] select-none text-center font-display text-[19vw] font-bold uppercase leading-none tracking-tighter"
      >
        {surname}
      </p>
    </footer>
  );
}
