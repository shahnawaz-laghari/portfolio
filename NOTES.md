# Notes

- `/public/derwesh.jpeg` is the owner's real photo. Real device screenshots now live in
  `/public/assets/screenshots/aura-ss/` and `/public/assets/screenshots/seatnix-ss/`;
  the older `/public/aura-home.jpg` and `/public/seatnix-splash.jpg` are no longer used.
- All three projects are real Android apps: Aura, SeatNix and Presence. Presence copy was
  updated from its real screenshots: a QR-based classroom attendance app for students.
- The SeatNix case study shows the owner's real device screenshots in a framed viewer
  (`src/components/SeatNixDemo.tsx`). Original captures remain in
  `/public/assets/screenshots/seatnix-ss/`; the site uses the cleaned copies in
  `/public/assets/screenshots/seatnix-ss/cropped/`, with the Android status and navigation
  bars trimmed off. They are shown with `object-contain` so the full app screen is visible
  without cropping. The project card uses the cleaned splash screenshot (logo). The
  standalone phone-frame gallery is hidden on this page. The old `/seatnix-splash.jpg` is no
  longer used.
- The Aura case study uses the same screenshot viewer (`src/components/AuraDemo.tsx`, built
  on the shared `ScreenshotViewer`) with 12 screens — a duplicate final profile screenshot
  was removed. Cleaned copies with the Android status and navigation
  bars removed are in `/public/assets/screenshots/aura-ss/screenshots/cropped/`. The card
  uses the cleaned splash logo.
- Privacy: in `friends.jpg`, `friend's-profile.jpg` and `league.jpg`, friends' real profile
  photos were replaced with neutral initials while keeping the original status rings, rank
  badges and online indicator. Unedited originals are kept outside `public/` in
  `/assets-originals/aura-ss/` so they are never served by the site.
- The Presence case study uses the shared `ScreenshotViewer` with five real screenshots.
  Originals are kept outside `public/` in `/assets-originals/presence-ss/`; cleaned copies
  with the Android status and navigation bars removed are in
  `/public/assets/screenshots/presence-ss/cropped/`. The card uses the cleaned splash logo.
- There is deliberately no platform filter: every project is Android right now. The old
  placeholder SVGs still in `/public/projects` are unused.
- Skills list only the tools you actually work with: Dart, TypeScript/JavaScript,
  HTML/CSS, Flutter, React/Next.js, Tailwind, Firebase, REST, Git, Figma, GitHub Actions
  and Vercel. Native iOS/Android tooling is intentionally not listed yet.
- Lottie is used only for the contact success checkmark. It is lazy-loaded on the client
  and pauses for `prefers-reduced-motion`. No fabricated testimonials section is included;
  the site sticks to verifiable project and skill content.
- Exception: the skills marquee intentionally keeps scrolling even when Reduce Motion is
  enabled (owner preference), via an override in `globals.css`.
- The hero phone is still a CSS mockup when no screenshot is provided (no screen recording).
- Lenis smooth scroll is enabled globally; anchor links use `/#section` so they also work
  from case-study pages.
- Social icons use `react-icons/fa` because lucide-react no longer exports brand icons.
- `public/resume.pdf` is the current CV (Shah Nawaz Ahmed Laghari). The hero download button
  points to it through `profile.resume` in `src/data/profile.ts`.
- The certificate on `/certifications` is `public/certificates/web-developer-pitp.jpg`. Its CNIC
  number is redacted; the unredacted original lives outside `public/` in
  `assets-originals/certificate-unredacted.jpg` and is never served.
- Set `NEXT_PUBLIC_SITE_URL` (or deploy on Vercel) so canonical/sitemap URLs are correct.
