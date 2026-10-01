import { type FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { devices, DIAGNOSE, serviceOptions, site, waLink } from "@/lib/content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "liberty-tech-leads";

/**
 * One field, two shapes. A repair customer on a phone is far more likely to
 * type a number than an address, and WhatsApp is the primary channel here — so
 * accept either rather than forcing an email they may not use.
 */
function isUsableContact(value: string): boolean {
  const v = value.trim();
  if (v.includes("@")) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  return /^\+?[\d\s()-]+$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 7;
}

type Lead = {
  name: string;
  contact: string;
  device: string;
  service: string;
  note: string;
  at: string;
};

function saveLead(lead: Lead) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const prev: Lead[] = raw ? (JSON.parse(raw) as Lead[]) : [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([lead, ...prev].slice(0, 50)));
  } catch {
    /* private mode / blocked storage — form still succeeds on screen */
  }
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [device, setDevice] = useState<(typeof devices)[number]>("Laptop");
  const [service, setService] = useState<(typeof serviceOptions)[number]>(DIAGNOSE);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<Lead | null>(null);

  const waText = useMemo(() => {
    const fields = [
      { label: "Name", value: name.trim() },
      { label: "Contact", value: contact.trim() },
      { label: "Device", value: device },
      { label: "Service", value: service },
      { label: "Details", value: note.trim() },
    ].filter((f) => f.value);
    return [
      "Hi Liberty Tech, I need a repair quote.",
      "",
      ...fields.map((f) => `${f.label}: ${f.value}`),
    ].join("\n");
  }, [name, contact, device, service, note]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedContact = contact.trim();
    if (trimmedName.length < 2) {
      setError("Tell us who to reply to.");
      return;
    }
    if (!isUsableContact(trimmedContact)) {
      setError("That does not look like a phone number or an email.");
      return;
    }
    const lead: Lead = {
      name: trimmedName,
      contact: trimmedContact,
      device,
      service,
      note: note.trim(),
      at: new Date().toISOString(),
    };
    saveLead(lead);
    setError("");
    setDone(lead);
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-label text-muted uppercase">
            Book / write
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-wide text-fg sm:text-6xl">
            Send the machine
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Drop your number or email and we will quote in writing. If it is
            urgent, skip the form and WhatsApp — that is the fastest door.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="flex items-center gap-2 text-xs tracking-[0.2em] text-subtle uppercase">
                <Phone className="size-3.5" /> Call / WhatsApp
              </dt>
              <dd className="mt-2 flex flex-col gap-1">
                {site.phones.map((p) => (
                  <a
                    key={p.display}
                    href={waLink(p.wa)}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl tracking-wide text-fg transition-colors duration-150 hover:text-accent"
                  >
                    {p.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-xs tracking-[0.2em] text-subtle uppercase">
                <Mail className="size-3.5" /> Email
              </dt>
              <dd className="mt-2 flex flex-col gap-1">
                {site.emails.map((addr) => (
                  <a
                    key={addr}
                    href={`mailto:${addr}`}
                    className="text-sm text-fg underline-offset-4 hover:underline"
                  >
                    {addr}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-border bg-bg-elevated p-5 sm:p-8">
          {done ? (
            <div className="flex min-h-80 flex-col justify-center">
              <CheckCircle2 className="size-8 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-3xl uppercase tracking-wide text-fg">
                Request received
              </h3>
              <p className="mt-3 text-muted">
                We will write back to <span className="text-fg">{done.contact}</span>.
                Keep the thread — or ping us on WhatsApp with the same details.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a
                    href={waLink(site.phones[0].wa, waText)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp this job
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDone(null);
                    setNote("");
                  }}
                >
                  Send another
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lead-name">Name</Label>
                  <Input
                    id="lead-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lead-contact">Contact</Label>
                  <Input
                    id="lead-contact"
                    name="contact"
                    type="text"
                    inputMode="tel"
                    autoComplete="tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone or email"
                    required
                  />
                </div>
              </div>

              <fieldset className="flex flex-col gap-2">
                <legend className="text-xs font-medium tracking-[0.16em] uppercase text-muted">
                  Device
                </legend>
                <div className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {devices.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setDevice(item)}
                      className={cn(
                        "h-12 rounded-md border text-sm transition-[background-color,border-color,color] duration-150",
                        device === item
                          ? "border-fg bg-fg text-bg"
                          : "border-border bg-bg text-fg hover:border-fg/30",
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="flex flex-col gap-2">
                <legend className="text-xs font-medium tracking-[0.16em] uppercase text-muted">
                  Service
                </legend>
                <div className="mt-1 flex flex-wrap gap-2">
                  {serviceOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={service === item}
                      onClick={() => setService(item)}
                      className={cn(
                        "rounded-full border px-3 py-2 text-sm transition-[background-color,border-color,color] duration-150",
                        service === item
                          ? "border-fg bg-fg text-bg"
                          : "border-border bg-bg text-fg hover:border-fg/30",
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <Label htmlFor="lead-note">What is wrong</Label>
                <textarea
                  id="lead-note"
                  name="note"
                  rows={4}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Won't boot, slow, locked out, lost files…"
                  className="w-full resize-y rounded-md border border-border bg-bg px-3.5 py-3 text-base text-fg placeholder:text-subtle transition-[border-color] duration-150 focus-visible:border-fg/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
                />
              </div>

              {error ? (
                <p role="alert" className="text-sm text-accent">
                  {error}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" className="sm:min-w-48">
                  Request a quote
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={waLink(site.phones[0].wa, waText)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Or WhatsApp
                  </a>
                </Button>
              </div>
              <p className="text-xs leading-relaxed text-subtle">
                We keep the request on this device so we can pick it up if you
                come back. No mailing list. No third-party form farm.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
