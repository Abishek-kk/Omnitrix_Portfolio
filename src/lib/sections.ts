import {
  User, Code2, Briefcase, GraduationCap, TrendingUp,
  Trophy, Award, Monitor, FileText, Mail
} from "lucide-react";

export type SectionDef = {
  id: string;
  num: string;
  label: string;
  path: string;
  icon: typeof User;
};

export const sections: SectionDef[] = [
  { id: "about", num: "01", label: "About Me", path: "/about", icon: User },
  { id: "skills", num: "02", label: "Skills", path: "/skills", icon: Code2 },
  { id: "projects", num: "03", label: "Projects", path: "/projects", icon: Briefcase },
  { id: "education", num: "04", label: "Education", path: "/education", icon: GraduationCap },
  { id: "experience", num: "05", label: "Experience", path: "/experience", icon: TrendingUp },
  { id: "achievements", num: "06", label: "Achievements", path: "/achievements", icon: Trophy },
  { id: "certifications", num: "07", label: "Certifications", path: "/certifications", icon: Award },
  { id: "coding", num: "08", label: "Coding Profiles", path: "/coding-profiles", icon: Monitor },
  { id: "resume", num: "09", label: "Resume", path: "/resume", icon: FileText },
  { id: "contact", num: "10", label: "Contact", path: "/contact", icon: Mail },
];

export function getSectionNav(currentPath: string) {
  const idx = sections.findIndex((s) => s.path === currentPath);
  return {
    current: idx >= 0 ? sections[idx] : null,
    prev: idx > 0 ? sections[idx - 1] : null,
    next: idx >= 0 && idx < sections.length - 1 ? sections[idx + 1] : null,
    index: idx,
  };
}
