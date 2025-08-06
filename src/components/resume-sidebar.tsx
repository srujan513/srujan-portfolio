"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ResumeSidebarProps {
  items: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
}

export function ResumeSidebar({ items }: ResumeSidebarProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 sticky top-20">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Button
            key={item.href}
            asChild
            variant={isActive ? "default" : "ghost"}
            className="justify-start"
          >
            <Link href={item.href}>
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
