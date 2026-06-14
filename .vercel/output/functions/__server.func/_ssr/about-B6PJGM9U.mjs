import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { g as getTechLogo } from "./TechLogos-C_uhD_5q.mjs";
import { h as heroChar } from "./ben10-hero-CahkOuxm.mjs";
import { q as Crosshair, L as Lightbulb, R as Rocket, i as Users } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./OmnitrixDial-10LQzA9B.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const traits = [{
  icon: Crosshair,
  title: "FOCUSED",
  desc: "I write clean, efficient, and scalable code for real-world systems."
}, {
  icon: Lightbulb,
  title: "CREATIVE",
  desc: "I solve problems with innovative engineering and AI-powered thinking."
}, {
  icon: Rocket,
  title: "MOTIVATED",
  desc: "I learn quickly and enjoy building web and AI experiences end to end."
}, {
  icon: Users,
  title: "COLLABORATIVE",
  desc: "I thrive in teams, sharing ideas and delivering polished solutions together."
}];
const tech = ["Java", "Python", "JavaScript", "React", "TensorFlow", "MongoDB", "Git"];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "ABOUT ME", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full border-2 border-neon flex items-center justify-center neon-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 100", className: "w-6 h-6 text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M25 15 H75 L50 50 L75 85 H25 L50 50 Z", fill: "currentColor" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-3xl neon-text", children: "ABOUT ME" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[260px_1fr] gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hex-clip bg-neon/10 p-2 border border-neon/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroChar, alt: "Abishek", loading: "lazy", width: 1024, height: 1280, className: "w-full h-auto object-cover hex-clip" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80", children: "Hi, I'm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-4xl neon-text", children: "ABISHEK K" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neon font-bold tracking-wider", children: "B.Tech AI & Data Science" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold mt-1", children: "ML Developer & AI Intern" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/85 leading-relaxed", children: "I build intelligent web applications and AI-driven systems, combining modern frontend development with data science workflows. I work with Large Language Models (LLMs) and agentic AI to create smart, autonomous solutions. I enjoy bringing practical, user-focused innovations to life through clean and efficient code." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 flex items-center gap-3 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-neon/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.4em] text-neon", children: "WHO I AM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-neon/40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: traits.map((t) => {
      const Icon = t.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
        y: -6,
        scale: 1.01
      }, transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }, className: "neon-panel rounded-md p-4 flex gap-4 hover:bg-neon/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-10 h-10 text-neon flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon tracking-wider", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: t.desc })
        ] })
      ] }, t.title);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 flex items-center gap-3 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-neon/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.4em] text-neon", children: "TECHNOLOGIES I WORK WITH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-neon/40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-6", children: tech.map((t) => {
      const logoSvg = getTechLogo(t);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
        y: -4,
        scale: 1.02
      }, transition: {
        duration: 0.2
      }, className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-md neon-panel flex items-center justify-center font-display font-black text-neon", children: logoSvg ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10", children: logoSvg }) : t.slice(0, 2).toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs mt-2 text-foreground/80", children: t })
      ] }, t);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-6 neon-panel rounded-md p-4 text-center italic text-foreground/85", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon text-2xl", children: '"' }),
      "Code is not just what I write, it's how I solve problems and create solutions.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon text-2xl", children: '"' })
    ] })
  ] }) });
}
export {
  AboutPage as component
};
