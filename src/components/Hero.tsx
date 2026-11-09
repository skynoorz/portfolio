import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { profile, socials } from '../data/portfolio';
import { asset } from '../lib/asset';
import { fadeUp, staggerContainer } from '../lib/motion';
import { useLanguage } from '../providers/LanguageProvider';
import { HeroTerminal } from './HeroTerminal';

const GLOW_SIZE = 520;

export function Hero() {
  const { t } = useLanguage();

  // A soft light that trails the cursor across the hero.
  const pointerX = useMotionValue(-GLOW_SIZE);
  const pointerY = useMotionValue(-GLOW_SIZE);
  const glowX = useSpring(pointerX, { stiffness: 70, damping: 20 });
  const glowY = useSpring(pointerY, { stiffness: 70, damping: 20 });

  const handlePointer = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left - GLOW_SIZE / 2);
    pointerY.set(event.clientY - rect.top - GLOW_SIZE / 2);
  };

  return (
    <section
      id="home"
      aria-label={t.nav.home}
      onMouseMove={handlePointer}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Ambient background: dot grid, static glows and the cursor light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
      >
        <div className="bg-dots absolute inset-0" />
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[5%] h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
        <motion.div
          style={{ x: glowX, y: glowY, width: GLOW_SIZE, height: GLOW_SIZE }}
          className="absolute left-0 top-0 rounded-full bg-primary/[0.13] blur-[110px]"
        />
      </div>

      <div className="section-padding grid items-center gap-16 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl xl:text-7xl"
          >
            <span className="block text-2xl font-medium tracking-normal text-muted sm:text-3xl">
              {t.hero.greeting}
            </span>
            {profile.name}
            <span className="gradient-shimmer mt-1 block pb-2">{t.hero.role}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group">
              {t.hero.viewProjects}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={asset(profile.cvFile)}
              download
              className="btn-secondary group"
            >
              <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
              {t.hero.downloadCV}
            </a>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-10 flex items-center gap-3">
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
          </motion.ul>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-transparent blur-2xl"
          />
          <div className="animate-float relative">
            {/* Slowly rotating accent ring behind the photo (clipped so the
                spinning gradient square never pokes outside the frame). */}
            <div
              aria-hidden="true"
              className="absolute -inset-1.5 overflow-hidden rounded-[2.2rem] opacity-80"
            >
              <div className="photo-ring absolute inset-[-75%]" />
            </div>
            <div className="glass relative overflow-hidden rounded-[2rem] bg-background/60 p-2 shadow-glow">
              <img
                src={asset(profile.profileImage)}
                alt={profile.fullName}
                width={800}
                height={800}
                loading="eager"
                className="aspect-square w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>

          <HeroTerminal />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label={t.controls.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
      >
        <HiOutlineChevronDown className="animate-bounce" size={26} />
      </motion.a>
    </section>
  );
}
