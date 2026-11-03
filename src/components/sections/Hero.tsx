"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, Download, Flame } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-16">
      {/* animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col gap-6"
        >
          <motion.p variants={fadeUpLocal} className="text-sm font-medium text-primary">
            {profile.name}
          </motion.p>
          <motion.h1
            variants={fadeUpLocal}
            className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            {profile.title}
          </motion.h1>
          <motion.p variants={fadeUpLocal} className="max-w-md text-lg text-muted-foreground">
            {profile.tagline}
          </motion.p>
          <motion.div variants={fadeUpLocal} className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={profile.resume} download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* aura splash — Pixel frame */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[480px] w-[240px] overflow-hidden rounded-[2.9rem] border border-white/15 bg-neutral-950 p-2.5 shadow-2xl"
          >
            {/* side buttons */}
            <span className="absolute -right-[3px] top-28 h-8 w-[3px] rounded-r bg-zinc-700" />
            <span className="absolute -left-[3px] top-32 h-12 w-[3px] rounded-l bg-zinc-700" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.2rem] bg-[#171310]">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  {/* glow behind the logo ring */}
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e78a4e]/25 blur-3xl" />
                  <motion.div
                    animate={{ scale: [1, 1.04, 1], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#e78a4e] shadow-[0_0_18px_rgba(231,138,78,0.45),0_0_45px_rgba(231,138,78,0.28)]"
                  >
                    <Flame
                      className="h-11 w-11 fill-[#e78a4e] text-[#e78a4e]"
                      style={{ filter: "drop-shadow(0 0 10px rgba(231,138,78,0.55))" }}
                    />
                  </motion.div>
                </div>
                <div className="w-full px-5 text-center">
                  <div className="text-[2.5rem] font-bold leading-tight tracking-tight text-white">
                    aura
                  </div>
                  <div className="mt-3 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.3em] text-zinc-400">
                    Move with intention
                  </div>
                </div>
              </div>
              <div className="sheen pointer-events-none absolute inset-0" />
            </div>
            {/* punch-hole camera */}
            <span className="absolute left-1/2 top-3 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-black ring-1 ring-zinc-700" />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="#about" aria-label="Scroll down">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}

const fadeUpLocal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};