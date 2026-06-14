import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { o as Flame } from "../_libs/lucide-react.mjs";
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
const platforms = [{
  name: "LeetCode",
  c1: "LEVEL",
  v1: "Knight",
  c2: "SOLVED",
  v2: "1000+",
  c3: "PROBLEMS",
  v3: "Solved",
  c4: "RATING",
  v4: "1,953"
}, {
  name: "CodeChef",
  c1: "RATING",
  v1: "1,545",
  c2: "STAR",
  v2: "2★",
  c3: "GLOBAL",
  v3: "#15,400",
  c4: "CONTESTS",
  v4: "42"
}, {
  name: "Codeforces",
  c1: "RATING",
  v1: "1,520",
  c2: "MAX",
  v2: "1,620",
  c3: "CONTESTS",
  v3: "30",
  c4: "LEVEL",
  v4: "Pupil"
}, {
  name: "GitHub",
  c1: "REPOS",
  v1: "26",
  c2: "FOLLOWERS",
  v2: "18",
  c3: "CONTRIBS",
  v3: "620+",
  c4: "ACTIVE",
  v4: "2025"
}];
const langs = [{
  name: "Java",
  value: 80
}, {
  name: "Python",
  value: 8
}, {
  name: "C++",
  value: 7
}, {
  name: "JavaScript",
  value: 3
}, {
  name: "SQL",
  value: 1
}, {
  name: "Other",
  value: 1
}];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthData = [40, 60, 80, 100, 130, 160, 190, 210, 240, 270, 285, 300];
function Sparkline() {
  const points = Array.from({
    length: 12
  }).map((_, i) => `${i * 10},${30 - Math.sin(i / 1.5) * 10 - i * 1.2}`).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 110 30", className: "w-full h-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points, fill: "none", stroke: "var(--neon)", strokeWidth: "1.5", style: {
    filter: "drop-shadow(0 0 3px var(--neon))"
  } }) });
}
function CodingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "CODING PROFILES", subtitle: "Code. Solve. Optimize. Innovate.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest text-sm mb-4", children: "🖥 MY CODING JOURNEY ACROSS PLATFORMS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3", children: platforms.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md p-3 hover:bg-neon/5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon mb-3", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/60", children: p.c1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neon font-bold", children: p.v1 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/60", children: p.c2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neon font-bold", children: p.v2 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/60", children: p.c3 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neon font-bold", children: p.v3 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/60", children: p.c4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neon font-bold", children: p.v4 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkline, {})
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest text-sm mb-3", children: "PROBLEM SOLVING STATS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-3xl neon-text", children: "1,159" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/70 mb-3", children: "LeetCode problems solved" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "● EASY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "454 / 940" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400", children: "● MEDIUM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "591 / 2048" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "● HARD" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "114 / 927" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/70 mb-1", children: "SOLVED OVER TIME" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-20", children: monthData.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "flex-1 bg-neon/70 rounded-sm", initial: {
              height: 0
            }, animate: {
              height: `${v / 3}px`
            }, transition: {
              delay: i * 0.04
            } }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between text-[8px] text-foreground/60 mt-1", children: months.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m }, m)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest text-sm mb-3", children: "MOST USED LANGUAGES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: langs.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neon", children: [
              l.value,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-foreground/10 rounded-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full bg-neon", initial: {
            width: 0
          }, animate: {
            width: `${l.value * 2.5}%`
          }, transition: {
            duration: 1
          } }) })
        ] }, l.name)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 neon-panel rounded-md p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/70", children: "TOTAL LANGUAGES USED" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-3xl neon-text", children: "12+" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest text-sm mb-3", children: "ACHIEVEMENTS & STREAKS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 neon-panel p-3 rounded-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-10 h-10 text-orange-400", style: {
            filter: "drop-shadow(0 0 8px #fb923c)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-black text-2xl neon-text", children: [
              "395 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "DAYS" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/70", children: "Current streak" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 mt-3", children: Array.from({
          length: 28
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square rounded-sm ${i % 5 === 0 ? "bg-foreground/10" : "bg-neon/70 neon-glow"}` }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LeetCode 1000+ Problems" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CodeChef 2★ Achiever" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active on Codeforces & GfG" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "2025" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  CodingPage as component
};
