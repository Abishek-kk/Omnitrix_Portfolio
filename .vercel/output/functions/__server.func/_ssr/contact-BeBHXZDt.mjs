import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as PortfolioLayout, a as Panel } from "./Panel-CaSUik3l.mjs";
import { d as Mail, g as Phone, e as MapPin, m as Send, k as Github, n as Linkedin, b as CodeXml, I as Instagram } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./OmnitrixDial-10LQzA9B.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const contactEmail = "abishekkumar548709@gmail.com";
const info = [{
  icon: Mail,
  title: "EMAIL",
  v1: contactEmail,
  v2: "Open for internships and full-time roles."
}, {
  icon: Phone,
  title: "PHONE",
  v1: "7305647064",
  v2: "Available for remote and hybrid work."
}, {
  icon: MapPin,
  title: "LOCATION",
  v1: "Chennai, India",
  v2: "Open to remote opportunities."
}, {
  icon: Send,
  title: "RESPONSE TIME",
  v1: "Usually reply within 24 hours",
  v2: "Let's connect!"
}];
const socials = [{
  icon: Github,
  label: "GitHub"
}, {
  icon: Linkedin,
  label: "LinkedIn"
}, {
  icon: CodeXml,
  label: "LeetCode"
}, {
  icon: CodeXml,
  label: "Codeforces"
}, {
  icon: Instagram,
  label: "Instagram"
}];
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}
Email: ${form.email}

${form.message}`)}`;
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = mailto;
      link.click();
    }
    toast.success("Email draft opened in your mail client. Please send it from there.");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioLayout, { title: "CONTACT ME", subtitle: "Let's connect and build something amazing together.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6 text-neon" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-neon tracking-widest", children: "GET IN TOUCH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/70 ml-3", children: "Have a project in mind or want to collaborate? Feel free to reach out!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: info.map((i) => {
        const Icon = i.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "neon-panel rounded-md p-4 flex gap-4 hover:bg-neon/5 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hex-clip w-14 h-14 bg-neon/10 flex items-center justify-center border border-neon/40 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-neon" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon tracking-wider", children: i.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: i.v1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/70", children: i.v2 })
          ] })
        ] }, i.title);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "neon-panel rounded-md p-4 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon tracking-wider", children: "💬 SEND ME A MESSAGE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), placeholder: "YOUR NAME", className: "bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), placeholder: "YOUR EMAIL", className: "bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.subject, onChange: (e) => setForm({
          ...form,
          subject: e.target.value
        }), placeholder: "SUBJECT", className: "bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 6, value: form.message, onChange: (e) => setForm({
          ...form,
          message: e.target.value
        }), placeholder: "YOUR MESSAGE", className: "bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition resize-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-2 py-3 rounded-md border-2 border-neon text-neon font-display font-bold tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-neon hover:text-primary-foreground transition neon-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
          " SEND MESSAGE"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-neon/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-neon tracking-wider mb-3 text-sm", children: "🔗 LET'S CONNECT ON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 justify-center", children: socials.map((s) => {
        const Icon = s.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex flex-col items-center gap-1 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hex-clip w-14 h-14 bg-neon/10 border border-neon/40 flex items-center justify-center group-hover:bg-neon/20 group-hover:scale-110 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-neon" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/80 group-hover:neon-text transition", children: s.label })
        ] }, s.label);
      }) })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
