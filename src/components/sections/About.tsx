"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { CountUp } from "@/components/CountUp";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
            <motion.div
              whileHover={{ rotateX: 4, rotateY: -4 }}
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              className="relative h-80 w-80 max-w-full aspect-square overflow-hidden rounded-full border border-border shadow-lg ring-1 ring-white/10"
            >
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">About me</h2>
            <p className="text-muted-foreground">{profile.bio}</p>
            <p className="text-muted-foreground">{profile.location}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {profile.stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};