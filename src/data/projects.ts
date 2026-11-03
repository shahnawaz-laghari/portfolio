// TODO: replace with your actual projects, screenshots, and real links/metrics.
export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  platform: "Android";
  tech: string[];
  images: string[];
  video?: string;
  links: { appStore?: string; playStore?: string; github?: string; website?: string };
  role: string;
  problem: string;
  features: string[];
  results?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "aura",
    title: "Aura",
    tagline: "Habit builder app for NoFap and physical walk/run tracking.",
    description:
      "A habit building and wellness Android application designed to help users stay disciplined with NoFap streaks, build consistent habits, and track physical activities such as walking and running.",
    platform: "Android",
    tech: ["Flutter", "Dart", "Local Storage", "Activity Tracking"],
    images: ["/aura-home.jpg"],
    links: {},
    role: "Personal project · Flutter developer",
    problem:
      "Maintaining discipline requires habit tracking alongside physical movement and relapse prevention in a distraction-free, mindful interface.",
    features: [
      "NoFap streak counter with relapse tracking and milestones",
      "Daily habit builder with reminders and progress logs",
      "Physical activity tracking for walks and runs",
      "Minimalist dark UI designed for intentional, focused use",
    ],
    results: ["Built for mindfulness & active lifestyle", "Focus: streak algorithms, activity stats & animations"],
    featured: true,
  },
  {
    slug: "seatnix",
    title: "Seatnix",
    tagline: "Bus seat reservation Android application.",
    description:
      "A bus seat reservation Android app developed for learning purposes as a course project for 'Software Project Management'. It focuses on project lifecycle management, requirement gathering, and clean mobile UI implementation for reserving bus seats.",
    platform: "Android",
    tech: ["Flutter", "Dart", "UI Design", "SPM Coursework"],
    images: ["/seatnix-splash.jpg"],
    links: {},
    role: "University Project · Software Project Management",
    problem:
      "Created as an academic practical project to understand software project management phases, wireframing, seat availability state management, and real-world reservation flows.",
    features: [
      "Interactive bus seat selection and reservation layout",
      "Seat availability status (booked, available, selected)",
      "Trip search and route details preview",
      "Developed following Software Project Management (SPM) methodology",
    ],
    results: [
      "Academic project for Software Project Management course",
      "Practiced project documentation, UI prototyping, and sprint deliverables",
    ],
    featured: true,
  },
];