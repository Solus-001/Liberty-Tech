import { ArrowDownRight, MessageCircle } from "lucide-react";
import { ThemeHeroArt } from "@/components/theme-hero-art";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/lib/content";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 dot-field opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:pb-0">
        <div className="stagger-in relative z-10 max-w-xl py-6 lg:py-20">
          <p className="text-xs font-medium tracking-label text-muted uppercase">
            {site.byline} · {site.region}
          </p>

          <h1 className="hero-lockup mt-6 font-display uppercase">
            <span className="font-outline block text-hero-a tracking-wide">
              Liberty
            </span>
            <span className="block text-hero-b font-semibold tracking-wide text-fg">
              Tech
            </span>
          </h1>

          <p className="mt-5 max-w-md font-display text-lg tracking-mark text-accent uppercase sm:text-xl">
            {site.tagline}
          </p>

          <p className="mt-5 max-w-md text-base text-muted sm:text-lg">
            {site.pitch}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href="#contact">Book a repair</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={waLink(site.phones[0].wa)} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp us
              </a>
            </Button>
          </div>

          <a
            href="#services"
            className="mt-10 inline-flex items-center gap-2 text-xs font-medium tracking-mark text-muted uppercase transition-colors duration-150 hover:text-fg"
          >
            See the rate card
            <ArrowDownRight className="size-4" />
          </a>
        </div>

        <div className="relative hero-split">
          <ThemeHeroArt />
          <div className="slash-rule pointer-events-none absolute inset-0 z-20" />
          <div className="slash-frame absolute inset-y-0 -right-8 left-0 sm:left-8 lg:left-0">
            <img
              src="/images/bust.jpg"
              alt="Classical marble bust used as the Liberty Tech mark"
              className="bust-crop h-full w-full outline-none"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent lg:bg-linear-to-r lg:from-bg/30 lg:via-transparent" />
          </div>
        </div>
      </div>

      <div className="relative border-t border-border">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {[
            ["From R150", "Mobile reset"],
            ["Windows + Linux", "No OS snobbery"],
            ["Quoted first", "Then we open it"],
            ["Gauteng", "WhatsApp to drop-off"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="border-border px-5 py-5 sm:px-8 max-md:not-last:border-b md:not-last:border-r"
            >
              <dt className="font-display text-xl uppercase tracking-wide text-fg sm:text-2xl">
                {k}
              </dt>
              <dd className="mt-1 text-sm text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
