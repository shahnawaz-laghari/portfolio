export type ProjectPlatform = "iOS" | "Android" | "Cross-platform";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  platform: ProjectPlatform;
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
    images: ["/assets/screenshots/aura-ss/screenshots/cropped/splash.jpg"],
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
    results: [
      "Built for mindfulness & active lifestyle",
      "Focus: streak algorithms, activity stats & animations",
    ],
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
    images: [
      "/assets/screenshots/seatnix-ss/cropped/splash.jpg",
      "/assets/screenshots/seatnix-ss/cropped/home.jpg",
      "/assets/screenshots/seatnix-ss/cropped/seat.jpg",
    ],
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
  {
    slug: "presence",
    title: "Presence",
    tagline: "QR-based classroom attendance for verified students.",
    description:
      "Presence is a classroom attendance app that replaces paper roll calls with short-lived QR check-ins. A teacher starts a session, students scan it with their own verified account, and attendance is recorded instantly with the session, time and device details.",
    platform: "Android",
    tech: ["Flutter", "Dart", "Appwrite", "QR scanning", "Camera"],
    images: ["/assets/screenshots/presence-ss/cropped/splash.jpg"],
    links: {},
    role: "Personal project · Flutter developer",
    problem:
      "Manual roll calls waste class time and are easy to fake. Presence makes check-ins quick and trustworthy: every scan is tied to a real student account, limited to one per session, and protected by rotating QR codes so a shared screenshot cannot be reused.",
    features: [
      "Scan a teacher's active class QR to mark attendance",
      "Verified student accounts bound to each check-in",
      "One check-in per session with rotating QR protection",
      "Academic profile stored on-device (department, roll no., batch)",
      "Simple Home / Profile / Settings navigation",
    ],
    results: [
      "Built a real attendance flow with Appwrite authentication",
      "Practised camera/QR integration and verified, one-per-session check-ins",
    ],
    featured: true,
  },
];
