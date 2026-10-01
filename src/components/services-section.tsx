import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-label text-muted uppercase">
              What we actually do
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase tracking-wide text-fg sm:text-6xl">
              The bench list
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Eight jobs. Clear ranges in rand. If it is not on this list, ask —
              we still might take it, we just will not invent a SKU for it.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href="/images/rate-card.jpg" download="liberty-tech-rate-card.jpg">
              Download rate card
            </a>
          </Button>
        </div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {services.map((item) => (
            <li key={item.id} className="group">
              <a
                href={`#contact`}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 transition-colors duration-150 hover:bg-fg/5 sm:gap-6 sm:py-6"
              >
                <span className="grid size-11 place-items-center rounded-md border border-border text-accent transition-[border-color] duration-150 group-hover:border-fg/30">
                  <ServiceIcon name={item.icon} className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-xl uppercase tracking-wide text-fg sm:text-2xl">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{item.blurb}</span>
                </span>
                <span className="text-right">
                  <span className="block text-micro tracking-[0.2em] text-subtle uppercase">
                    from
                  </span>
                  <span className="font-display text-xl tabular-nums tracking-wide text-fg sm:text-2xl">
                    {item.from}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
