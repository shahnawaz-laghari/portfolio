"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { stagger } from "@/lib/animations";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10">
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Projects
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Three Android apps built with Flutter.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={stagger}
          className="grid gap-8 sm:grid-cols-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
