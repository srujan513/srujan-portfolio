import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Award,
  User,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { ResumeSidebar } from "@/components/resume-sidebar";

const sidebarNavItems = [
  { title: "About Me", href: "/resume", icon: <User className="h-4 w-4" /> },
  {
    title: "Experience",
    href: "/resume/experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Skills",
    href: "/resume/skills",
    icon: <Lightbulb className="h-4 w-4" />,
  },
  {
    title: "Education",
    href: "/resume/education",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    title: "Certifications",
    href: "/resume/certifications",
    icon: <Award className="h-4 w-4" />,
  },
];

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <ResumeSidebar items={sidebarNavItems} />
        </aside>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  );
}
