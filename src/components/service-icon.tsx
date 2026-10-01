import {
  Columns2,
  Disc,
  Gauge,
  HardDrive,
  KeyRound,
  ScanSearch,
  ShieldOff,
  Smartphone,
} from "lucide-react";
import type { services } from "@/lib/content";

const map = {
  scan: ScanSearch,
  shield: ShieldOff,
  harddrive: HardDrive,
  disc: Disc,
  gauge: Gauge,
  key: KeyRound,
  columns: Columns2,
  phone: Smartphone,
} as const;

type IconName = (typeof services)[number]["icon"];

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.6} />;
}
