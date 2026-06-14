import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Code2, Twitter } from "lucide-react";
import { toast } from "sonner";
import { PortfolioLayout } from "@/components/PortfolioLayout";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Omnitrix Portfolio" },
      { name: "description", content: "Let's connect and build something amazing together." },
    ],
  }),
  component: ContactPage,
});

const contactEmail = "abishekkumar548709@gmail.com";

const info = [
  { icon: Mail, title: "EMAIL", v1: contactEmail, v2: "Open for internships and full-time roles." },
  { icon: Phone, title: "PHONE", v1: "7305647064", v2: "Available for remote and hybrid work." },
  { icon: MapPin, title: "LOCATION", v1: "Chennai, India", v2: "Open to remote opportunities." },
  { icon: Send, title: "RESPONSE TIME", v1: "Usually reply within 24 hours", v2: "Let's connect!" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Abishek-kk" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abishek-k-4b8416326/" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Abishek-kk" },
  { icon: Code2, label: "Codeforces", href: "https://codeforces.com/profile/Abishek-kk" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/abishek_kk" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = mailto;
      link.click();
    }

    toast.success("Email draft opened in your mail client. Please send it from there.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PortfolioLayout title="CONTACT ME" subtitle="Let's connect and build something amazing together.">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Panel>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-neon" />
            <h3 className="font-display font-bold text-neon tracking-widest">GET IN TOUCH</h3>
            <span className="text-xs text-foreground/70 ml-3">Have a project in mind or want to collaborate? Feel free to reach out!</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <motion.div
              className="space-y-3"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {info.map((i) => {
                const Icon = i.icon;
                return (
                  <motion.div
                    key={i.title}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="neon-panel rounded-md p-4 flex gap-4 hover:bg-neon/5 transition"
                  >
                    <div className="hex-clip w-14 h-14 bg-neon/10 flex items-center justify-center border border-neon/40 flex-shrink-0">
                      <Icon className="w-6 h-6 text-neon" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-neon tracking-wider">{i.title}</h4>
                      <p className="text-sm">{i.v1}</p>
                      <p className="text-xs text-foreground/70">{i.v2}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="neon-panel rounded-md p-4 flex flex-col gap-3"
            >
              <h4 className="font-display font-bold text-neon tracking-wider">💬 SEND ME A MESSAGE</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="YOUR NAME" className="bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition" />
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="YOUR EMAIL" className="bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition" />
              </div>
              <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="SUBJECT" className="bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition" />
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="YOUR MESSAGE" className="bg-background/60 border border-neon/40 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-neon focus:neon-glow transition resize-none" />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.94 }}
                className="mt-2 py-3 rounded-md border-2 border-neon text-neon font-display font-bold tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-neon hover:text-primary-foreground transition neon-glow"
              >
                <Send className="w-4 h-4" /> SEND MESSAGE
              </motion.button>
            </motion.form>
          </div>

          <div className="mt-5 pt-4 border-t border-neon/20">
            <h4 className="font-display font-bold text-neon tracking-wider mb-3 text-sm">🔗 LET'S CONNECT ON</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.94 }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="hex-clip w-14 h-14 bg-neon/10 border border-neon/40 flex items-center justify-center group-hover:bg-neon/20 group-hover:scale-110 transition">
                      <Icon className="w-5 h-5 text-neon" />
                    </div>
                    <span className="text-xs text-foreground/80 group-hover:neon-text transition">{s.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </Panel>
      </motion.div>
    </PortfolioLayout>
  );
}
