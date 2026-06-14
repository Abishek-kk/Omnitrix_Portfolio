import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
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
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-DO9G8068.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$b = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Omnitrix Portfolio — Abishek" },
      { name: "description", content: "Futuristic Ben 10 Omnitrix-themed personal developer portfolio." },
      { name: "author", content: "Abishek" },
      { property: "og:title", content: "Omnitrix Portfolio — Abishek" },
      { property: "og:description", content: "Futuristic Ben 10 Omnitrix-themed personal developer portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Abishek" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
const $$splitComponentImporter$a = () => import("./skills-DI-HLvTe.mjs");
const Route$a = createFileRoute("/skills")({
  head: () => ({
    meta: [{
      title: "Skills — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Technical skills, tools, and professional capabilities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./resume-OixhiBv1.mjs");
const Route$9 = createFileRoute("/resume")({
  head: () => ({
    meta: [{
      title: "Resume — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Downloadable resume — Full stack developer and AI systems builder."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./projects-CdMx_rT8.mjs");
const Route$8 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Featured projects and case studies."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./experience-DRQq9UMX.mjs");
const Route$7 = createFileRoute("/experience")({
  head: () => ({
    meta: [{
      title: "Experience — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Internships and professional development experience."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./education-FVMK52zn.mjs");
const Route$6 = createFileRoute("/education")({
  head: () => ({
    meta: [{
      title: "Education — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Education journey, degrees, and academic highlights."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-BeBHXZDt.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Let's connect and build something amazing together."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./coding-profiles-DfKLDc5q.mjs");
const Route$4 = createFileRoute("/coding-profiles")({
  head: () => ({
    meta: [{
      title: "Coding Profiles — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Coding platforms, ratings, and competitive programming stats."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./certifications-C-3y9d3s.mjs");
const Route$3 = createFileRoute("/certifications")({
  head: () => ({
    meta: [{
      title: "Certifications — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Certified courses and credentials."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./achievements-BWMzd7RE.mjs");
const Route$2 = createFileRoute("/achievements")({
  head: () => ({
    meta: [{
      title: "Achievements — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Milestones, awards, and accomplishments."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-B6PJGM9U.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Frontend developer and AI & DS student turning ideas into real-world solutions with code."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BK-MxDpN.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Abishek — Omnitrix Portfolio"
    }, {
      name: "description",
      content: "Futuristic Omnitrix-themed developer portfolio. AI & DS student, frontend developer, creator transforming ideas into code."
    }, {
      property: "og:title",
      content: "Abishek — Omnitrix Portfolio"
    }, {
      property: "og:description",
      content: "Futuristic Omnitrix-themed developer portfolio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SkillsRoute = Route$a.update({
  id: "/skills",
  path: "/skills",
  getParentRoute: () => Route$b
});
const ResumeRoute = Route$9.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$b
});
const ProjectsRoute = Route$8.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$b
});
const ExperienceRoute = Route$7.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$b
});
const EducationRoute = Route$6.update({
  id: "/education",
  path: "/education",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const CodingProfilesRoute = Route$4.update({
  id: "/coding-profiles",
  path: "/coding-profiles",
  getParentRoute: () => Route$b
});
const CertificationsRoute = Route$3.update({
  id: "/certifications",
  path: "/certifications",
  getParentRoute: () => Route$b
});
const AchievementsRoute = Route$2.update({
  id: "/achievements",
  path: "/achievements",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AchievementsRoute,
  CertificationsRoute,
  CodingProfilesRoute,
  ContactRoute,
  EducationRoute,
  ExperienceRoute,
  ProjectsRoute,
  ResumeRoute,
  SkillsRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
