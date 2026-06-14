import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/coding-profiles")({
  head: () => ({
    meta: [
      { title: "Coding Profiles — Omnitrix Portfolio" },
      { name: "description", content: "Coding platforms, ratings, and competitive programming stats." },
    ],
  }),
  component: CodingPage,
});

const platforms = [
  { name: "LeetCode", c1: "LEVEL", v1: "Knight", c2: "SOLVED", v2: "1000+", c3: "PROBLEMS", v3: "Solved", c4: "RATING", v4: "1,953" },
  { name: "CodeChef", c1: "RATING", v1: "1,545", c2: "STAR", v2: "2★", c3: "GLOBAL", v3: "#15,400", c4: "CONTESTS", v4: "42" },
  { name: "Codeforces", c1: "RATING", v1: "1,520", c2: "MAX", v2: "1,620", c3: "CONTESTS", v3: "30", c4: "LEVEL", v4: "Pupil" },
  { name: "GitHub", c1: "REPOS", v1: "26", c2: "FOLLOWERS", v2: "18", c3: "CONTRIBS", v3: "620+", c4: "ACTIVE", v4: "2025" },
];

const langs = [
  { name: "Java", value: 80 },
  { name: "Python", value: 8 },
  { name: "C++", value: 7 },
  { name: "JavaScript", value: 3 },
  { name: "SQL", value: 1 },
  { name: "Other", value: 1 },
];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const monthData = [40, 60, 80, 100, 130, 160, 190, 210, 240, 270, 285, 300];

function Sparkline() {
  const points = Array.from({ length: 12 }).map((_, i) => `${i * 10},${30 - Math.sin(i / 1.5) * 10 - i * 1.2}`).join(" ");
  return (
    <svg viewBox="0 0 110 30" className="w-full h-12">
      <polyline points={points} fill="none" stroke="var(--neon)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 3px var(--neon))" }} />
    </svg>
  );
}

function CodingPage() {
  return (
    <PortfolioLayout title="CODING PROFILES" subtitle="Code. Solve. Optimize. Innovate.">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Panel>
            <h3 className="text-neon font-display font-bold tracking-widest text-sm mb-4">🖥 MY CODING JOURNEY ACROSS PLATFORMS</h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {platforms.map((p) => (
                <motion.div
                  key={p.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="neon-panel rounded-md p-3 hover:bg-neon/5 transition"
                >
                  <h4 className="font-display font-bold text-neon mb-3">{p.name}</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div><div className="text-foreground/60">{p.c1}</div><div className="text-neon font-bold">{p.v1}</div></div>
                    <div><div className="text-foreground/60">{p.c2}</div><div className="text-neon font-bold">{p.v2}</div></div>
                    <div><div className="text-foreground/60">{p.c3}</div><div className="text-neon font-bold">{p.v3}</div></div>
                    <div><div className="text-foreground/60">{p.c4}</div><div className="text-neon font-bold">{p.v4}</div></div>
                  </div>
                  <Sparkline />
                </motion.div>
              ))}
            </motion.div>
          </Panel>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Panel>
              <h3 className="text-neon font-display font-bold tracking-widest text-sm mb-3">PROBLEM SOLVING STATS</h3>
              <div className="flex flex-col items-center">
                <div className="font-display font-black text-3xl neon-text">1,159</div>
                <div className="text-xs text-foreground/70 mb-3">LeetCode problems solved</div>
                <div className="w-full space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-emerald-400">● EASY</span><span>454 / 940</span></div>
                  <div className="flex justify-between"><span className="text-amber-400">● MEDIUM</span><span>591 / 2048</span></div>
                  <div className="flex justify-between"><span className="text-red-400">● HARD</span><span>114 / 927</span></div>
                </div>
                <div className="mt-4 w-full">
                  <div className="text-xs text-foreground/70 mb-1">SOLVED OVER TIME</div>
                  <div className="flex items-end gap-1 h-20">
                    {monthData.map((v, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-neon/70 rounded-sm"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${v / 3}px` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[8px] text-foreground/60 mt-1">
                    {months.map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Panel>
              <h3 className="text-neon font-display font-bold tracking-widest text-sm mb-3">MOST USED LANGUAGES</h3>
              <div className="space-y-2.5">
                {langs.map((l) => (
                  <div key={l.name} className="text-xs">
                    <div className="flex justify-between mb-1"><span>{l.name}</span><span className="text-neon">{l.value}%</span></div>
                    <div className="h-1.5 bg-foreground/10 rounded-sm overflow-hidden">
                      <motion.div
                        className="h-full bg-neon"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.value * 2.5}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 neon-panel rounded-md p-3 text-center">
                <div className="text-xs text-foreground/70">TOTAL LANGUAGES USED</div>
                <div className="font-display font-black text-3xl neon-text">12+</div>
              </div>
            </Panel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Panel>
              <h3 className="text-neon font-display font-bold tracking-widest text-sm mb-3">ACHIEVEMENTS & STREAKS</h3>
              <div className="flex items-center gap-3 neon-panel p-3 rounded-md">
                <Flame className="w-10 h-10 text-orange-400" style={{ filter: "drop-shadow(0 0 8px #fb923c)" }} />
                <div>
                  <div className="font-display font-black text-2xl neon-text">395 <span className="text-sm">DAYS</span></div>
                  <div className="text-xs text-foreground/70">Current streak</div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mt-3">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div key={i} className={`aspect-square rounded-sm ${i % 5 === 0 ? "bg-foreground/10" : "bg-neon/70 neon-glow"}`} />
                ))}
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between"><span>LeetCode 1000+ Problems</span><span className="text-neon">2025</span></div>
                <div className="flex justify-between"><span>CodeChef 2★ Achiever</span><span className="text-neon">2025</span></div>
                <div className="flex justify-between"><span>Active on Codeforces & GfG</span><span className="text-neon">2025</span></div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
