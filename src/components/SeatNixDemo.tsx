import { ScreenshotViewer, type DemoScreen } from "@/components/ScreenshotViewer";

const base = "/assets/screenshots/seatnix-ss/cropped";

/** Real screenshots captured on the owner's Android device. */
const screens: DemoScreen[] = [
  { src: `${base}/splash.jpg`, label: "Splash", alt: "SeatNix splash screen" },
  { src: `${base}/home.jpg`, label: "Home", alt: "SeatNix bus search home screen" },
  { src: `${base}/seat.jpg`, label: "Select seat", alt: "SeatNix seat selection screen" },
  { src: `${base}/payment.jpg`, label: "Payment", alt: "SeatNix payment screen" },
  { src: `${base}/success.jpg`, label: "Success", alt: "SeatNix payment success screen" },
  { src: `${base}/notification.jpg`, label: "Notifications", alt: "SeatNix notifications screen" },
  { src: `${base}/profile.jpg`, label: "Profile", alt: "SeatNix profile screen" },
  { src: `${base}/settings.jpg`, label: "Settings", alt: "SeatNix settings screen" },
  { src: `${base}/settings-1.jpg`, label: "Settings continued", alt: "SeatNix settings screen, scrolled" },
];

export function SeatNixDemo() {
  return (
    <ScreenshotViewer
      description="SeatNix on an Android device."
      screens={screens}
    />
  );
}
