// TODO: adjust levels/labels to reflect your real comfort with each tool.
export type SkillLevel = "comfortable" | "learning";
export type Skill = { name: string; icon: string; level: SkillLevel };
export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "Dart", icon: "SiDart", level: "comfortable" },
      { name: "TypeScript", icon: "SiTypescript", level: "learning" },
      { name: "JavaScript", icon: "SiJavascript", level: "learning" },
      { name: "HTML", icon: "SiHtml5", level: "comfortable" },
      { name: "CSS", icon: "SiCss", level: "comfortable" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Flutter", icon: "SiFlutter", level: "learning" },
      { name: "Android", icon: "SiAndroid", level: "learning" },
      { name: "React", icon: "SiReact", level: "learning" },
      { name: "Next.js", icon: "SiNextdotjs", level: "learning" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: "learning" },
      { name: "React Hook Form", icon: "SiReacthookform", level: "learning" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Firebase", icon: "SiFirebase", level: "comfortable" },
      { name: "REST APIs", icon: "SiPostman", level: "learning" },
      { name: "Git", icon: "SiGit", level: "comfortable" },
      { name: "Figma", icon: "SiFigma", level: "comfortable" },
      { name: "GitHub Actions", icon: "SiGithubactions", level: "learning" },
      { name: "Vercel", icon: "SiVercel", level: "learning" },
    ],
  },
];

// Flat list for marquee
export const allSkills: Skill[] = skillGroups.flatMap((g) => g.skills);