import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, Star } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Omnitrix Portfolio" },
      { name: "description", content: "Internships and professional development experience." },
    ],
  }),
  component: ExperiencePage,
});

const exp = [
  {
    years: "May 2025 – July 2025",
    role: "Front-End Development Intern",
    company: "Zero2Site",
    type: "Remote",
    desc: "Built responsive web apps using React.js, HTML, CSS, and JavaScript. Used Git/GitHub and Agile workflows for development and collaboration.",
    stack: ["React.js", "HTML", "CSS", "JavaScript", "Git"],
    wins: ["Built responsive and accessible user interfaces", "Delivered features using Agile workflows", "Managed version control with Git/GitHub"],
  },
  {
    years: "Nov 2025 – Dec 2025",
    role: "AI Intern",
    company: "Reach Skyline",
    type: "Remote",
    desc: "Developed a CMR dashboard for document and data management. Implemented clause-level document analysis to improve accuracy.",
    stack: ["Python", "AI", "Dashboard", "Document Analysis", "Git"],
    wins: ["Built an AI-powered document management dashboard", "Implemented clause-level analysis for better accuracy", "Delivered real-time monitoring and reporting features"],
  },
];

const strengths = [
  { name: "Problem Solving", value: 90 },
  { name: "Adaptability", value: 85 },
  { name: "Teamwork", value: 88 },
  { name: "Communication", value: 90 },
  { name: "Time Management", value: 85 },
];

function ExperiencePage() {
  return (
    <PortfolioLayout title="EXPERIENCE" subtitle="Every experience adds power. Every challenge makes me stronger.">
      <div className="grid lg:grid-cols-[1fr_280px] gap-4">
        <Panel>
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="w-6 h-6 text-neon" />
            <h3 className="font-display font-bold text-neon tracking-widest">MY EXPERIENCE JOURNEY</h3>
            <span className="text-xs text-foreground/60 ml-auto">Real-world experience. Real impact.</span>
          </div>
          <div className="relative space-y-5 mt-4">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-neon/40" />
            {exp.map((e) => (
              <div key={e.role} className="grid grid-cols-[auto_auto_1fr] gap-4">
                <div className="w-6 h-6 mt-1 rounded-full border-2 border-neon bg-background neon-glow" />
                <div className="text-xs text-neon font-bold tracking-wider w-20 pt-1">{e.years}</div>
                <div className="neon-panel rounded-md p-4">
                  <h4 className="font-display font-bold text-neon">{e.role}</h4>
                  <p className="font-bold">{e.company} <span className="text-neon">| {e.type}</span></p>
                  <p className="text-sm text-foreground/85 mt-2">{e.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {e.stack.map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-sm border border-neon/40 text-neon">{s}</span>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-neon/20">
                    <p className="text-xs font-bold text-neon mb-1 flex items-center gap-1"><Star className="w-3 h-3" /> KEY ACHIEVEMENTS</p>
                    <ul className="text-xs space-y-0.5 text-foreground/85">
                      {e.wins.map((w) => <li key={w}>• {w}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <h3 className="text-neon font-display font-bold tracking-widest mb-3 text-sm">📈 EXPERIENCE SUMMARY</h3>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(0.3 0.05 150)" strokeWidth="6" />
                  <motion.circle cx="50" cy="50" r="42" fill="none" stroke="var(--neon)" strokeWidth="6" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 42}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 42 * 0.25 }}
                    transition={{ duration: 1.4 }}
                    style={{ filter: "drop-shadow(0 0 6px var(--neon))" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-black text-3xl neon-text">2+</span>
                  <span className="text-[10px] tracking-wider">YEARS</span>
                </div>
              </div>
              <p className="text-xs tracking-widest text-foreground/70 mt-2">TOTAL EXPERIENCE</p>
            </div>
          </Panel>

          <Panel>
            <h3 className="text-neon font-display font-bold tracking-widest mb-3 text-sm">⚡ CORE STRENGTHS</h3>
            <div className="space-y-2.5">
              {strengths.map((s) => (
                <div key={s.name} className="grid grid-cols-[1fr_auto] gap-2 text-xs">
                  <span>{s.name}</span>
                  <span className="text-neon font-bold">{s.value}%</span>
                  <div className="col-span-2 h-1.5 bg-foreground/10 rounded-sm overflow-hidden">
                    <motion.div className="h-full bg-neon" initial={{ width: 0 }} animate={{ width: `${s.value}%` }} transition={{ duration: 1.2 }} />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </PortfolioLayout>
  );
}
