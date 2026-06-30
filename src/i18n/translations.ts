import type { NavSection } from '../data/portfolio';

export type Lang = 'en' | 'es';

export interface Translation {
  nav: Record<NavSection, string>;
  cta: string;
  meta: { menuOpen: string; menuClose: string };
  controls: {
    toggleTheme: string;
    toggleLang: string;
    backToTop: string;
    scrollDown: string;
  };
  hero: {
    badge: string;
    greeting: string;
    role: string;
    tagline: string;
    viewProjects: string;
    downloadCV: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  technologies: { eyebrow: string; title: string; description: string };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: { role: string; date: string; location: string; description: string[] }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  stats: { labels: string[] };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    getInTouch: string;
    blurb: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successSent: string;
    successMailto: string;
    error: string;
  };
  footer: { rights: string };
}

const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
    technologies: 'Technologies',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  cta: 'Let’s talk',
  meta: { menuOpen: 'Open menu', menuClose: 'Close menu' },
  controls: {
    toggleTheme: 'Toggle light/dark theme',
    toggleLang: 'Switch language',
    backToTop: 'Back to top',
    scrollDown: 'Scroll to About section',
  },
  hero: {
    badge: 'Available for new opportunities',
    greeting: 'Hi, I’m',
    role: 'Backend Java Developer',
    tagline:
      'Specialized in Java, Spring Boot, Kotlin, Hexagonal Architecture and Microservices.',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
  },
  about: {
    eyebrow: 'About me',
    title: 'A bit about my journey',
    description:
      'Backend engineer who enjoys turning complex requirements into reliable, well-tested services.',
    paragraphs: [
      'I am a backend-focused software engineer with 4+ years of experience designing and deploying microservices in Java and Spring Boot for the telecommunications and banking industries.',
      'I started my career at Quantum S.R.L., an IT consulting firm, supporting Tigo Bolivia in middleware and as a junior developer — which is where I learned to keep mission-critical systems running in production.',
      'Today I deliver production-grade REST APIs with high test coverage, applying API-First and Hexagonal Architecture principles. I have led Agile teams as Scrum Master and collaborated with international clients across Canada (TD Bank, AT&T, Enverus). I care about clean, maintainable code and shipping reliable software. Fluent in English and Spanish.',
    ],
    highlights: [
      { label: 'Based in', value: 'La Paz, Bolivia' },
      { label: 'Focus', value: 'Backend & Microservices' },
      { label: 'Languages', value: 'English · Spanish' },
      { label: 'Open to', value: 'Remote opportunities' },
    ],
  },
  technologies: {
    eyebrow: 'Tech stack',
    title: 'Technologies I work with',
    description:
      'The tools and platforms I use to design, build and ship production systems.',
  },
  experience: {
    eyebrow: 'Career',
    title: 'Professional experience',
    description:
      'Four-plus years building backend systems for banking and telecom, including remote work with Canadian clients.',
    items: [
      {
        role: 'Backend Developer',
        date: 'December 2024 – Present',
        location: 'La Paz, Bolivia',
        description: [
          'Develop REST microservices in Spring Boot following an API-First approach, documenting requirements in Confluence.',
          'Deliver credit transaction features for the bank’s "Product Schedule" product within the Electronic Banking area.',
        ],
      },
      {
        role: 'Backend Developer · Scrum Master · Middleware Engineer',
        date: 'December 2020 – August 2023',
        location: 'La Paz, Bolivia',
        description: [
          'Provided middleware support and integration development for Tigo Bolivia (telecommunications), maintaining production stability of Linux servers running JBoss Fuse for mission-critical Java services.',
          'Built multiple Java/Spring Boot microservices deployed to production on Kubernetes, achieving 90% unit test coverage.',
          'Led Agile ceremonies for frontend (Angular) and backend (Spring Boot) teams as Scrum Master and technical team leader.',
        ],
      },
      {
        role: 'Freelance Developer',
        date: 'April 2023 – July 2023',
        location: 'Canada (Remote)',
        description: [
          'Contributed to the "Oracle Upgrade 19c" project, resolving multiple tasks tracked through JIRA.',
          'Used Flyway to migrate database scripts to Oracle 19c; authored unit tests with Groovy and Spock.',
        ],
      },
      {
        role: 'Freelance Developer',
        date: 'May 2022',
        location: 'Canada (Remote)',
        description: [
          'Collaborated on migrating project SOEG-CMI from Java 8 to Java 11.',
          'Replaced an obsolete applet with JSP (HTML + Servlet POST).',
          'Implemented OIDC (OpenID Connect) to replace legacy cookie-based authentication.',
        ],
      },
      {
        role: 'Freelance Developer',
        date: 'December 2021 – April 2022',
        location: 'Canada (Remote)',
        description: [
          'Built a bank account type mapping service (PBACC API) exposing multiple REST endpoints.',
          'Refactored the existing codebase to improve readability and team maintainability.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Work',
    title: 'Featured projects',
    description:
      'A selection of projects that showcase how I design and ship backend systems.',
    items: [
      {
        title: 'Banking Microservices Platform',
        description:
          'Production-grade credit transaction microservices built with an API-First, Hexagonal Architecture approach for the Electronic Banking area.',
      },
      {
        title: 'Survey System (Capstone)',
        description:
          'Full-stack survey platform with dynamic forms, analytics and role-based access. Built as the university capstone project.',
      },
      {
        title: 'MongoDB Schema Migration Tool',
        description:
          'A Flyway-style versioned migration tool for MongoDB, delivered as an additional initiative for the bank. Built with Kotlin and Spring Data MongoDB, it runs mongosh migration scripts automatically through GitLab CI/CD pipelines.',
      },
    ],
  },
  stats: {
    labels: [
      'Years of Experience',
      'Unit Test Coverage',
      'Technologies Mastered',
      'Certifications',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something together',
    description:
      'Have a role, a project, or just want to say hi? Drop me a message and I’ll get back to you.',
    getInTouch: 'Get in touch',
    blurb:
      'Based in La Paz, Bolivia. Open to remote backend roles and freelance collaborations.',
    name: 'Name',
    namePlaceholder: 'Jane Doe',
    email: 'Email',
    emailPlaceholder: 'jane@company.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project or role…',
    send: 'Send message',
    sending: 'Sending…',
    successSent: 'Thanks! Your message has been sent.',
    successMailto: 'Opening your email app…',
    error: 'Something went wrong. Please email me directly.',
  },
  footer: { rights: 'All rights reserved.' },
};

const es: Translation = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    technologies: 'Tecnologías',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  cta: 'Hablemos',
  meta: { menuOpen: 'Abrir menú', menuClose: 'Cerrar menú' },
  controls: {
    toggleTheme: 'Cambiar tema claro/oscuro',
    toggleLang: 'Cambiar idioma',
    backToTop: 'Volver arriba',
    scrollDown: 'Ir a la sección Sobre mí',
  },
  hero: {
    badge: 'Disponible para nuevas oportunidades',
    greeting: 'Hola, soy',
    role: 'Desarrollador Backend Java',
    tagline:
      'Especializado en Java, Spring Boot, Kotlin, Arquitectura Hexagonal y Microservicios.',
    viewProjects: 'Ver proyectos',
    downloadCV: 'Descargar CV',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Un poco sobre mi trayectoria',
    description:
      'Ingeniero backend al que le gusta convertir requerimientos complejos en servicios confiables y bien probados.',
    paragraphs: [
      'Soy ingeniero de software enfocado en backend con más de 4 años de experiencia diseñando y desplegando microservicios en Java y Spring Boot para los sectores de telecomunicaciones y banca.',
      'Comencé mi carrera en Quantum S.R.L., una consultora de TI, dando soporte a Tigo Bolivia en middleware y como desarrollador junior — ahí aprendí a mantener sistemas críticos funcionando en producción.',
      'Hoy entrego APIs REST de nivel productivo con alta cobertura de pruebas, aplicando principios API-First y Arquitectura Hexagonal. He liderado equipos Ágiles como Scrum Master y colaborado con clientes internacionales en Canadá (TD Bank, AT&T, Enverus). Me importa el código limpio y mantenible y entregar software confiable. Fluido en inglés y español.',
    ],
    highlights: [
      { label: 'Ubicación', value: 'La Paz, Bolivia' },
      { label: 'Enfoque', value: 'Backend y Microservicios' },
      { label: 'Idiomas', value: 'Inglés · Español' },
      { label: 'Disponible para', value: 'Oportunidades remotas' },
    ],
  },
  technologies: {
    eyebrow: 'Stack técnico',
    title: 'Tecnologías con las que trabajo',
    description:
      'Las herramientas y plataformas que uso para diseñar, construir y desplegar sistemas en producción.',
  },
  experience: {
    eyebrow: 'Carrera',
    title: 'Experiencia profesional',
    description:
      'Más de cuatro años construyendo sistemas backend para banca y telecomunicaciones, incluyendo trabajo remoto con clientes canadienses.',
    items: [
      {
        role: 'Desarrollador Backend',
        date: 'Diciembre 2024 – Actualidad',
        location: 'La Paz, Bolivia',
        description: [
          'Desarrollo microservicios REST en Spring Boot siguiendo un enfoque API-First, documentando requerimientos en Confluence.',
          'Entrego funcionalidades de transacciones de crédito para el producto "Plan de Productos" del banco, dentro del área de Banca Electrónica.',
        ],
      },
      {
        role: 'Desarrollador Backend · Scrum Master · Ingeniero Middleware',
        date: 'Diciembre 2020 – Agosto 2023',
        location: 'La Paz, Bolivia',
        description: [
          'Brindé soporte de middleware y desarrollo de integraciones para Tigo Bolivia (telecomunicaciones), manteniendo la estabilidad en producción de servidores Linux con JBoss Fuse para servicios Java críticos.',
          'Construí múltiples microservicios Java/Spring Boot desplegados en producción sobre Kubernetes, alcanzando 90% de cobertura de pruebas unitarias.',
          'Lideré ceremonias Ágiles para equipos de frontend (Angular) y backend (Spring Boot) como Scrum Master y líder técnico.',
        ],
      },
      {
        role: 'Desarrollador Freelance',
        date: 'Abril 2023 – Julio 2023',
        location: 'Canadá (Remoto)',
        description: [
          'Contribuí al proyecto "Oracle Upgrade 19c", resolviendo múltiples tareas gestionadas a través de JIRA.',
          'Usé Flyway para migrar scripts de base de datos a Oracle 19c; escribí pruebas unitarias con Groovy y Spock.',
        ],
      },
      {
        role: 'Desarrollador Freelance',
        date: 'Mayo 2022',
        location: 'Canadá (Remoto)',
        description: [
          'Colaboré en la migración del proyecto SOEG-CMI de Java 8 a Java 11.',
          'Reemplacé un applet obsoleto con JSP (HTML + Servlet POST).',
          'Implementé OIDC (OpenID Connect) para reemplazar la autenticación heredada basada en cookies.',
        ],
      },
      {
        role: 'Desarrollador Freelance',
        date: 'Diciembre 2021 – Abril 2022',
        location: 'Canadá (Remoto)',
        description: [
          'Construí un servicio de mapeo de tipos de cuenta bancaria (PBACC API) exponiendo múltiples endpoints REST.',
          'Refactoricé el código existente para mejorar la legibilidad y el mantenimiento del equipo.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Trabajo',
    title: 'Proyectos destacados',
    description:
      'Una selección de proyectos que muestran cómo diseño y entrego sistemas backend.',
    items: [
      {
        title: 'Plataforma de Microservicios Bancarios',
        description:
          'Microservicios de transacciones de crédito de nivel productivo construidos con un enfoque API-First y Arquitectura Hexagonal para el área de Banca Electrónica.',
      },
      {
        title: 'Sistema de Encuestas (Proyecto de Grado)',
        description:
          'Plataforma full-stack de encuestas con formularios dinámicos, analítica y acceso basado en roles. Desarrollada como proyecto de grado universitario.',
      },
      {
        title: 'Herramienta de Migración de Esquemas MongoDB',
        description:
          'Herramienta de migración versionada al estilo Flyway pero para MongoDB, presentada como iniciativa adicional para el banco. Construida con Kotlin y Spring Data MongoDB, ejecuta scripts de migración con mongosh de forma automática mediante pipelines de GitLab CI/CD.',
      },
    ],
  },
  stats: {
    labels: [
      'Años de experiencia',
      'Cobertura de pruebas',
      'Tecnologías dominadas',
      'Certificaciones',
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Construyamos algo juntos',
    description:
      '¿Tienes una vacante, un proyecto o solo quieres saludar? Envíame un mensaje y te responderé.',
    getInTouch: 'Ponte en contacto',
    blurb:
      'Radicado en La Paz, Bolivia. Abierto a roles backend remotos y colaboraciones freelance.',
    name: 'Nombre',
    namePlaceholder: 'Juan Pérez',
    email: 'Correo',
    emailPlaceholder: 'juan@empresa.com',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto o vacante…',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    successSent: '¡Gracias! Tu mensaje ha sido enviado.',
    successMailto: 'Abriendo tu aplicación de correo…',
    error: 'Algo salió mal. Por favor escríbeme directamente.',
  },
  footer: { rights: 'Todos los derechos reservados.' },
};

export const translations: Record<Lang, Translation> = { en, es };
