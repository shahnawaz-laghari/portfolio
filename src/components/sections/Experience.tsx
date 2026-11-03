"use client";
import { motion } from "motion/react";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">My journey</h2>
        <p className="mt-2 text-muted-foreground">
          How I went from fundamentals to building real apps.
        </p>
        <div className="relative mt-10 ml-4 border-l border-border pl-8">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="text-sm text-primary">{e.period}</div>
              <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
              <div className="text-sm text-muted-foreground">{e.subtitle}</div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}