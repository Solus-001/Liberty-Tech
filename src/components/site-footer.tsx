import { BrandMark } from "@/components/mark";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <p className="font-display text-xl tracking-mark text-fg uppercase">
                {site.name}
              </p>
              <p className="text-xs tracking-[0.2em] text-muted uppercase">
                {site.byline} · {site.region}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="text-xs tracking-[0.2em] text-subtle uppercase">Call</p>
            <ul className="mt-2 space-y-1">
              {site.phones.map((p) => (
                <li key={p.display}>
                  <a href={p.href} className="text-sm text-fg hover:text-accent">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-subtle uppercase">Write</p>
            <ul className="mt-2 space-y-1">
              {site.emails.map((addr) => (
                <li key={addr}>
                  <a
                    href={`mailto:${addr}`}
                    className="text-sm text-fg break-all hover:text-accent"
                  >
                    {addr}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs tracking-[0.16em] text-subtle uppercase sm:px-8">
          Liberty Tech · South Africa · Prices in ZAR, quoted before work starts
        </p>
      </div>
    </footer>
  );
}
