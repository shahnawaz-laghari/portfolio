"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#education", id: "education", label: "Education" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#experience", id: "experience", label: "Journey" },
  { href: "/#certifications", id: "certifications", label: "Certificates" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => links.map((l) => l.id), []);
  const { active, highlight } = useActiveSection(sectionIds);

  useEffect(() => {
    // Check initial scroll position immediately on mount / page refresh
    const checkScroll = () => setScrolled(window.scrollY > 10);
    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // On case-study pages, let the Link navigate back to the home anchor.
    if (pathname !== "/") return;
    e.preventDefault();
    highlight(targetId);
    const element = document.getElementById(targetId);
    if (!element) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(element, {
        offset: -84,
        duration: 1.4,
      });
    } else {
      const top = element.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              const hero = document.getElementById("hero");
              if (window.__lenis) {
                window.__lenis.scrollTo(hero ?? 0, { duration: 1.2 });
              } else if (hero) {
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }
            // On case-study pages the Link navigates home, which lands on the hero.
          }}
          className="font-heading text-lg font-bold tracking-tight"
        >
          {profile.name.split(" ").slice(0, 2).join(" ")}
          <span className="text-primary">.</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScrollTo(e, l.id)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-muted"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            );
          })}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <ButtonIcon open={open} setOpen={setOpen} />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-background/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    setOpen(false);
                    handleScrollTo(e, l.id);
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ButtonIcon({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <button
      aria-label="Toggle menu"
      onClick={() => setOpen(!open)}
      className="rounded-lg p-2 hover:bg-accent"
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
}