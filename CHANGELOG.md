# Changelog

## [Unreleased] - 2026-11-24

### Added
- Shared `ScreenshotViewer` plus an Aura viewer showing 12 real device screenshots (one
  duplicate profile screenshot removed),
  with status/navigation bars trimmed from cleaned copies. The Aura card uses its splash logo.
- Friends' real profile photos in the Aura friends/friend-profile/league screens were replaced
  with neutral initials; unedited originals moved outside `public/`.
- Presence viewer with five real device screenshots, cropped status/navigation bars, splash
  logo on the card, and case-study copy corrected to its real QR attendance feature set.
- Screenshot viewer on the SeatNix case-study page showing all nine real device screenshots
  (splash, home, seats, payment, success, notifications, profile, settings x2) in a phone
  frame with `object-contain` so nothing is cropped; the duplicate standalone phone-frame
  gallery was removed from this page.
- Count-up stats in About and a scroll-down indicator in the hero.
- Split-word hero title reveal and a drawn timeline line in Experience.
- Testimonials carousel with typed data in `src/data/testimonials.ts`.
- Two lazy-loaded Lottie animations: hero signal pulse and contact success checkmark.
- Enter page transitions via `src/app/template.tsx`.
- Footer back-to-top button and cross-page-safe nav anchors (`/#section`).
- Shared zod schema for the contact form + API route, HTML escaping in the email template,
  `CONTACT_TO_EMAIL` support, and a local console-log fallback when no API key is set.
- `.env.example` documenting site URL and contact settings.

### Changed
- Design pass for a quieter, more intentional look: simplified hero, cards, skills, viewer,
  typography and spacing; removed decorative gradients/glows and the fabricated testimonials
  section. Hero now uses the real Aura splash instead of a CSS mockup.
- Removed the hero/about divider in favour of tighter section spacing, added numbered accent
  eyebrows for hierarchy, and introduced one shared `.surface` card style with soft depth and
  a subtle hover lift.
- `PhoneFrame` sizes real screenshots to their native aspect ratio and hides the fake
  punch-hole camera, so card previews fit cleanly without letterboxing or overlap.
- Screenshots now come from `project.images` everywhere; `PhoneFrame` only falls back to
  the branded CSS mockup when no image is supplied.
- Projects now show only the three real Android apps: Aura, SeatNix and Presence. The
  placeholder platform filter was removed — with a single platform it added no value and
  caused cards to disappear when switching back to "All".
- Skills list trimmed to the tools you actually use; native iOS/Android and GraphQL entries were removed.
- Site URL is derived from `NEXT_PUBLIC_SITE_URL` or `VERCEL_URL` instead of `example.com`.
- Reduced-motion support via MotionConfig `reducedMotion="user"`; the skills marquee is an
  explicit owner exception and keeps scrolling (documented in `NOTES.md`).
