import type { ComponentType } from "react";
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

/**
 * Maps the icon string in data/skills.ts to its react-icons component.
 * Named imports keep the bundle tree-shaken (no `import *`).
 */
export const skillIconMap: Record<string, ComponentType<{ className?: string }>> = {
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
