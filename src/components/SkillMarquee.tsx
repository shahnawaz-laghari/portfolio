import { skillIconMap } from "@/lib/skill-icons";
import { allSkills } from "@/data/skills";

export function SkillMarquee() {
  return (
    <div className="group relative w-full overflow-hidden py-4">
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      {/* Pure CSS transform loop — runs on the compositor, no JS per frame */}
      <div className="marquee-track flex w-max gap-12">
        {/* Render 2 identical sets for a seamless continuous loop */}
        {[...allSkills, ...allSkills].map((s, i) => {
          const Icon = skillIconMap[s.icon];
          return (
            <div
              key={`${s.name}-${i}`}
              className="flex shrink-0 items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              {Icon && <span aria-hidden="true"><Icon className="h-5 w-5 text-muted-foreground" /></span>}
              <span className="text-sm text-muted-foreground">{s.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
