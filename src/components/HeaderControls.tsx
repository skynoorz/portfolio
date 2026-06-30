import { HiOutlineLanguage, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { useTheme } from '../providers/ThemeProvider';
import { useLanguage } from '../providers/LanguageProvider';

/** Language (EN/ES) and light/dark theme toggles shown in the header. */
export function HeaderControls() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={toggleLang}
        aria-label={t.controls.toggleLang}
        title={t.controls.toggleLang}
        className="glass inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary-light"
      >
        <HiOutlineLanguage size={16} aria-hidden="true" />
        {lang.toUpperCase()}
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t.controls.toggleTheme}
        title={t.controls.toggleTheme}
        className="glass inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:border-primary/50 hover:text-primary-light"
      >
        {theme === 'dark' ? (
          <HiOutlineSun size={18} aria-hidden="true" />
        ) : (
          <HiOutlineMoon size={18} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
