"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { fadeUp, stagger } from "@/lib/animations";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 font-heading text-3xl font-semibold tracking-tight"
        >
          Education
        </motion.h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Where I&apos;m building my foundation in software engineering.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={stagger}
          className="mt-10 grid gap-6"
        >
          {education.map((item) => (
            <motion.article
              key={`${item.degree}-${item.field}`}
              variants={fadeUp}
              className="surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-primary">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.degree} in {item.field}
                    </h3>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.school}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
