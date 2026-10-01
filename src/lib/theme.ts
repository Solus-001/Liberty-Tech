export const THEME_KEY = "liberty-tech-theme";

export const THEMES = [
  { id: "noir", label: "Noir", color: "#080808" },
  { id: "abstract", label: "Abstract", color: "#110027" },
  { id: "deconstruct", label: "Deconstruct", color: "#fbfaf6" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export function isTheme(value: unknown): value is ThemeId {
  return THEMES.some((t) => t.id === value);
}

const listeners = new Set<() => void>();

export function getTheme(): ThemeId {
  const value = document.documentElement.getAttribute("data-theme");
  return isTheme(value) ? value : "noir";
}

export function subscribeTheme(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function setTheme(id: ThemeId) {
  const root = document.documentElement;
  if (id === "noir") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", id);

  const color = THEMES.find((t) => t.id === id)?.color;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta && color) meta.setAttribute("content", color);

  try {
    localStorage.setItem(THEME_KEY, id);
  } catch {
    /* blocked storage — theme still applies for this visit */
  }
  listeners.forEach((l) => l());
}

/** Runs in <head> before first paint so a saved theme never flashes. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY,
)});var c=${JSON.stringify(
  Object.fromEntries(THEMES.map((x) => [x.id, x.color])),
)};if(t&&t!=="noir"&&c[t]){document.documentElement.setAttribute("data-theme",t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",c[t]);}}catch(e){}})();`;
