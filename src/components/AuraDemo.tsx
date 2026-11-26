import { ScreenshotViewer, type DemoScreen } from "@/components/ScreenshotViewer";

const base = "/assets/screenshots/aura-ss/screenshots/cropped";

/** Real screenshots captured on the owner's Android device. */
const screens: DemoScreen[] = [
  { src: `${base}/splash.jpg`, label: "Splash", alt: "Aura splash screen" },
  { src: `${base}/home.jpg`, label: "Home", alt: "Aura streak home screen" },
  { src: `${base}/home1.jpg`, label: "Home detail", alt: "Aura home screen, scrolled" },
  { src: `${base}/friends.jpg`, label: "Friends", alt: "Aura friends list screen" },
  { src: `${base}/friend's-profile.jpg`, label: "Friend profile", alt: "Aura friend profile screen" },
  { src: `${base}/league.jpg`, label: "Leagues", alt: "Aura leagues screen" },
  { src: `${base}/settings.jpg`, label: "Settings", alt: "Aura settings screen" },
  { src: `${base}/settings1.jpg`, label: "Settings continued", alt: "Aura settings screen, notifications" },
  { src: `${base}/settings2.jpg`, label: "Settings continued", alt: "Aura settings screen, about" },
  { src: `${base}/user-profile.jpg`, label: "Your profile", alt: "Aura profile screen" },
  { src: `${base}/user-profile1.jpg`, label: "Profile details", alt: "Aura profile details screen" },
  { src: `${base}/user-profile2.jpg`, label: "Body metrics", alt: "Aura body metrics screen" },
];

export function AuraDemo() {
  return (
    <ScreenshotViewer
      description="Aura on an Android device."
      screens={screens}
    />
  );
}
