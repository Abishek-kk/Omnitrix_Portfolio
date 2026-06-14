import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Code2, User, Mail, Braces } from "lucide-react";
import heroChar from "@/assets/ben10-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abishek Portfolio" },
      { name: "description", content: "Futuristic Omnitrix-themed developer portfolio. AI & DS student, frontend developer, creator transforming ideas into code." },
      { property: "og:title", content: "Abishek Portfolio" },
      { property: "og:description", content: "Futuristic Omnitrix-themed developer portfolio." },
    ],
  }),
  component: Index,
});

const sideLinks = [
  { icon: Braces, label: "Projects", to: "/projects" as const },
  { icon: Code2, label: "Skills", to: "/skills" as const },
  { icon: User, label: "About", to: "/about" as const },
  { icon: Mail, label: "Contact", to: "/contact" as const },
];

function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,255,100,0.16),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(45,255,100,0.08),_transparent_30%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.85))] pointer-events-none" />

      <span className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-neon/70" />
      <span className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-neon/70" />
      <span className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-neon/70" />
      <span className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-neon/70" />

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 h-full w-[52%] overflow-hidden"
      >
        <img
          src={heroChar}
          alt="Ben 10 hero"
          className="h-full w-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-black/90" />
      </motion.div>

      <div className="relative z-20 mx-auto flex min-h-screen items-center justify-center px-8">
        <div className="w-full max-w-2xl text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 font-display font-black text-5xl md:text-6xl tracking-tight"
          >
            Hi, I'm <span className="neon-text">Abishek</span>
          </motion.h1>
          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-neon neon-glow" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl md:text-2xl text-white/90"
          >
            Transforming Ideas into <span className="neon-text font-bold">Code</span>
          </motion.p>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.3em] text-white/70">
            <span>AI & DS STUDENT</span>
            <span className="text-neon">|</span>
            <span>DEVELOPER</span>
            <span className="text-neon">|</span>
            <span>CREATOR</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-neon px-12 py-4 text-base font-display font-bold uppercase tracking-[0.24em] text-primary-foreground neon-glow transition-transform"
              >
                Activate Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          <ChevronDown className="mx-auto mt-12 w-6 h-6 text-neon animate-bounce" />
        </div>
      </div>

      <div className="hidden xl:flex absolute right-10 top-1/2 z-20 h-[58%] w-56 -translate-y-1/2 flex-col items-start justify-between">
        <div className="absolute left-7 top-0 h-full w-px bg-neon/30" />
        {sideLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + index * 0.08 }}
              className="relative z-20 flex items-center gap-4"
            >
              <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-neon shadow-[0_0_18px_rgba(0,255,136,0.45)]" />
              <Link to={link.to} className="flex items-center gap-4 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-neon/40 bg-black/40 neon-glow transition group-hover:border-neon">
                  <Icon className="w-5 h-5 text-neon" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/40">Jump to</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition group-hover:text-neon">
                    {link.label}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
