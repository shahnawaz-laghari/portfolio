"use client";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Android Projects</h2>
          <p className="mt-2 text-muted-foreground">
            A selection of mobile apps I have designed and built with Flutter &amp; Android.
          </p>
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}