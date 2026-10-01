import { useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribeTheme, THEMES, type ThemeId } from "@/lib/theme";
import { cn } from "@/lib/utils";

const swatch: Record<ThemeId, string> = {
  noir: "linear-gradient(135deg, #080808 0 55%, #f3f3f1 55%)",
  abstract: "linear-gradient(135deg, #6a2bd9, #ff4f93 55%, #ffb13d)",
  deconstruct: "linear-gradient(135deg, #fbfaf6 0 34%, #f5a31a 34% 67%, #5ab3e8 67%)",
};

export function ThemeDock() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "noir" as ThemeId);

  return (
    <div
      role="radiogroup"
      aria-label="Site theme"
      className="fixed bottom-4 left-4 z-30 flex items-center gap-1 rounded-full border border-border bg-bg-elevated p-1 shadow-dock sm:bottom-6 sm:left-6"
    >
      {THEMES.map((t) => {
        const active = theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={active}
            title={t.label}
            onClick={() => setTheme(t.id)}
            className={cn(
              "flex h-11 items-center gap-2 rounded-full px-2 text-xs font-medium tracking-wide transition-[background-color,color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg active:scale-[0.96] sm:pr-3",
              active ? "bg-fg text-bg" : "text-muted hover:text-fg",
            )}
          >
            <span
              aria-hidden="true"
              className="size-7 shrink-0 rounded-full border border-fg/30"
              style={{ background: swatch[t.id] }}
            />
            <span className={cn("max-sm:sr-only")}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}
