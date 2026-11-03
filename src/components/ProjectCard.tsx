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
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10141d]/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-[#8b5cf6]/30 hover:shadow-[0_22px_60px_rgba(80,40,120,0.28)]"
    >
      <div className="flex h-[540px] items-center justify-center overflow-visible rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_rgba(15,17,21,0.9)_55%,_rgba(10,12,16,1)_100%)] py-6">
        <PhoneFrame
          src={previewImage}
          alt={project.title}
          variant={project.slug === "aura" ? "aura" : "seatnix"}
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <Badge variant="secondary" className="mt-1 border-white/10 bg-white/5 text-xs text-zinc-300">
          {project.platform}
        </Badge>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-sm text-zinc-400">
          {project.links.appStore && (
            <Link href={project.links.appStore} className="transition-colors hover:text-white">
              App Store
            </Link>
          )}
          {project.links.playStore && (
            <Link href={project.links.playStore} className="transition-colors hover:text-white">
              Play Store
            </Link>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/10"
        >
          Case study <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}