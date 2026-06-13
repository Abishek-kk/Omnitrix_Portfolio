import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { sections } from "@/lib/sections";
import { OmnitrixDial } from "./OmnitrixDial";

export function OmnitrixNav() {
  const location = useLocation();
  const radius = 165;
  const center = 230;

  return (
    <div className="relative" style={{ width: center * 2, height: center * 2 + 20 }}>
      <div className="absolute top-0 left-0 text-xs tracking-[0.3em] text-neon/80">
        SELECT A SECTION
        <div className="mt-1 flex gap-1">
          <span className="h-0.5 w-8 bg-neon" />
          <span className="h-0.5 w-4 bg-neon/60" />
          <span className="h-0.5 w-2 bg-neon/30" />
        </div>
      </div>

      {/* radial buttons */}
      {sections.map((s, i) => {
        const angle = (i / sections.length) * Math.PI * 2 - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle) + 20;
        const Icon = s.icon;
        const active = location.pathname === s.path;
        return (
          <Link
            key={s.id}
            to={s.path}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: x, top: y }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`hex-clip w-20 h-20 flex flex-col items-center justify-center text-center transition-all ${
                active
                  ? "bg-neon/20 text-neon"
                  : "bg-card/60 text-foreground/80 group-hover:bg-neon/10 group-hover:text-neon"
              }`}
              style={{
                filter: active
                  ? "drop-shadow(0 0 10px var(--neon)) drop-shadow(0 0 20px var(--neon))"
                  : "drop-shadow(0 0 4px oklch(0.86 0.27 142 / 0.4))",
              }}
            >
              <Icon className="w-5 h-5 mb-0.5" strokeWidth={2} />
              <div className="text-[9px] font-bold tracking-wider opacity-80">{s.num}</div>
              <div className="text-[8px] font-bold tracking-wider uppercase leading-tight px-1">
                {s.label}
              </div>
            </motion.div>
          </Link>
        );
      })}

      {/* center dial */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: center, top: center + 20 }}
      >
        <OmnitrixDial size={220} />
      </div>
    </div>
  );
}
