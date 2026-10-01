import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { nav, site, waLink } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-out",
        scrolled || open
          ? "border-border bg-bg/92"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="flex items-center gap-3 text-fg">
          <BrandMark className="size-9 sm:size-10" />
          <span className="font-display text-lg tracking-mark uppercase">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-mark uppercase text-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" variant="outline">
            <a href={waLink(site.phones[0].wa)} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Book a repair</a>
          </Button>
        </div>

        <button
          type="button"
          className="relative grid size-11 place-items-center rounded-sm text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative size-5">
            <Menu
              className={cn(
                "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200 ease-out",
                open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100",
              )}
            />
            <X
              className={cn(
                "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-200 ease-out",
                open ? "scale-100 opacity-100" : "scale-[0.25] opacity-0 blur-[4px]",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-border bg-bg lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-display text-3xl uppercase tracking-wide text-fg"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button asChild size="lg">
              <a href="#contact" onClick={() => setOpen(false)}>
                Book a repair
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={waLink(site.phones[0].wa)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                WhatsApp {site.phones[0].display}
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
