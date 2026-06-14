import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";
import { getTechLogo } from "@/components/TechLogos";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Abishek Portfolio" },
      { name: "description", content: "Technical skills, tools, and professional capabilities." },
    ],
  }),
  component: SkillsPage,
});

const tech = [
  { name: "Java", value: 92, color: "#007396" },
  { name: "Python", value: 88, color: "#306998" },
  { name: "JavaScript", value: 85, color: "#f7df1e" },
  { name: "React.js", value: 82, color: "#61dafb" },
  { name: "TensorFlow", value: 76, color: "#FF6F00" },
  { name: "MongoDB", value: 74, color: "#47A248" },
];

const otherSkills = [
  { name: "C++", level: 4 },
  { name: "SQL", level: 4 },
  { name: "Data Structures", level: 5 },
  { name: "Problem Solving", level: 5 },
  { name: "Linux", level: 3 },
];

const proSkills = [
  { name: "Communication", value: 90 },
  { name: "Teamwork", value: 85 },
  { name: "Time Management", value: 85 },
  { name: "Adaptability", value: 80 },
  { name: "Problem Solving", value: 90 },
];

function CircularProgress({ value, label, color }: { value: number; label: string; color: string }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const logoSvg = getTechLogo(label);

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="w-12 h-12 rounded-md flex items-center justify-center font-display font-black text-sm"
        style={{ background: `${color}22`, border: `1px solid ${color}66` }}
      >
        {logoSvg ? (
          <div className="w-8 h-8">{logoSvg}</div>
        ) : (
          <span style={{ color }}>{label.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className="text-[11px] text-foreground/80">{label}</span>
      <div className="relative w-14 h-14">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="oklch(0.3 0.05 150)" strokeWidth="8" />
          <motion.circle
            cx="50" cy="50" r={r} fill="none"
            stroke="var(--neon)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c - (c * value) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 6px var(--neon))" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display font-bold neon-text">
          {value}%
        </span>
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <PortfolioLayout title="SKILLS" subtitle="My Abilities. My Weapons.">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.75fr]">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Panel className="max-w-[760px] mx-auto px-4 py-4">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-neon/70">TECHNICAL SKILLS</p>
                    <h2 className="mt-2 text-2xl font-black text-white leading-tight">My Core Technologies</h2>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-neon/80">95% top skill</span>
                </div>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08 } },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {tech.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="rounded-[1.5rem] border border-neon/20 bg-black/30 p-2 text-center shadow-[0_0_14px_rgba(0,255,136,0.05)]"
                    >
                      <CircularProgress {...item} label={item.name} />
                    </motion.div>
                  ))}
                </motion.div>
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
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.35em] text-neon/70">OTHER SKILLS</p>
                <span className="text-sm uppercase tracking-[0.28em] text-neon/80">strengths</span>
              </div>
              <motion.div
                className="mt-5 grid gap-4 sm:grid-cols-2"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                {otherSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-[1.75rem] border border-neon/20 bg-black/30 p-4 flex items-center gap-4"
                  >
                    <div className="rounded-full border border-neon/30 bg-black/40 w-12 h-12 flex items-center justify-center text-neon font-bold">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white">{skill.name}</p>
                      <div className="mt-3 flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`block h-2 rounded-full ${index < skill.level ? "flex-1 bg-neon neon-glow" : "w-3 bg-foreground/20"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Panel>
          </motion.div>
        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Panel className="max-w-[360px] mx-auto rounded-[1.75rem] border border-neon/30 bg-black/20 p-4 shadow-[0_0_40px_rgba(0,255,136,0.14)]">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-neon/70">SKILL MATRIX</p>
                  <h3 className="mt-2 text-xl font-black text-white">Performance Map</h3>
                </div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-neon/80">core stats</span>
              </div>
              <div className="relative aspect-square rounded-[1.75rem] border border-neon/20 bg-black/30 p-4 overflow-hidden">
                <div className="absolute inset-0 grid place-items-center opacity-40">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <polygon points="100,20 170,80 140,170 60,170 30,80" fill="none" stroke="rgba(0,255,136,0.24)" strokeWidth="1" />
                    <polygon points="100,40 150,95 125,150 75,150 50,95" fill="none" stroke="rgba(0,255,136,0.18)" strokeWidth="1" />
                    <polygon points="100,60 130,100 110,130 90,130 70,100" fill="none" stroke="rgba(0,255,136,0.14)" strokeWidth="1" />
                    <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(0,255,136,0.12)" strokeWidth="1" />
                    <line x1="30" y1="80" x2="170" y2="80" stroke="rgba(0,255,136,0.12)" strokeWidth="1" />
                  </svg>
                </div>
                <svg viewBox="0 0 200 200" className="relative w-full h-full">
                  <polygon points="100,40 150,95 125,150 75,150 50,95" fill="rgba(0,255,136,0.16)" stroke="var(--neon)" strokeWidth="2" />
                  <circle cx="100" cy="40" r="4" fill="var(--neon)" />
                  <circle cx="150" cy="95" r="4" fill="var(--neon)" />
                  <circle cx="125" cy="150" r="4" fill="var(--neon)" />
                  <circle cx="75" cy="150" r="4" fill="var(--neon)" />
                  <circle cx="50" cy="95" r="4" fill="var(--neon)" />
                </svg>
                <div className="absolute inset-0 flex flex-col justify-between px-4 py-6 pointer-events-none">
                  <span className="self-center text-[10px] uppercase tracking-[0.28em] text-neon/70">Frontend</span>
                  <div className="flex justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-neon/70">Problem Solving</span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-neon/70">Backend</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-neon/70">Tools</span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-neon/70">DSA</span>
                  </div>
                </div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
