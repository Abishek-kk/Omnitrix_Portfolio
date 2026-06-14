import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { k as Github, E as ExternalLink } from "../_libs/lucide-react.mjs";
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
const projects = [{
  title: "Overall_Health_Advisor",
  desc: "AI-powered IoT system for healthcare and hygiene with real-time monitoring and automated safety actions.",
  tags: ["AI", "LLM", "Healthcare"],
  year: "2025",
  github: "https://github.com/Abishek-kk/Overall_Health_Advisor",
  live: "https://github.com/Abishek-kk/Overall_Health_Advisor"
}, {
  title: "CMR Dashboard",
  desc: "Centralized data monitoring system with real-time insights and decision-making support.",
  tags: ["Dashboard", "Data", "AI"],
  year: "2025",
  github: "https://github.com/Abishek-kk/CMR_Dashboard",
  live: "https://github.com/Abishek-kk/CMR_Dashboard"
}, {
  title: "AutoMart AI",
  desc: "AI supermarket system using LSTM, K-Means and Apriori, built with LangChain and a Streamlit dashboard.",
  tags: ["AI", "LangChain", "Streamlit"],
  year: "2025",
  github: "https://github.com/Abishek-kk/AutoMart-AI",
  live: "https://automart-ai-mpworqt3pcf76dsgxam9bl.streamlit.app/"
}];
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "PROJECTS", subtitle: "Code. Build. Ship.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group neon-panel rounded-md p-4 flex flex-col gap-3 hover:bg-neon/5 hover:scale-[1.02] transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-neon tracking-wider", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/60", children: p.year })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 flex-1", children: p.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-wider px-2 py-0.5 rounded-sm border border-neon/40 text-neon", children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2 border-t border-neon/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.github, target: "_blank", rel: "noopener noreferrer", className: "flex-1 flex items-center justify-center gap-1 text-xs py-1.5 rounded-sm border border-neon/40 hover:bg-neon/10 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-3 h-3" }),
        " CODE"
      ] }),
      p.live && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.live, target: "_blank", rel: "noopener noreferrer", className: "flex-1 flex items-center justify-center gap-1 text-xs py-1.5 rounded-sm border border-neon/40 hover:bg-neon/10 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
        " LIVE"
      ] })
    ] })
  ] }, p.title)) }) }) });
}
export {
  ProjectsPage as component
};
