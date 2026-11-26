"use client";
import { motion } from "motion/react";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          From fundamentals to shipping apps.
        </p>
        <div className="relative mt-10 ml-4 pl-8">
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-0 top-0 h-full w-px bg-primary/40"
          />
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