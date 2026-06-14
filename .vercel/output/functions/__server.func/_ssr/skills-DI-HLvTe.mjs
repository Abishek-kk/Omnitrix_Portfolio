import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { g as getTechLogo } from "./TechLogos-C_uhD_5q.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const tech = [{
  name: "Java",
  value: 92,
  color: "#007396"
}, {
  name: "Python",
  value: 88,
  color: "#306998"
}, {
  name: "JavaScript",
  value: 85,
  color: "#f7df1e"
}, {
  name: "React.js",
  value: 82,
  color: "#61dafb"
}, {
  name: "TensorFlow",
  value: 76,
  color: "#FF6F00"
}, {
  name: "MongoDB",
  value: 74,
  color: "#47A248"
}];
const otherSkills = [{
  name: "C++",
  level: 4
}, {
  name: "SQL",
  level: 4
}, {
  name: "Data Structures",
  level: 5
}, {
  name: "Problem Solving",
  level: 5
}, {
  name: "Linux",
  level: 3
}];
function CircularProgress({
  value,
  label,
  color
}) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const logoSvg = getTechLogo(label);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-md flex items-center justify-center font-display font-black text-sm", style: {
      background: `${color}22`,
      border: `1px solid ${color}66`
    }, children: logoSvg ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8", children: logoSvg }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
      color
    }, children: label.slice(0, 2).toUpperCase() }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-foreground/80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-14 h-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full -rotate-90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r, fill: "none", stroke: "oklch(0.3 0.05 150)", strokeWidth: "8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.circle, { cx: "50", cy: "50", r, fill: "none", stroke: "var(--neon)", strokeWidth: "8", strokeLinecap: "round", strokeDasharray: c, initial: {
          strokeDashoffset: c
        }, animate: {
          strokeDashoffset: c - c * value / 100
        }, transition: {
          duration: 1.5,
          ease: "easeOut"
        }, style: {
          filter: "drop-shadow(0 0 6px var(--neon))"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute inset-0 flex items-center justify-center font-display font-bold neon-text", children: [
        value,
        "%"
      ] })
    ] })
  ] });
}
function SkillsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "SKILLS", subtitle: "My Abilities. My Weapons.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 xl:grid-cols-[1.1fr_0.75fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { className: "max-w-[760px] mx-auto px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.35em] text-neon/70", children: "TECHNICAL SKILLS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-black text-white leading-tight", children: "My Core Technologies" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.28em] text-neon/80", children: "95% top skill" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: tech.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[1.5rem] border border-neon/20 bg-black/30 p-2 text-center shadow-[0_0_14px_rgba(0,255,136,0.05)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { ...item, label: item.name }) }, item.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-neon/70", children: "OTHER SKILLS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-[0.28em] text-neon/80", children: "strengths" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 sm:grid-cols-2", children: otherSkills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[1.75rem] border border-neon/20 bg-black/30 p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-neon/30 bg-black/40 w-12 h-12 flex items-center justify-center text-neon font-bold", children: skill.name.slice(0, 2).toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white", children: skill.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-1", children: Array.from({
              length: 5
            }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-2 rounded-full ${index < skill.level ? "flex-1 bg-neon neon-glow" : "w-3 bg-foreground/20"}` }, index)) })
          ] })
        ] }, skill.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { className: "max-w-[360px] mx-auto rounded-[1.75rem] border border-neon/30 bg-black/20 p-4 shadow-[0_0_40px_rgba(0,255,136,0.14)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.35em] text-neon/70", children: "SKILL MATRIX" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-black text-white", children: "Performance Map" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.28em] text-neon/80", children: "core stats" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square rounded-[1.75rem] border border-neon/20 bg-black/30 p-4 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "w-full h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,20 170,80 140,170 60,170 30,80", fill: "none", stroke: "rgba(0,255,136,0.24)", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,40 150,95 125,150 75,150 50,95", fill: "none", stroke: "rgba(0,255,136,0.18)", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,60 130,100 110,130 90,130 70,100", fill: "none", stroke: "rgba(0,255,136,0.14)", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "20", x2: "100", y2: "180", stroke: "rgba(0,255,136,0.12)", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "30", y1: "80", x2: "170", y2: "80", stroke: "rgba(0,255,136,0.12)", strokeWidth: "1" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "relative w-full h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,40 150,95 125,150 75,150 50,95", fill: "rgba(0,255,136,0.16)", stroke: "var(--neon)", strokeWidth: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "40", r: "4", fill: "var(--neon)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "150", cy: "95", r: "4", fill: "var(--neon)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "125", cy: "150", r: "4", fill: "var(--neon)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "75", cy: "150", r: "4", fill: "var(--neon)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "95", r: "4", fill: "var(--neon)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-between px-4 py-6 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "self-center text-[10px] uppercase tracking-[0.28em] text-neon/70", children: "Frontend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-neon/70", children: "Problem Solving" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-neon/70", children: "Backend" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-neon/70", children: "Tools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-neon/70", children: "DSA" })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  SkillsPage as component
};
