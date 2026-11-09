import {
  HiMagnifyingGlass,
  HiOutlineLanguage,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';
import { useTheme } from '../providers/ThemeProvider';
import { useLanguage } from '../providers/LanguageProvider';

const buttonClass =
  'glass inline-flex h-9 items-center justify-center rounded-lg text-foreground transition-colors hover:border-primary/50 hover:text-primary-light';

/** Command palette, language (EN/ES) and light/dark toggles shown in the header. */
export function HeaderControls({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={onOpenPalette}
        aria-label={t.palette.open}
        title={t.palette.open}
        className={`${buttonClass} gap-2 px-2.5`}
      >
        <HiMagnifyingGlass size={16} aria-hidden="true" />
        <kbd className="hidden font-mono text-[10px] text-muted xl:inline">Ctrl K</kbd>
      </button>

      <button
        type="button"
        onClick={toggleLang}
        aria-label={t.controls.toggleLang}
        title={t.controls.toggleLang}
        className={`${buttonClass} gap-1.5 px-3 text-xs font-semibold`}
      >
        <HiOutlineLanguage size={16} aria-hidden="true" />
        {lang.toUpperCase()}
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t.controls.toggleTheme}
        title={t.controls.toggleTheme}
        className={`${buttonClass} w-9`}
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
