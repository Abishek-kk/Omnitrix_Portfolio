import { createFileRoute } from "@tanstack/react-router";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Omnitrix Portfolio" },
      { name: "description", content: "Certified courses and credentials." },
    ],
  }),
  component: CertsPage,
});

const certs = [
  { title: "WQU Data Science Lab", issuer: "WorldQuant University", date: "2025", id: "WQU-DS-2025" },
  { title: "IoT", issuer: "NPTEL", date: "2025", id: "NPTEL-IOT-2025" },
  { title: "AWS Cloud Virtual Internship", issuer: "Edu-Skills", date: "2025", id: "AWS-Edu-2025" },
  { title: "Networking Essentials", issuer: "Cisco", date: "Dec 2025", id: "CISCO-NET-2025" },
  { title: "Cybersecurity Essentials", issuer: "Cisco", date: "Jun 2025", id: "CISCO-CYBER-2025" },
];

function CertsPage() {
  return (
    <PortfolioLayout title="CERTIFICATIONS" subtitle="Verified. Validated. Earned.">
      <Panel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c) => (
            <div key={c.title} className="neon-panel rounded-md p-4 hover:bg-neon/5 hover:scale-[1.02] transition group">
              <div className="flex items-start justify-between mb-3">
                <div className="hex-clip w-12 h-12 bg-neon/10 flex items-center justify-center border border-neon/40">
                  <Award className="w-5 h-5 text-neon" />
                </div>
                <ExternalLink className="w-4 h-4 text-neon opacity-0 group-hover:opacity-100 transition" />
              </div>
              <h4 className="font-display font-bold text-neon tracking-wider text-sm">{c.title}</h4>
              <p className="text-sm text-foreground/85 mt-1">{c.issuer}</p>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-neon/20 text-xs text-foreground/70">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {c.date}</span>
                <span className="text-neon font-mono">{c.id}</span>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </PortfolioLayout>
  );
}
