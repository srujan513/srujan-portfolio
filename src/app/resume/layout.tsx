// src/app/resume/layout.tsx
import { ReactNode } from "react";
import { ResumeSidebar } from "@/components/resume-sidebar";
import { sidebarNavItems } from "@/data/resume-data";

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
