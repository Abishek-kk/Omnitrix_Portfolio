import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Code2, Award, Users, Trophy, Zap, Star, Rocket } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Omnitrix Portfolio" },
      { name: "description", content: "Milestones, awards, and accomplishments." },
    ],
  }),
  component: AchievementsPage,
});

const filters = ["ALL", "ACADEMIC", "TECHNICAL", "COMPETITION", "COMMUNITY", "LEADERSHIP"] as const;

const items = [
  { icon: Award, title: "MUMBAI HACKS FINALIST", desc: "Reached the finalist round in a high-impact hackathon focused on innovation and rapid prototyping.", year: "2025", tag: "COMPETITION" },
  { icon: Award, title: "ESCAPE DA VINCI FINALIST", desc: "Selected as a finalist in a creative technology challenge blending art and engineering.", year: "2025", tag: "COMPETITION" },
  { icon: Trophy, title: "GRAND MASTER – TECH NOVA", desc: "Achieved top recognition in the Tech Nova competitive event for technical excellence.", year: "2025", tag: "TECHNICAL" },
  { icon: Users, title: "KAAVAL HACKATHON", desc: "Participated in a security-focused hackathon and delivered a working prototype under pressure.", year: "2025", tag: "COMPETITION" },
];

function AchievementsPage() {
  const [filter, setFilter] = useState<typeof filters[number]>("ALL");
  const visible = items.filter((i) => filter === "ALL" || i.tag === filter);

  return (
    <PortfolioLayout title="ACHIEVEMENTS" subtitle="Milestones that define my journey.">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Panel>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-neon" />
              <h3 className="font-display font-bold text-neon tracking-widest">MY ACHIEVEMENTS</h3>
              <span className="text-xs text-foreground/70 ml-auto">Proud moments that reflect my hard work, dedication and passion.</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setFilter(f)}
                  whileTap={{ scale: 0.94 }}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold tracking-widest transition ${
                    filter === f
                      ? "bg-neon text-primary-foreground neon-glow"
                      : "neon-panel hover:bg-neon/10 text-foreground/80"
                  }`}
                >
                  {f}
                </motion.button>
              ))}
            </div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {visible.map((it) => {
                const Icon = it.icon;
                return (
                  <motion.div
                    key={it.title}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="neon-panel rounded-md p-4 flex flex-col items-center text-center gap-2 hover:bg-neon/5 transition"
                  >
                    <div className="hex-clip w-16 h-16 bg-neon/10 flex items-center justify-center border border-neon/40">
                      <Icon className="w-7 h-7 text-neon" />
                    </div>
                    <h4 className="font-display font-bold text-neon text-sm tracking-wider">{it.title}</h4>
                    <p className="text-xs text-foreground/80">{it.desc}</p>
                    <div className="flex gap-2 text-[10px] mt-auto pt-2">
                      <span className="px-2 py-0.5 border border-neon/40 rounded-sm text-neon">{it.year}</span>
                      <span className="px-2 py-0.5 border border-neon/40 rounded-sm text-neon">{it.tag}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </Panel>
        </motion.div>
      </div>
    </PortfolioLayout>
  );
}
