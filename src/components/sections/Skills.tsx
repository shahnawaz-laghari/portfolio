"use client";
import { motion } from "motion/react";
import { skillGroups } from "@/data/skills";
import { SkillMarquee } from "@/components/SkillMarquee";
import { skillIconMap } from "@/lib/skill-icons";

// TODO: tweak the wording of the two levels below if you prefer different labels.
const levelLabels: Record<string, string> = {
  comfortable: "Comfortable with",
  learning: "Currently learning",
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-bold md:text-4xl"
        >
          Skills
        </motion.h2>
        <p className="mt-2 text-muted-foreground">An honest snapshot of my toolkit as a junior developer.</p>
        <div className="mt-8">
          <SkillMarquee />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-col gap-2">
                {g.skills.map((s) => {
                  const Icon = skillIconMap[s.icon];
                  return (
                    <div
                      key={s.name}
                      className="flex items-center justify-between rounded-lg bg-muted px-3 py-1.5"
                    >
                      <span className="inline-flex items-center gap-2 text-sm">
                        {Icon && (
                          <span aria-hidden="true">
                            <Icon className="h-4 w-4" />
                          </span>
                        )}
                        {s.name}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-wide ${
                          s.level === "comfortable" ? "text-emerald-700 dark:text-emerald-300" : "text-muted-foreground"
                        }`}
                      >
                        {levelLabels[s.level]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}