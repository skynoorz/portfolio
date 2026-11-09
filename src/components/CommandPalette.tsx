import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  HiMagnifyingGlass,
  HiOutlineArrowDownTray,
  HiOutlineClipboard,
  HiOutlineHashtag,
  HiOutlineLanguage,
  HiOutlineSun,
} from 'react-icons/hi2';
import { navSections, profile, socials } from '../data/portfolio';
import { asset } from '../lib/asset';
import { useLanguage } from '../providers/LanguageProvider';
import { useTheme } from '../providers/ThemeProvider';

interface Command {
  id: string;
  label: string;
  group: string;
  icon: IconType;
  run: () => void;
  /** Keep the palette open briefly to show feedback (e.g. "Copied!"). */
  feedback?: boolean;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const { t, toggleLang } = useLanguage();
  const { toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [flashId, setFlashId] = useState<string | null>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      ...navSections.map((id) => ({
        id: `nav-${id}`,
        label: t.nav[id],
        group: t.palette.navigation,
        icon: HiOutlineHashtag,
        run: () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      {
        id: 'theme',
        label: t.palette.toggleTheme,
        group: t.palette.actions,
        icon: HiOutlineSun,
        run: toggleTheme,
      },
      {
        id: 'lang',
        label: t.palette.switchLang,
        group: t.palette.actions,
        icon: HiOutlineLanguage,
        run: toggleLang,
      },
      {
        id: 'copy-email',
        label: t.palette.copyEmail,
        group: t.palette.actions,
        icon: HiOutlineClipboard,
        run: () => void navigator.clipboard?.writeText(profile.email),
        feedback: true,
      },
      {
        id: 'cv',
        label: t.palette.downloadCV,
        group: t.palette.actions,
        icon: HiOutlineArrowDownTray,
        run: () => window.open(asset(profile.cvFile), '_blank', 'noopener'),
      },
      ...socials
        .filter((social) => social.href.startsWith('http'))
        .map((social) => ({
          id: `link-${social.label}`,
          label: social.label,
          group: t.palette.links,
          icon: social.icon,
          run: () => window.open(social.href, '_blank', 'noopener'),
        })),
    ],
    [t, toggleTheme, toggleLang],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  // Reset state each time the palette opens, and lock page scroll meanwhile.
  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    setFlashId(null);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const execute = (command: Command | undefined) => {
    if (!command) return;
    if (command.feedback) {
      command.run();
      setFlashId(command.id);
      window.setTimeout(onClose, 700);
      return;
    }
    onClose();
    // Run after the palette unmounts so scrolling isn't blocked by the lock.
    window.setTimeout(command.run, 0);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      execute(results[active]);
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[16vh]"
        >
          <div
            aria-hidden="true"
            onClick={onClose}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.palette.open}
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line/10 bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center gap-3 border-b border-line/10 px-4">
              <HiMagnifyingGlass className="shrink-0 text-muted" size={18} aria-hidden="true" />
              <input
                autoFocus
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-list"
                aria-activedescendant={results[active]?.id}
                aria-label={t.palette.placeholder}
                placeholder={t.palette.placeholder}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActive(0);
                }}
                onKeyDown={handleKeyDown}
                className="h-14 w-full bg-transparent text-sm text-foreground placeholder:text-muted/70 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <kbd className="shrink-0 rounded-md border border-line/10 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                Esc
              </kbd>
            </div>

            <ul id="command-list" role="listbox" className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted">
                  {t.palette.empty}
                </li>
              )}

              {results.map((command, i) => {
                const Icon = command.icon;
                const isActive = i === active;
                const showGroup = i === 0 || results[i - 1].group !== command.group;
                return (
                  <li key={command.id} role="presentation">
                    {showGroup && (
                      <p className="px-3 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {command.group}
                      </p>
                    )}
                    <div
                      id={command.id}
                      ref={isActive ? activeRef : undefined}
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => execute(command)}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                        isActive ? 'bg-primary/15 text-foreground' : 'text-muted'
                      }`}
                    >
                      <Icon
                        size={16}
                        aria-hidden="true"
                        className={isActive ? 'text-primary-light' : ''}
                      />
                      <span className="flex-1">
                        {flashId === command.id ? t.palette.copied : command.label}
                      </span>
                      {isActive && (
                        <kbd className="font-mono text-[10px] text-muted">↵</kbd>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
