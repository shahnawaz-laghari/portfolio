"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { CountUp } from "@/components/CountUp";
import { fadeUp, stagger } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-56 md:-ml-4 md:w-60"
        >
          <div className="relative aspect-square overflow-hidden rounded-full border border-border">
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              fill
              className="object-cover object-[50%_62%]"
              sizes="(max-width: 768px) 224px, 240px"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="mt-2 font-heading text-3xl font-semibold tracking-tight">
            About Me
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {profile.bio}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-2 text-sm text-muted-foreground">
            {profile.location}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="surface px-3 py-3"
              >
                <div className="text-xl font-semibold leading-none">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
