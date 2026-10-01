import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-full border border-fg/70 text-mark font-display font-semibold leading-none tracking-[0.12em] text-fg",
        className,
      )}
      aria-hidden="true"
    >
      <span className="text-center">
        LT
        <br />
        TECH
      </span>
    </span>
  );
}
