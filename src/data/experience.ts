// TODO: adjust dates, courses, and milestones to match your actual journey.
export type Experience = {
  period: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    period: "Now",
    title: "Deepening frontend skills",
    subtitle: "React · Next.js · TypeScript",
    bullets: [
      "Building responsive UIs with React, Next.js and Tailwind CSS.",
      "Learning state management, forms with validation, and API integration.",
      "Rebuilding classic UI patterns (dashboards, cards, forms) from scratch to internalize them.",
    ],
  },
  {
    period: "2025",
    title: "Flutter full-time focus",
    subtitle: "Dart · Flutter · Firebase",
    bullets: [
      "Completed structured Flutter/Dart coursework and built several practice apps.",
      "Learned Firebase (Auth, Firestore, Storage) and app architecture basics.",
      "Published my first utility app on the Google Play Store.",
    ],
  },
  {
    period: "2023 — 2025",
    title: "Programming fundamentals",
    subtitle: "Dart · Kotlin basics · Git",
    bullets: [
      "Studied core programming: OOP, collections, asynchronous work, and debugging.",
      "Got comfortable with Git and GitHub workflows.",
      "Solved daily exercises to build consistency and problem-solving habits.",
    ],
  },
];