import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { A as Award, c as Trophy, i as Users } from "../_libs/lucide-react.mjs";
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
const filters = ["ALL", "ACADEMIC", "TECHNICAL", "COMPETITION", "COMMUNITY", "LEADERSHIP"];
const items = [{
  icon: Award,
  title: "MUMBAI HACKS FINALIST",
  desc: "Reached the finalist round in a high-impact hackathon focused on innovation and rapid prototyping.",
  year: "2025",
  tag: "COMPETITION"
}, {
  icon: Award,
  title: "ESCAPE DA VINCI FINALIST",
  desc: "Selected as a finalist in a creative technology challenge blending art and engineering.",
  year: "2025",
  tag: "COMPETITION"
}, {
  icon: Trophy,
  title: "GRAND MASTER – TECH NOVA",
  desc: "Achieved top recognition in the Tech Nova competitive event for technical excellence.",
  year: "2025",
  tag: "TECHNICAL"
}, {
  icon: Users,
  title: "KAAVAL HACKATHON",
  desc: "Participated in a security-focused hackathon and delivered a working prototype under pressure.",
  year: "2025",
  tag: "COMPETITION"
}];
function AchievementsPage() {
  const [filter, setFilter] = reactExports.useState("ALL");
  const visible = items.filter((i) => filter === "ALL" || i.tag === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "ACHIEVEMENTS", subtitle: "Milestones that define my journey.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6 text-neon" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-neon tracking-widest", children: "MY ACHIEVEMENTS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/70 ml-auto", children: "Proud moments that reflect my hard work, dedication and passion." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-4 py-1.5 rounded-md text-xs font-bold tracking-widest transition ${filter === f ? "bg-neon text-primary-foreground neon-glow" : "neon-panel hover:bg-neon/10 text-foreground/80"}`, children: f }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: visible.map((it) => {
      const Icon = it.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md p-4 flex flex-col items-center text-center gap-2 hover:bg-neon/5 hover:scale-105 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hex-clip w-16 h-16 bg-neon/10 flex items-center justify-center border border-neon/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-neon" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon text-sm tracking-wider", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80", children: it.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-[10px] mt-auto pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 border border-neon/40 rounded-sm text-neon", children: it.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 border border-neon/40 rounded-sm text-neon", children: it.tag })
        ] })
      ] }, it.title);
    }) })
  ] }) }) });
}
export {
  AchievementsPage as component
};
