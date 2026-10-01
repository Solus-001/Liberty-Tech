import { steps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="border-t border-border">
      <div className="relative overflow-hidden">
        <img
          src="/images/bench.jpg"
          alt="Open laptop and tools on the Liberty Tech repair bench"
          className="h-64 w-full object-cover object-center sm:h-80 lg:h-[22rem] outline-none"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/25 to-bg/40" />
        <p className="absolute bottom-5 left-5 font-display text-sm tracking-label text-fg uppercase sm:left-8">
          The bench · no theatre
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-xs font-medium tracking-label text-muted uppercase">
          How a job runs
        </p>
        <h2 className="mt-4 max-w-xl font-display text-5xl uppercase tracking-wide text-fg sm:text-6xl">
          Message. Quote. Fix.
        </h2>

        <ol className="mt-14 grid gap-px bg-border sm:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="bg-bg px-5 py-8 sm:px-8">
              <span className="font-display text-sm tracking-label text-subtle">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-fg">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
