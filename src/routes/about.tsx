import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Crosshair, Lightbulb, Rocket, Users } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";
import { getTechLogo } from "@/components/TechLogos";
import heroChar from "@/assets/ben10-hero.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abishek Portfolio" },
      { name: "description", content: "Frontend developer and AI & DS student turning ideas into real-world solutions with code." },
    ],
  }),
  component: AboutPage,
});

const traits = [
  { icon: Crosshair, title: "FOCUSED", desc: "I write clean, efficient, and scalable code for real-world systems." },
  { icon: Lightbulb, title: "CREATIVE", desc: "I solve problems with innovative engineering and AI-powered thinking." },
  { icon: Rocket, title: "MOTIVATED", desc: "I learn quickly and enjoy building web and AI experiences end to end." },
  { icon: Users, title: "COLLABORATIVE", desc: "I thrive in teams, sharing ideas and delivering polished solutions together." },
];

const tech = ["Java", "Python", "JavaScript", "React", "TensorFlow", "MongoDB", "Git"];

function AboutPage() {
  return (
    <PortfolioLayout title="ABOUT ME">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Panel>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full border-2 border-neon flex items-center justify-center neon-glow">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-neon">
                <path d="M25 15 H75 L50 50 L75 85 H25 L50 50 Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="font-display font-black text-3xl neon-text">ABOUT ME</h2>
          </div>

          <div className="grid md:grid-cols-[260px_1fr] gap-6 items-start">
            <div className="hex-clip bg-neon/10 p-2 border border-neon/40">
              <img
                src={heroChar}
                alt="Abishek"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-auto object-cover hex-clip"
              />
            </div>
            <div>
              <p className="text-foreground/80">Hi, I'm</p>
              <h3 className="font-display font-black text-4xl neon-text">ABISHEK K</h3>
              <p className="text-neon font-bold tracking-wider">B.Tech AI & Data Science</p>
              <p className="font-bold mt-1">ML Developer & AI Intern</p>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                I build intelligent web applications and AI-driven systems, combining
                modern frontend development with data science workflows. I work with
                Large Language Models (LLMs) and agentic AI to create smart, autonomous
                solutions. I enjoy bringing practical, user-focused innovations to life
                through clean and efficient code.
              </p>
            </div>
          </div>

          <div className="my-6 flex items-center gap-3 justify-center">
            <span className="h-px flex-1 bg-neon/40" />
            <span className="text-xs tracking-[0.4em] text-neon">WHO I AM</span>
            <span className="h-px flex-1 bg-neon/40" />
          </div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {traits.map((t) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="neon-panel rounded-md p-4 flex gap-4 hover:bg-neon/5 transition"
                >
                  <Icon className="w-10 h-10 text-neon flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-neon tracking-wider">{t.title}</h4>
                    <p className="text-sm text-foreground/80">{t.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="my-6 flex items-center gap-3 justify-center">
            <span className="h-px flex-1 bg-neon/40" />
            <span className="text-xs tracking-[0.4em] text-neon">TECHNOLOGIES I WORK WITH</span>
            <span className="h-px flex-1 bg-neon/40" />
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {tech.map((t) => {
              const logoSvg = getTechLogo(t);
              return (
                <motion.div
                  key={t}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-md neon-panel flex items-center justify-center font-display font-black text-neon">
                    {logoSvg ? <div className="w-10 h-10">{logoSvg}</div> : t.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-xs mt-2 text-foreground/80">{t}</span>
                </motion.div>
              );
            })}
          </motion.div>

          <blockquote className="mt-6 neon-panel rounded-md p-4 text-center italic text-foreground/85">
            <span className="text-neon text-2xl">"</span>
            Code is not just what I write, it's how I solve problems and create solutions.
            <span className="text-neon text-2xl">"</span>
          </blockquote>
        </Panel>
      </motion.div>
    </PortfolioLayout>
  );
}
