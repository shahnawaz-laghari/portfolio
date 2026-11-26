import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhoneFrame } from "@/components/PhoneFrame";
import { fadeUp } from "@/lib/animations";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="surface surface-hover group relative overflow-hidden p-5"
    >
      {/* Whole card navigates to the case study. */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Open ${project.title} case study`}
        className="absolute inset-0 z-10 rounded-[1.75rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      />

      <div className="pointer-events-none relative z-20">
        <div className="flex h-[540px] items-center justify-center overflow-visible rounded-[1.4rem] bg-muted/40 py-6 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_rgba(15,17,21,0.9)_55%,_rgba(10,12,16,1)_100%)]">
          <PhoneFrame
            src={project.images[0]}
            alt={`${project.title} app screenshot`}
            fit="contain"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground dark:text-white">
            {project.title}
          </h3>
          <Badge variant="secondary" className="mt-1 border border-border text-xs">
            {project.platform}
          </Badge>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground/80 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.links.appStore || project.links.playStore) && (
          <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto relative z-30 transition-colors hover:text-foreground"
              >
                App Store
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto relative z-30 transition-colors hover:text-foreground"
              >
                Play Store
              </a>
            )}
          </div>
        )}
      </div>

      <ArrowUpRight
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 z-20 h-4 w-4 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.article>
  );
}
