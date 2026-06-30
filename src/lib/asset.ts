/**
 * Resolves a path inside /public against Vite's configured `base`, so links to
 * static files (photo, CV, og-image) keep working when the site is served from
 * a GitHub Pages subpath like /my-repo/.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}
