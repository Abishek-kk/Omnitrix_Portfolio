import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { A as Award, E as ExternalLink, p as Calendar } from "../_libs/lucide-react.mjs";
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
const certs = [{
  title: "WQU Data Science Lab",
  issuer: "WorldQuant University",
  date: "2025",
  id: "WQU-DS-2025"
}, {
  title: "IoT",
  issuer: "NPTEL",
  date: "2025",
  id: "NPTEL-IOT-2025"
}, {
  title: "AWS Cloud Virtual Internship",
  issuer: "Edu-Skills",
  date: "2025",
  id: "AWS-Edu-2025"
}, {
  title: "Networking Essentials",
  issuer: "Cisco",
  date: "Dec 2025",
  id: "CISCO-NET-2025"
}, {
  title: "Cybersecurity Essentials",
  issuer: "Cisco",
  date: "Jun 2025",
  id: "CISCO-CYBER-2025"
}];
function CertsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "CERTIFICATIONS", subtitle: "Verified. Validated. Earned.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: certs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md p-4 hover:bg-neon/5 hover:scale-[1.02] transition group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hex-clip w-12 h-12 bg-neon/10 flex items-center justify-center border border-neon/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-neon" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 text-neon opacity-0 group-hover:opacity-100 transition" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon tracking-wider text-sm", children: c.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85 mt-1", children: c.issuer }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 pt-2 border-t border-neon/20 text-xs text-foreground/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
        " ",
        c.date
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon font-mono", children: c.id })
    ] })
  ] }, c.title)) }) }) });
}
export {
  CertsPage as component
};
