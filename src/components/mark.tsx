import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-full border border-fg/70 text-mark font-display font-semibold leading-none text-fg",
        className,
      )}
      aria-hidden="true"
    >
      {/* `text-indent` cancels the trailing letter-space `tracking` adds after
          the final glyph, which would otherwise pull the pair off-centre. */}
      <span className="text-center text-indent-[0.16em] tracking-[0.16em]">
        LT
      </span>
    </span>
  );
}
