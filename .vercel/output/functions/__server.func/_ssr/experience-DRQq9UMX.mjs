import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { B as Briefcase, S as Star } from "../_libs/lucide-react.mjs";
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
const exp = [{
  years: "May 2025 – July 2025",
  role: "Front-End Development Intern",
  company: "Zero2Site",
  type: "Remote",
  desc: "Built responsive web apps using React.js, HTML, CSS, and JavaScript. Used Git/GitHub and Agile workflows for development and collaboration.",
  stack: ["React.js", "HTML", "CSS", "JavaScript", "Git"],
  wins: ["Built responsive and accessible user interfaces", "Delivered features using Agile workflows", "Managed version control with Git/GitHub"]
}, {
  years: "Nov 2025 – Dec 2025",
  role: "AI Intern",
  company: "Reach Skyline",
  type: "Remote",
  desc: "Developed a CMR dashboard for document and data management. Implemented clause-level document analysis to improve accuracy.",
  stack: ["Python", "AI", "Dashboard", "Document Analysis", "Git"],
  wins: ["Built an AI-powered document management dashboard", "Implemented clause-level analysis for better accuracy", "Delivered real-time monitoring and reporting features"]
}];
const strengths = [{
  name: "Problem Solving",
  value: 90
}, {
  name: "Adaptability",
  value: 85
}, {
  name: "Teamwork",
  value: 88
}, {
  name: "Communication",
  value: 90
}, {
  name: "Time Management",
  value: 85
}];
function ExperiencePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "EXPERIENCE", subtitle: "Every experience adds power. Every challenge makes me stronger.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_280px] gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-6 h-6 text-neon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-neon tracking-widest", children: "MY EXPERIENCE JOURNEY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/60 ml-auto", children: "Real-world experience. Real impact." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-5 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-2 bottom-2 w-px bg-neon/40" }),
        exp.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_auto_1fr] gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 mt-1 rounded-full border-2 border-neon bg-background neon-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-neon font-bold tracking-wider w-20 pt-1", children: e.years }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon", children: e.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold", children: [
              e.company,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neon", children: [
                "| ",
                e.type
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85 mt-2", children: e.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: e.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded-sm border border-neon/40 text-neon", children: s }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-neon/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-neon mb-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
                " KEY ACHIEVEMENTS"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-xs space-y-0.5 text-foreground/85", children: e.wins.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                w
              ] }, w)) })
            ] })
          ] })
        ] }, e.role))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest mb-3 text-sm", children: "📈 EXPERIENCE SUMMARY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-32 h-32", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full -rotate-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "42", fill: "none", stroke: "oklch(0.3 0.05 150)", strokeWidth: "6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.circle, { cx: "50", cy: "50", r: "42", fill: "none", stroke: "var(--neon)", strokeWidth: "6", strokeLinecap: "round", strokeDasharray: 2 * Math.PI * 42, initial: {
                strokeDashoffset: 2 * Math.PI * 42
              }, animate: {
                strokeDashoffset: 2 * Math.PI * 42 * 0.25
              }, transition: {
                duration: 1.4
              }, style: {
                filter: "drop-shadow(0 0 6px var(--neon))"
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-3xl neon-text", children: "2+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-wider", children: "YEARS" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-widest text-foreground/70 mt-2", children: "TOTAL EXPERIENCE" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest mb-3 text-sm", children: "⚡ CORE STRENGTHS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: strengths.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto] gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neon font-bold", children: [
            s.value,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 h-1.5 bg-foreground/10 rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full bg-neon", initial: {
            width: 0
          }, animate: {
            width: `${s.value}%`
          }, transition: {
            duration: 1.2
          } }) })
        ] }, s.name)) })
      ] })
    ] })
  ] }) });
}
export {
  ExperiencePage as component
};
