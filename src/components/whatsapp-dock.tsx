import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/content";

export function WhatsappDock() {
  return (
    <a
      href={waLink(site.phones[0].wa)}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-30 flex h-14 items-center gap-2 rounded-full border border-fg/20 bg-fg px-5 text-sm font-medium text-bg shadow-dock transition-[transform,background-color] duration-150 ease-out hover:bg-accent active:scale-[0.96] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-4" />
      Chat
    </a>
  );
}
