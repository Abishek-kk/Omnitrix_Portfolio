import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { G as GraduationCap, l as School, j as BookOpen, h as Brain, b as CodeXml, L as Lightbulb, i as Users, T as TrendingUp } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const journey = [{
  icon: GraduationCap,
  years: "2022 - 2026",
  title: "BACHELOR OF TECHNOLOGY (B.Tech)",
  sub: "Computer Science and Engineering",
  place: "Chennai Institute of Technology (CIT), Tamil Nadu",
  metric: "CGPA: 8.45 / 10.0",
  highlights: ["Specialized in Full Stack Development", "Participated in Hackathons", "Active in Coding Societies"]
}, {
  icon: School,
  years: "2020 - 2022",
  title: "HIGHER SECONDARY EDUCATION (12th)",
  sub: "Science Stream (PCM)",
  place: "SUBRAMANIA BHARATHI MATRIC HR SEC SCHOOL, MELUR",
  metric: "Percentage: 74.5%",
  highlights: ["Strong foundation in Mathematics", "Active in Science exhibitions", "Secured strong academic results"]
}, {
  icon: BookOpen,
  years: "2018 - 2020",
  title: "SECONDARY EDUCATION (10th)",
  sub: "Matriculation",
  place: "SUBRAMANIA BHARATHI MATRIC HR SEC SCHOOL, MELUR",
  metric: "Percentage: 72.3%",
  highlights: ["Excellent academic performance", "Participated in quizzes & olympiads", "School topper in Computer Science"]
}];
const learnings = [{
  icon: Brain,
  label: "Problem Solving"
}, {
  icon: CodeXml,
  label: "Logical Thinking"
}, {
  icon: Lightbulb,
  label: "Creativity & Innovation"
}, {
  icon: Users,
  label: "Teamwork & Leadership"
}, {
  icon: TrendingUp,
  label: "Continuous Learning"
}];
function EducationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "EDUCATION", subtitle: "Knowledge is the ultimate power.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-5 h-5 text-neon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-neon tracking-widest text-sm", children: "MY EDUCATION JOURNEY" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/70 mb-4", children: "Every step of learning has shaped my skills, mindset and passion for technology." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-6 bottom-6 w-px bg-neon/40" }),
        journey.map((j) => {
          const Icon = j.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[auto_auto_1fr_auto] gap-4 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-12 h-12 rounded-full border-2 border-neon flex items-center justify-center bg-background neon-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-neon" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-neon font-bold tracking-wider w-20 pt-2", children: j.years }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon text-sm", children: j.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[13px]", children: j.sub }),
              j.place && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neon text-xs", children: j.place }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs", children: [
                "• ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: j.metric })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md p-2 w-48 hidden lg:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-neon mb-2", children: "★ HIGHLIGHTS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-[10px] space-y-1 text-foreground/85", children: j.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                h
              ] }, h)) })
            ] })
          ] }, j.title);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest mb-3", children: "WHAT I BELIEVE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "italic text-foreground/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon text-2xl", children: '"' }),
          "The most dangerous form of blindness, is believing that your perspective is the only reality.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon text-2xl", children: '"' })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-neon font-display font-bold tracking-widest mb-3", children: "KEY LEARNINGS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: learnings.map((l) => {
          const Icon = l.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 hex-clip bg-neon/5 p-2 border border-neon/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-neon mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-center leading-tight", children: l.label })
          ] }, l.label);
        }) })
      ] })
    ] })
  ] }) });
}
export {
  EducationPage as component
};
