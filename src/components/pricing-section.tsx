import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tiers } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-label text-muted uppercase">
            Price (ZAR)
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-wide text-fg sm:text-6xl">
            Three ways in
          </h2>
          <p className="mt-4 text-muted">
            Pick a lane. Final price sits inside the range after diagnostics —
            never a surprise add-on for "looking at it".
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              data-featured={tier.featured ? "" : undefined}
              className={cn(
                "flex flex-col rounded-xl border p-6 sm:p-7",
                tier.featured
                  ? "border-fg/45 bg-bg-elevated"
                  : "border-border bg-bg",
              )}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-3xl uppercase tracking-wide text-fg">
                  {tier.name}
                </h3>
                {tier.featured ? (
                  <span className="rounded-full border border-fg/30 px-2.5 py-1 text-micro tracking-[0.16em] text-accent uppercase">
                    Most booked
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-muted">{tier.summary}</p>
              <p className="mt-6 font-display text-5xl tracking-wide text-fg">
                <span className="mr-2 align-top text-sm tracking-[0.2em] text-subtle uppercase">
                  from
                </span>
                {tier.from}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-sm text-fg">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.75} />
                    {line}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 w-full"
                variant={tier.featured ? "primary" : "outline"}
              >
                <a href={`#contact`}>{tier.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
