"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhoneFrame } from "@/components/PhoneFrame";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const previewImage =
    project.slug === "aura" ? "/aura-home.jpg" : "/seatnix-splash.jpg";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="flex justify-center">
        <PhoneFrame src={previewImage} alt={project.title} />
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <Badge variant="secondary">{project.platform}</Badge>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm">
          {project.links.appStore && (
            <Link href={project.links.appStore} className="text-muted-foreground hover:text-foreground">
              App Store
            </Link>
          )}
          {project.links.playStore && (
            <Link href={project.links.playStore} className="text-muted-foreground hover:text-foreground">
              Play Store
            </Link>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto inline-flex items-center gap-1 font-medium text-primary"
          >
            Case study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}