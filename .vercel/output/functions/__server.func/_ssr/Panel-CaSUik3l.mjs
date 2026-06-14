import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { O as OmnitrixDial } from "./OmnitrixDial-10LQzA9B.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { P as Power, C as ChevronLeft, a as ChevronRight, U as User, b as CodeXml, B as Briefcase, G as GraduationCap, T as TrendingUp, c as Trophy, A as Award, M as Monitor, F as FileText, d as Mail } from "../_libs/lucide-react.mjs";
const sections = [
  { id: "about", num: "01", label: "About Me", path: "/about", icon: User },
  { id: "skills", num: "02", label: "Skills", path: "/skills", icon: CodeXml },
  { id: "projects", num: "03", label: "Projects", path: "/projects", icon: Briefcase },
  { id: "education", num: "04", label: "Education", path: "/education", icon: GraduationCap },
  { id: "experience", num: "05", label: "Experience", path: "/experience", icon: TrendingUp },
  { id: "achievements", num: "06", label: "Achievements", path: "/achievements", icon: Trophy },
  { id: "certifications", num: "07", label: "Certifications", path: "/certifications", icon: Award },
  { id: "coding", num: "08", label: "Coding Profiles", path: "/coding-profiles", icon: Monitor },
  { id: "resume", num: "09", label: "Resume", path: "/resume", icon: FileText },
  { id: "contact", num: "10", label: "Contact", path: "/contact", icon: Mail }
];
function getSectionNav(currentPath) {
  const idx = sections.findIndex((s) => s.path === currentPath);
  return {
    current: idx >= 0 ? sections[idx] : null,
    prev: idx > 0 ? sections[idx - 1] : null,
    next: idx >= 0 && idx < sections.length - 1 ? sections[idx + 1] : null,
    index: idx
  };
}
function OmnitrixNav() {
  const location = useLocation();
  const radius = 165;
  const center = 230;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: center * 2, height: center * 2 + 20 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 text-xs tracking-[0.3em] text-neon/80", children: [
      "SELECT A SECTION",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-0.5 w-8 bg-neon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-0.5 w-4 bg-neon/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-0.5 w-2 bg-neon/30" })
      ] })
    ] }),
    sections.map((s, i) => {
      const angle = i / sections.length * Math.PI * 2 - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle) + 20;
      const Icon = s.icon;
      const active = location.pathname === s.path;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: s.path,
          className: "absolute -translate-x-1/2 -translate-y-1/2 group",
          style: { left: x, top: y },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              className: `hex-clip w-20 h-20 flex flex-col items-center justify-center text-center transition-all ${active ? "bg-neon/20 text-neon" : "bg-card/60 text-foreground/80 group-hover:bg-neon/10 group-hover:text-neon"}`,
              style: {
                filter: active ? "drop-shadow(0 0 10px var(--neon)) drop-shadow(0 0 20px var(--neon))" : "drop-shadow(0 0 4px oklch(0.86 0.27 142 / 0.4))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 mb-0.5", strokeWidth: 2 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold tracking-wider opacity-80", children: s.num }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] font-bold tracking-wider uppercase leading-tight px-1", children: s.label })
              ]
            }
          )
        },
        s.id
      );
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -translate-x-1/2 -translate-y-1/2",
        style: { left: center, top: center + 20 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(OmnitrixDial, { size: 220 })
      }
    )
  ] });
}
function PortfolioLayout({
  title,
  subtitle,
  children,
  hideHeader
}) {
  const location = useLocation();
  const { prev, next } = getSectionNav(location.pathname);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full px-6 py-5 flex flex-col gap-4", children: [
    !hideHeader && /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-12 h-12 rounded-full border-2 border-neon flex items-center justify-center neon-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 100", className: "w-7 h-7 text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M25 15 H75 L50 50 L75 85 H25 L50 50 Z", fill: "currentColor" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-xl tracking-[0.2em] neon-text", children: "OMNITRIX" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.4em] text-neon/70 -mt-1", children: "PORTFOLIO" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: "flex-1 max-w-2xl",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md px-8 py-3 text-center relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-neon" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-neon" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl md:text-4xl neon-text leading-none", children: title }),
            subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] text-foreground/80 mt-1 uppercase", children: subtitle })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs tracking-[0.2em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/70", children: "SYSTEM STATUS :" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-text font-bold", children: "ONLINE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-neon animate-pulse neon-glow" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex flex-col items-center justify-between min-h-[640px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(OmnitrixNav, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mt-4 neon-panel rounded-md px-6 py-3 flex items-center gap-2 text-sm tracking-[0.2em] hover:bg-neon/10 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "w-4 h-4 text-neon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "neon-text font-bold", children: "ACTIVATE OMNITRIX" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.main,
        {
          initial: { opacity: 0, scale: 0.98, filter: "blur(6px)" },
          animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
          transition: { duration: 0.4, ease: "easeOut" },
          className: "min-w-0",
          children
        },
        location.pathname
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "flex items-center justify-between gap-4 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] text-neon/60 hidden md:block", children: "CODE • CREATE • TRANSFORM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center justify-center gap-4", children: [
        prev ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: prev.path,
            className: "neon-panel rounded-full px-6 py-2.5 flex items-center gap-2 hover:bg-neon/10 transition group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5 text-neon group-hover:-translate-x-1 transition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold tracking-[0.2em] text-sm", children: "GO BACK" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        next ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: next.path,
            className: "neon-panel rounded-full px-6 py-2.5 flex items-center gap-2 hover:bg-neon/10 transition group ml-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold tracking-[0.2em] text-sm", children: "NEXT SECTION" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-neon group-hover:translate-x-1 transition" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
      ] })
    ] })
  ] });
}
function Panel({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `neon-panel rounded-lg p-5 relative ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon" }),
    children
  ] });
}
export {
  PortfolioLayout as P,
  Panel as a
};
