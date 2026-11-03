"use client";
import { motion } from "motion/react";
import {
  SiDart,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFlutter,
  SiAndroid,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiReacthookform,
  SiFirebase,
  SiPostman,
  SiGit,
  SiFigma,
  SiGithubactions,
  SiVercel,
} from "react-icons/si";
import { allSkills } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiDart,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiFlutter,
  SiAndroid,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiReacthookform,
  SiFirebase,
  SiPostman,
  SiGit,
  SiFigma,
  SiGithubactions,
  SiVercel,
};

export function SkillMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Infinite loop using Motion */}
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {/* Render 2 identical sets for seamless continuous loop */}
        {[...allSkills, ...allSkills].map((s, i) => {
          const Icon = iconMap[s.icon];
          return (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              {Icon && <Icon className="h-6 w-6 text-foreground/80" />}
              <span className="text-sm font-medium tracking-wide">{s.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}