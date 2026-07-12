import type { IconType } from 'react-icons';
import type { CoverId } from '../components/ProjectCover';
import { FaJava } from 'react-icons/fa';
import {
  SiKotlin,
  SiSpringboot,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiRedhatopenshift,
  SiGit,
  SiApachemaven,
  SiGradle,
  SiApachekafka,
  SiRabbitmq,
  SiRedis,
  SiPostgresql,
  SiJsonwebtokens,
  SiKeycloak,
} from 'react-icons/si';
import { TbApi, TbHexagons, TbDatabase } from 'react-icons/tb';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

/**
 * Language-independent data (names, links, icons, images, numbers).
 * All prose/copy lives in src/i18n/translations.ts and is zipped with the
 * arrays below by index — so the two files stay in the same order.
 */

export const profile = {
  name: 'Ronald Guarachi',
  fullName: 'Ronald Alcides Guarachi Enriquez',
  email: 'raguarachi0@gmail.com',
  phone: '+591 79145207',
  profileImage: 'profile.png', // place your photo in /public and update this name
  cvFile: 'CV_Ronald_Guarachi.pdf', // place your CV in /public and update this name
} as const;

export const socials: { label: string; href: string; icon: IconType }[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronald-guarachi-enriquez',
    icon: FaLinkedinIn,
  },
  { label: 'GitHub', href: 'https://github.com/skynoorz', icon: FaGithub },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
];

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

export const technologies: Technology[] = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'OpenShift', icon: SiRedhatopenshift, color: '#EE0000' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Maven', icon: SiApachemaven, color: '#C71A36' },
  // Kafka's mark is black/white and Gradle's is near-black — both invisible in
  // one of the two themes, so they follow the foreground color instead.
  { name: 'Gradle', icon: SiGradle, color: 'rgb(var(--c-fg))' },
  { name: 'Kafka', icon: SiApachekafka, color: 'rgb(var(--c-fg))' },
  { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
  { name: 'Redis', icon: SiRedis, color: '#FF4438' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Oracle Database', icon: TbDatabase, color: '#F80000' },
  { name: 'REST APIs', icon: TbApi, color: '#3b82f6' },
  { name: 'Hexagonal Architecture', icon: TbHexagons, color: '#22d3ee' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
  { name: 'Keycloak', icon: SiKeycloak, color: '#008AAA' },
];

/** Stable shared parts of each experience; localized copy is in translations. */
export const experienceMeta: { company: string; stack: string[] }[] = [
  { company: 'Banco Bisa S.A.', stack: ['Java', 'Spring Boot', 'REST', 'API-First', 'Confluence'] },
  {
    company: 'Quantum S.R.L.',
    stack: ['Java', 'Spring Boot', 'Kubernetes', 'Angular', 'JBoss Fuse', 'Scrum'],
  },
  { company: 'Enverus', stack: ['Java', 'Oracle 19c', 'Flyway', 'Spock', 'Groovy', 'JIRA'] },
  { company: 'AT&T', stack: ['Java 11', 'JSP', 'Servlets', 'OIDC'] },
  { company: 'TD Bank', stack: ['Java', 'Spring Boot', 'REST API'] },
];

/** Stable shared parts of each project; localized title/description in translations. */
export const projectMeta: { cover: CoverId; stack: string[] }[] = [
  { cover: 'banking', stack: ['Java', 'Spring Boot', 'REST', 'Hexagonal'] },
  { cover: 'survey', stack: ['Angular', 'Spring Boot', 'PostgreSQL'] },
  { cover: 'mongo', stack: ['Kotlin', 'Spring Data MongoDB', 'mongosh', 'GitLab CI'] },
];

/** Numeric values for the animated counters; labels come from translations. */
export const statMeta: { value: number; suffix?: string }[] = [
  { value: 4, suffix: '+' },
  { value: 90, suffix: '%' },
  { value: technologies.length },
  { value: 6 },
];

/** Section ids used for navigation and scroll-spy (labels come from translations). */
export const navSections = [
  'home',
  'about',
  'technologies',
  'experience',
  'projects',
  'contact',
] as const;

export type NavSection = (typeof navSections)[number];
