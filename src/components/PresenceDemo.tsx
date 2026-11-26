import { ScreenshotViewer, type DemoScreen } from "@/components/ScreenshotViewer";

const base = "/assets/screenshots/presence-ss/cropped";

/** Real screenshots captured on the owner's Android device. */
const screens: DemoScreen[] = [
  { src: `${base}/splash.jpg`, label: "Splash", alt: "Presence splash screen" },
  { src: `${base}/home.jpg`, label: "Home", alt: "Presence QR attendance home screen" },
  { src: `${base}/profile.jpg`, label: "Profile", alt: "Presence student profile screen" },
  { src: `${base}/settings.jpg`, label: "Settings", alt: "Presence settings screen" },
  { src: `${base}/settings1.jpg`, label: "About", alt: "Presence about screen" },
];

export function PresenceDemo() {
  return (
    <ScreenshotViewer
      description="Presence on an Android device."
      screens={screens}
    />
  );
}
