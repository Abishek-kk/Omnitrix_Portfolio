import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Omnitrix Portfolio" },
      { name: "description", content: "Featured projects and case studies." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { title: "Overall_Health_Advisor", desc: "AI-powered IoT system for healthcare and hygiene with real-time monitoring and automated safety actions.", tags: ["AI", "LLM", "Healthcare"], year: "2025", github: "https://github.com/Abishek-kk/Overall_Health_Advisor", live: "https://github.com/Abishek-kk/Overall_Health_Advisor" },
  { title: "CMR Dashboard", desc: "Centralized data monitoring system with real-time insights and decision-making support.", tags: ["Dashboard", "Data", "AI"], year: "2025", github: "https://github.com/Abishek-kk/CMR_Dashboard", live: "https://github.com/Abishek-kk/CMR_Dashboard" },
  { title: "AutoMart AI", desc: "AI supermarket system using LSTM, K-Means and Apriori, built with LangChain and a Streamlit dashboard.", tags: ["AI", "LangChain", "Streamlit"], year: "2025", github: "https://github.com/Abishek-kk/AutoMart-AI", live: "https://automart-ai-mpworqt3pcf76dsgxam9bl.streamlit.app/" },
];

function ProjectsPage() {
  return (
    <PortfolioLayout title="PROJECTS" subtitle="Code. Build. Ship.">
      <Panel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
<div
              key={p.title}
              className="group neon-panel rounded-md p-4 flex flex-col gap-3 hover:bg-neon/5 hover:scale-[1.02] transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display font-bold text-neon tracking-wider">{p.title}</h3>
                <span className="text-xs text-foreground/60">{p.year}</span>
              </div>
              <p className="text-sm text-foreground/80 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] tracking-wider px-2 py-0.5 rounded-sm border border-neon/40 text-neon">
                    {t}
                  </span>
                ))}
              </div>
<div className="flex gap-2 pt-2 border-t border-neon/20">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 text-xs py-1.5 rounded-sm border border-neon/40 hover:bg-neon/10 transition">
                  <Github className="w-3 h-3" /> CODE
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 text-xs py-1.5 rounded-sm border border-neon/40 hover:bg-neon/10 transition">
                    <ExternalLink className="w-3 h-3" /> LIVE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </PortfolioLayout>
  );
}
