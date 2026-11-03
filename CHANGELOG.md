# Changelog

## [Unreleased] - 2024-11-04

### Fixed
- **Layout scroll issue**: Removed `h-full` constraint from `<html>` element in `layout.tsx` that was preventing users from scrolling to footer
- **PhoneFrame component**: Completely refactored Android device frames to match Hero section design
  - Fixed dimensions to proper phone aspect ratio (480px x 240px)
  - Added consistent styling: borders, shadows, rounded corners, punch-hole camera
  - Added side buttons for realistic device appearance
  - Implemented proper floating animation matching Hero section
  - Added glow effects and improved visual consistency for Aura and Seatnix variants
  
### Changed
- **ProjectCard component**: Increased card height from 360px to 540px to fully display Android device frames without cropping
- **Project detail pages**: Added variant prop support to display proper device frames for each project type
- **PhoneFrame animations**: Standardized floating animation across all instances

### Code Quality
- ✅ All ESLint checks passing
- ✅ TypeScript compilation successful
- ✅ Production build successful (9 routes generated)
- ✅ No console statements in production code
- ✅ Proper accessibility attributes maintained

### Security
- ✅ API keys properly excluded via .gitignore
- ✅ Environment variables not committed to repository
