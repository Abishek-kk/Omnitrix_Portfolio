import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, MapPin, Mail, Phone, Briefcase, GraduationCap, Brain, Code2, Users, BookOpen, Clock } from "lucide-react";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Omnitrix Portfolio" },
      { name: "description", content: "Downloadable resume — Full stack developer and AI systems builder." },
    ],
  }),
  component: ResumePage,
});

const work = [
  { date: "May 2025 - July 2025", role: "Front-End Development Intern", company: "Zero2Site",
    bullets: ["Built responsive web applications using React.js, HTML, CSS, and JavaScript.", "Used Git/GitHub for version control and Agile collaboration.", "Delivered accessible UI components and polished frontend interactions."] },
  { date: "Nov 2025 - Dec 2025", role: "AI Intern", company: "Reach Skyline",
    bullets: ["Developed a CMR dashboard for document and data management.", "Implemented clause-level document analysis to improve accuracy.", "Built real-time analytics and reporting features for stakeholders."] },
];

function ResumePage() {
  return (
    <PortfolioLayout title="RESUME" subtitle="Full Stack Developer | AI Systems Builder">
      <Panel>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-neon" />
            <div>
              <h2 className="font-display font-black text-2xl neon-text">CODING RESUME</h2>
              <p className="text-sm text-foreground/70">Full Stack Developer | AI Systems Builder</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="neon-panel rounded-md p-4">
            <h3 className="text-neon font-display font-bold tracking-wider mb-2">👤 PROFILE</h3>
            <p className="text-sm text-foreground/85">
              Passionate Full Stack Developer specializing in building intelligent, scalable, and high-performance web applications and multi-agent AI systems.
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              <div className="flex items-center gap-2"><span className="text-neon w-24">Name</span> ABISHEK K</div>
              <div className="flex items-center gap-2"><MapPin className="w-3 h-3 text-neon" /><span className="w-20">Location</span> Chennai, India</div>
              <div className="flex items-center gap-2"><Briefcase className="w-3 h-3 text-neon" /><span className="w-20">Experience</span> 2+ Years</div>
              <div className="flex items-center gap-2"><Clock className="w-3 h-3 text-neon" /><span className="w-20">Availability</span> Full-time</div>
              <div className="flex items-center gap-2"><Mail className="w-3 h-3 text-neon" /><span className="w-20">Email</span> abishekkumar548709@gmail.com</div>
              <div className="flex items-center gap-2"><Phone className="w-3 h-3 text-neon" /><span className="w-20">Phone</span> 7305647064</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="neon-panel rounded-md p-4">
              <h3 className="text-neon font-display font-bold tracking-wider mb-2 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> EDUCATION</h3>
              <p className="font-bold">Bachelor of Technology (B.Tech)</p>
              <p className="font-bold">B.Tech in Artificial Intelligence & Data Science</p>
              <p className="text-sm text-neon">Chennai Institute of Technology (CIT), Tamil Nadu</p>
              <p className="text-xs mt-1">2023 - 2027 | <span className="text-neon">CGPA: 8.12 / 10.0</span></p>
            </div>
            <div className="neon-panel rounded-md p-4">
              <h3 className="text-neon font-display font-bold tracking-wider mb-2">🛠 TECHNICAL SKILLS</h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs">
                <span className="text-neon font-bold">Languages</span><span>Java • Python • C++ • JavaScript • SQL</span>
                <span className="text-neon font-bold">Frameworks</span><span>React.js • Node.js • Express.js • Streamlit</span>
                <span className="text-neon font-bold">AI / ML</span><span>TensorFlow • PyTorch • LangChain • OpenAI • Hugging Face</span>
                <span className="text-neon font-bold">Databases</span><span>MongoDB • MySQL • SQLite</span>
                <span className="text-neon font-bold">Tools</span><span>Git • VS Code • Docker • Postman • Tableau</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="neon-panel rounded-md p-4">
            <h3 className="text-neon font-display font-bold tracking-wider mb-3 flex items-center gap-2"><Briefcase className="w-4 h-4" /> WORK EXPERIENCE</h3>
            <div className="space-y-3">
              {work.map((w) => (
                <div key={w.date}>
                  <p className="text-xs text-neon font-bold">{w.date}</p>
                  <p className="font-bold">{w.role}</p>
                  <p className="text-sm text-neon">{w.company}</p>
                  <ul className="text-xs mt-1 text-foreground/85 space-y-0.5">
                    {w.bullets.map((b) => <li key={b}>• {b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="neon-panel rounded-md p-4">
              <h3 className="text-neon font-display font-bold tracking-wider mb-2">⚙ PROJECT HIGHLIGHTS</h3>
              <div className="space-y-2 text-sm">
                <div><p className="text-neon font-bold">Multi-Agent AI System</p><p className="text-xs text-foreground/80">AI agents collaborating to solve real-world tasks.</p></div>
                <div><p className="text-neon font-bold">AI Chat Assistant</p><p className="text-xs text-foreground/80">Smart chatbot with memory and real-time responses.</p></div>
                <div><p className="text-neon font-bold">Developer Portfolio</p><p className="text-xs text-foreground/80">Futuristic portfolio built using React and Tailwind.</p></div>
              </div>
            </div>
            <div className="neon-panel rounded-md p-4">
              <h3 className="text-neon font-display font-bold tracking-wider mb-3">⚡ CORE STRENGTHS</h3>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[
                  { icon: Brain, label: "Problem Solving" },
                  { icon: Code2, label: "Clean Code" },
                  { icon: Users, label: "Team Collaboration" },
                  { icon: BookOpen, label: "Adaptive Learning" },
                  { icon: Clock, label: "Time Management" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex flex-col items-center gap-1">
                      <Icon className="w-5 h-5 text-neon" />
                      <span className="text-[9px] leading-tight">{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <a href="/resume.pdf" download className="px-8 py-3 rounded-full bg-neon text-primary-foreground font-display font-bold tracking-[0.2em] flex items-center gap-2 neon-glow hover:scale-105 transition">
            <Download className="w-4 h-4" /> DOWNLOAD PDF
          </a>
        </div>
      </Panel>
    </PortfolioLayout>
  );
}
