"use client";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { stagger } from "@/lib/animations";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Android Projects
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            A selection of mobile apps I have designed and built with Flutter &amp; Android.
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
