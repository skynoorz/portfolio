import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { profile, socials } from '../data/portfolio';
import { asset } from '../lib/asset';
import { fadeUp, staggerContainer } from '../lib/motion';
import { useLanguage } from '../providers/LanguageProvider';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[5%] h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="section-padding grid items-center gap-14 md:grid-cols-[1.4fr_1fr]">
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t.hero.greeting} {profile.name}
            <span className="mt-2 block gradient-text">{t.hero.role}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
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

          <motion.ul variants={fadeUp} className="mt-10 flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted transition-colors hover:text-primary-light"
                >
                  <Icon size={22} />
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
          <div className="glass relative animate-float overflow-hidden rounded-[2rem] p-2 shadow-glow">
            <img
              src={asset(profile.profileImage)}
              alt={`Portrait of ${profile.fullName}`}
              width={400}
              height={400}
              loading="eager"
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label={t.controls.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <HiOutlineChevronDown className="animate-bounce" size={28} />
      </motion.a>
    </section>
  );
}
