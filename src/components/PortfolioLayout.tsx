import { Link, useLocation } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Power } from "lucide-react";
import { OmnitrixNav } from "./OmnitrixNav";
import { getSectionNav } from "@/lib/sections";

const MotionLink = motion(Link);

export function PortfolioLayout({
  title,
  subtitle,
  children,
  hideHeader,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  hideHeader?: boolean;
}) {
  const location = useLocation();
  const { prev, next } = getSectionNav(location.pathname);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen w-full px-6 py-5 flex flex-col gap-4">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon z-[100]"
        style={{ scaleX, transformOrigin: "left" }}
      />

      {!hideHeader && (
        <header className="flex items-center justify-between gap-6">
          <MotionLink to="/" whileTap={{ scale: 0.94 }} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full border-2 border-neon flex items-center justify-center neon-glow">
              <svg viewBox="0 0 100 100" className="w-7 h-7 text-neon">
                <path d="M25 15 H75 L50 50 L75 85 H25 L50 50 Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="font-display font-black text-xl tracking-[0.2em] neon-text">ABISHEK</div>
              <div className="text-[10px] tracking-[0.4em] text-neon/70 -mt-1">PORTFOLIO</div>
            </div>
          </MotionLink>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 max-w-2xl"
          >
            <div className="neon-panel rounded-md px-8 py-3 text-center relative">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-neon" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-neon" />
              <h1 className="font-display font-black text-3xl md:text-4xl neon-text leading-none">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xs tracking-[0.25em] text-foreground/80 mt-1 uppercase">
                  {subtitle}
                </p>
              )}
            </div>
          </motion.div>

          <div className="flex items-center gap-3 text-xs tracking-[0.2em]">
            <span className="text-foreground/70">SYSTEM STATUS :</span>
            <span className="neon-text font-bold">ONLINE</span>
            <span className="w-2.5 h-2.5 rounded-full bg-neon animate-pulse neon-glow" />
          </div>
        </header>
      )}

      {/* MAIN */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
        <aside className="hidden lg:flex flex-col items-center justify-between min-h-[640px]">
          <OmnitrixNav />
          <MotionLink to="/" whileTap={{ scale: 0.94 }} className="mt-4 neon-panel rounded-md px-6 py-3 flex items-center gap-2 text-sm tracking-[0.2em] hover:bg-neon/10 transition-colors">
            <Power className="w-4 h-4 text-neon" />
            <span className="neon-text font-bold">ACTIVATE OMNITRIX</span>
          </MotionLink>
        </aside>

        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="min-w-0"
        >
          {children}
        </motion.main>
      </div>

      {/* FOOTER NAV */}
      <footer className="flex items-center justify-between gap-4 mt-2">
        <div className="text-xs tracking-[0.3em] text-neon/60 hidden md:block">
          CODE • CREATE • TRANSFORM
        </div>
        <div className="flex-1 flex items-center justify-center gap-4">
          {prev ? (
            <MotionLink
              to={prev.path}
              whileTap={{ scale: 0.94 }}
              className="neon-panel rounded-full px-6 py-2.5 flex items-center gap-2 hover:bg-neon/10 transition group"
            >
              <ChevronLeft className="w-5 h-5 text-neon group-hover:-translate-x-1 transition" />
              <span className="font-display font-bold tracking-[0.2em] text-sm">GO BACK</span>
            </MotionLink>
          ) : <div />}
          {next ? (
            <MotionLink
              to={next.path}
              whileTap={{ scale: 0.94 }}
              className="neon-panel rounded-full px-6 py-2.5 flex items-center gap-2 hover:bg-neon/10 transition group ml-auto"
            >
              <span className="font-display font-bold tracking-[0.2em] text-sm">NEXT SECTION</span>
              <ChevronRight className="w-5 h-5 text-neon group-hover:translate-x-1 transition" />
            </MotionLink>
          ) : <div />}
        </div>
      </footer>
    </div>
  );
}
