import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhoneFrame } from "@/components/PhoneFrame";
import { fadeUp } from "@/lib/animations";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const previewImage =
    project.slug === "aura" ? "/aura-home.jpg" : "/seatnix-splash.jpg";

  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/90 p-5 shadow-lg shadow-black/5 transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-primary/10 hover:shadow-xl dark:border-white/10 dark:bg-[#10141d]/90 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-[#8b5cf6]/30 dark:hover:shadow-[0_22px_60px_rgba(80,40,120,0.28)]"
    >
      <div className="flex h-[540px] items-center justify-center overflow-visible rounded-[1.4rem] bg-muted/40 py-6 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_rgba(15,17,21,0.9)_55%,_rgba(10,12,16,1)_100%)]">
        <PhoneFrame
          src={previewImage}
          alt={project.title}
          variant={project.slug === "aura" ? "aura" : "seatnix"}
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground dark:text-white">{project.title}</h3>
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

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {project.links.appStore && (
            <Link href={project.links.appStore} className="transition-colors hover:text-foreground">
              App Store
            </Link>
          )}
          {project.links.playStore && (
            <Link href={project.links.playStore} className="transition-colors hover:text-foreground">
              Play Store
            </Link>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-[#8b5cf6]/40 dark:hover:bg-[#8b5cf6]/10"
        >
          Case study <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
