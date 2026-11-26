"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { PhoneFrame } from "@/components/PhoneFrame";
import { fadeUp, stagger } from "@/lib/animations";

export function Hero() {
  // Scroll in-page without writing a hash to the URL, so refreshes start at the hero.
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(section, { offset: -84, duration: 1 });
    } else {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-start gap-5"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-primary">
            {profile.name}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
          >
            {profile.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-md text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
            <Button type="button" onClick={() => scrollToSection("projects")}>
              View projects
            </Button>
            <Button asChild variant="outline">
              <Link href={profile.resume} download="Shah-Nawaz-Ahmed-CV.pdf">
                <Download className="mr-2 h-4 w-4" /> Resume
              </Link>
            </Button>
          </motion.div>
          <motion.button
            variants={fadeUp}
            type="button"
            onClick={() => scrollToSection("about")}
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="h-3.5 w-3.5" /> About me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <PhoneFrame
            src="/assets/screenshots/aura-ss/screenshots/cropped/splash.jpg"
            alt="Aura app splash screen"
            fit="contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
