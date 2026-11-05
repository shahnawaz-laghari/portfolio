"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { PhoneFrame } from "@/components/PhoneFrame";
import { fadeUp, stagger } from "@/lib/animations";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-16">
      {/* static gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col gap-6"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-primary">
            {profile.name}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            {profile.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-md text-lg text-muted-foreground">
            {profile.tagline}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
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

        {/* phone mockup — static, no looping animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center md:justify-end"
        >
          <PhoneFrame variant="aura" alt="Aura app splash screen" />
        </motion.div>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
        </Link>
      </div>
    </section>
  );
}
