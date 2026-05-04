"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Briefcase, Code, User } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { href: "/", label: "Me", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: Code },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    if (dark) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const btn = toggleRef.current;
    const nextDark = !isDark;

    if (btn) {
      const rect = btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      document.documentElement.style.setProperty("--vt-x", `${x}px`);
      document.documentElement.style.setProperty("--vt-y", `${y}px`);
    }

    const apply = () => {
      if (nextDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setIsDark(nextDark);
    };

    if (!document.startViewTransition) {
      apply();
      return;
    }
    document.startViewTransition(apply);
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 px-2 py-2 rounded-2xl border bg-card/80 backdrop-blur-md border-border shadow-lg shadow-black/5 dark:shadow-none"
      >
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 group flex items-center gap-2 ${
                  isActive 
                    ? "text-foreground bg-accent/5 dark:bg-accent/10" 
                    : "text-muted hover:text-foreground hover:bg-pill-hover"
                }`}
              >
                <Icon size={16} className={isActive ? "text-accent" : "text-muted group-hover:text-foreground"} />
                <span className="hidden sm:inline">{item.label}</span>
                
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 border border-accent/20 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="w-px h-4 bg-border mx-2" />

        <button
          ref={toggleRef}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-pill-hover transition-all duration-200"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </motion.nav>
    </div>
  );
}
