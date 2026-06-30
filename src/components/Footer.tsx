import { socials, profile } from '../data/portfolio';
import { useLanguage } from '../providers/LanguageProvider';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line/10">
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

        <ul className="flex gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="text-muted transition-colors hover:text-primary-light"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
