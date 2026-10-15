import {
  ArrowRight, BookOpen, Boxes, Brain, Check, Compass, Copy, Droplets, Facebook, Flag, GraduationCap, HandHeart,
  Heart, Info, Landmark, Lightbulb, Mail, Menu, Mic, Minus, Moon, Mountain, Network, PlayCircle, Scale, Search,
  SearchX, ShieldCheck, Sprout, Sun, Target, Users, Waypoints, Wrench, X, Youtube, Zap,
  type LucideIcon,
} from "lucide-react";

/** Bộ icon Lucide (nét 2px, đầu tròn) — gọi bằng tên chuỗi để dùng được cả ở server lẫn client component. */
const ICONS = {
  "arrow-right": ArrowRight, "book-open": BookOpen, boxes: Boxes, brain: Brain, check: Check, compass: Compass,
  copy: Copy, droplets: Droplets, facebook: Facebook, flag: Flag, "graduation-cap": GraduationCap,
  "hand-heart": HandHeart, heart: Heart, info: Info, landmark: Landmark, lightbulb: Lightbulb, mail: Mail,
  menu: Menu, mic: Mic, minus: Minus, moon: Moon, mountain: Mountain, network: Network, "play-circle": PlayCircle,
  scale: Scale, search: Search, "search-x": SearchX, "shield-check": ShieldCheck, sprout: Sprout, sun: Sun,
  target: Target, users: Users, waypoints: Waypoints, wrench: Wrench, x: X, youtube: Youtube, zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 24, className, label }: { name: IconName; size?: number; className?: string; label?: string }) {
  const Cmp = ICONS[name];
  return <Cmp width={size} height={size} strokeWidth={2} className={className} aria-hidden={label ? undefined : true} aria-label={label} role={label ? "img" : undefined} style={{ flex: "none" }} />;
}
