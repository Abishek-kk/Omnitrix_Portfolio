import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Brain, Code2, Lightbulb, Users, TrendingUp } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Abishek Portfolio" },
      { name: "description", content: "Education journey, degrees, and academic highlights." },
    ],
  }),
  component: EducationPage,
});

const journey = [
  {
    icon: GraduationCap,
    years: "2022 - 2026",
    title: "BACHELOR OF TECHNOLOGY (B.Tech)",
    sub: "Computer Science and Engineering",
    place: "Chennai Institute of Technology (CIT), Tamil Nadu",
    metric: "CGPA: 8.45 / 10.0",
    highlights: ["Specialized in Full Stack Development", "Participated in Hackathons", "Active in Coding Societies"],
  },
  {
    icon: School,
    years: "2020 - 2022",
    title: "HIGHER SECONDARY EDUCATION (12th)",
    sub: "Science Stream (PCM)",
    place: "SUBRAMANIA BHARATHI MATRIC HR SEC SCHOOL, MELUR",
    metric: "Percentage: 74.5%",
    highlights: ["Strong foundation in Mathematics", "Active in Science exhibitions", "Secured strong academic results"],
  },
  {
    icon: BookOpen,
    years: "2018 - 2020",
    title: "SECONDARY EDUCATION (10th)",
    sub: "Matriculation",
    place: "SUBRAMANIA BHARATHI MATRIC HR SEC SCHOOL, MELUR",
    metric: "Percentage: 72.3%",
    highlights: ["Excellent academic performance", "Participated in quizzes & olympiads", "School topper in Computer Science"],
  },
];

const learnings = [
  { icon: Brain, label: "Problem Solving" },
  { icon: Code2, label: "Logical Thinking" },
  { icon: Lightbulb, label: "Creativity & Innovation" },
  { icon: Users, label: "Teamwork & Leadership" },
  { icon: TrendingUp, label: "Continuous Learning" },
];

function EducationPage() {
  return (
    <PortfolioLayout title="EDUCATION" subtitle="Knowledge is the ultimate power.">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Panel className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-neon" />
              <h3 className="font-display font-bold text-neon tracking-widest text-sm">MY EDUCATION JOURNEY</h3>
            </div>
            <p className="text-xs text-foreground/70 mb-4">Every step of learning has shaped my skills, mindset and passion for technology.</p>

            <motion.div
              className="space-y-4 relative"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="absolute left-6 top-6 bottom-6 w-px bg-neon/40" />
              {journey.map((j) => {
                const Icon = j.icon;
                return (
                  <motion.div
                    key={j.title}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="grid grid-cols-[auto_auto_1fr_auto] gap-4 items-start"
                  >
                    <div className="relative w-12 h-12 rounded-full border-2 border-neon flex items-center justify-center bg-background neon-glow">
                      <Icon className="w-5 h-5 text-neon" />
                    </div>
                    <div className="text-[11px] text-neon font-bold tracking-wider w-20 pt-2">{j.years}</div>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="neon-panel rounded-md p-3"
                    >
                      <h4 className="font-display font-bold text-neon text-sm">{j.title}</h4>
                      <p className="font-bold text-[13px]">{j.sub}</p>
                      {j.place && <p className="text-neon text-xs">{j.place}</p>}
                      <p className="mt-1 text-xs">• <span className="text-neon">{j.metric}</span></p>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="neon-panel rounded-md p-2 w-48 hidden lg:block"
                    >
                      <p className="text-[10px] font-bold text-neon mb-2">★ HIGHLIGHTS</p>
                      <ul className="text-[10px] space-y-1 text-foreground/85">
                        {j.highlights.map((h) => <li key={h}>• {h}</li>)}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </Panel>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Panel>
              <h3 className="text-neon font-display font-bold tracking-widest mb-3">WHAT I BELIEVE</h3>
              <blockquote className="italic text-foreground/85">
                <span className="text-neon text-2xl">"</span>
                The most dangerous form of blindness, is believing that your perspective is the only reality.
                <span className="text-neon text-2xl">"</span>
              </blockquote>
            </Panel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Panel>
              <h3 className="text-neon font-display font-bold tracking-widest mb-3">KEY LEARNINGS</h3>
              <motion.div
                className="grid grid-cols-5 gap-2"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                {learnings.map((l) => {
                  const Icon = l.icon;
                  return (
                    <motion.div
                      key={l.label}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex flex-col items-center gap-2 hex-clip bg-neon/5 p-2 border border-neon/30"
                    >
                      <Icon className="w-6 h-6 text-neon mt-1" />
                      <span className="text-[10px] text-center leading-tight">{l.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Panel>
          </motion.div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
