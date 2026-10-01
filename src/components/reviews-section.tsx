import { reviews, values } from "@/lib/content";

export function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-4 sm:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-bg-elevated p-6">
              <h3 className="font-display text-2xl uppercase tracking-wide text-fg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-xl">
          <p className="text-xs font-medium tracking-label text-muted uppercase">
            From the queue
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-wide text-fg sm:text-6xl">
            Honest machines, honest people
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {reviews.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-xl border border-border p-6 sm:p-7"
            >
              <blockquote className="text-lg leading-relaxed text-fg">
                {item.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-full border border-border font-display text-sm tracking-wide text-accent"
                >
                  {item.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-medium text-fg">{item.name}</span>
                  <span className="block text-xs tracking-[0.16em] text-muted uppercase">
                    {item.place}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
