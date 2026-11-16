# Oryon Global — Enterprise Technology & Software Development Website

A modern, premium, cinematic IT solutions company website built for **Oryon Global**.

## ✨ Features & Architecture

- **Cinematic Technology Background Video**: Full-width high-definition background video with a deep navy overlay (55–70% opacity), subtle radial gradient, and light interactive HTML5 canvas digital particle network.
- **Enterprise Visual Design System**:
  - Primary Navy: `#061B35`
  - Deep Blue: `#082B4C`
  - Technology Blue: `#0877B9`
  - Cyan Accent: `#16C8E8`
  - Coral CTA: `#FF684A`
  - White: `#FFFFFF`
  - Light Grey: `#D9E4ED`
- **Transparent Sticky Navigation**:
  - Original SVG text-and-symbol logo mark
  - Center/right links: Home, About Us, Services, Industries, Our Work, Careers, Contact
  - Right-side CTA: "Let's Talk"
  - Responsive mobile drawer menu with blur backdrop
- **Hero Section**:
  - Intro badge: `YOUR TECHNOLOGY PARTNER`
  - Headline: *"Engineering Digital Solutions. Powering Business Growth."*
  - Supporting paragraph and dual CTAs: "Explore Our Services" (Coral) & "Start a Project" (Glass/Cyan)
- **Trust & Expertise Statement**:
  - 3 glassmorphic service cards overlapping the hero video:
    1. *Software Engineering*
    2. *Cloud & Infrastructure*
    3. *AI & Digital Transformation*
- **About Oryon Global**:
  - Heading: *"Technology Built Around Your Vision"*
  - Mission, Approach, Innovation, and Long-term Partnerships
  - Live interactive telemetry & architecture topology console visual
- **Services (8 Enterprise Solutions)**:
  - Custom Software Development, Web Applications, Mobile Apps, AI & Automation, Cloud Computing, UI/UX Design, Enterprise IT, IT Consulting
  - Interactive "Learn More" modal with deliverables & inquiry trigger
- **Structured 4-Step Approach**:
  - 01 Discover, 02 Design, 03 Develop, 04 Deliver
- **Portfolio / Reference Architecture Showcase**:
  - Category filters: All, Enterprise Software, Web Applications, AI Solutions, Mobile Applications
  - Clearly labeled sample architectures (no fabricated clients)
- **Why Choose Oryon Global & Domain Verticals**:
  - 6 engineering discipline pillars
  - Vertical industries (FinTech, Healthcare, Logistics, Retail, SaaS, Robotics)
  - Careers talent network
- **Call-to-Action & Contact Inquiry**:
  - High-impact blue gradient CTA
  - Comprehensive contact form with validation, honeypot spam protection, loading state, and backend-ready hook (`VITE_CONTACT_API_URL`).
- **Footer & Legal Documents**:
  - Interactive Privacy Policy & Terms of Service modals
  - Configurable social links and current copyright notice (2026).

---

## 🚀 Quickstart

### Prerequisites
- Node.js 18+ (tested on Node v22.20.0)
- npm 9+

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📹 Video Asset Configuration

The background video is located at:
```text
public/videos/technology-background.mp4
```

To replace the background video with any other MP4 file, either:
1. Place your new MP4 file at `public/videos/technology-background.mp4`.
2. Or pass a custom `videoSrc` prop to `<TechBackgroundVideo videoSrc="/path/to/video.mp4" />` in `src/components/Hero.jsx`.

The component automatically includes:
- HTML5 video playback (`autoPlay`, `muted`, `loop`, `playsInline`)
- Automatic fallback gradient mesh + canvas network if video loading fails or on low-power devices
- `prefers-reduced-motion` accessibility support

---

## ⚙️ Backend Form Integration

To connect the project inquiry form to a live backend endpoint or webhook:
1. Create a `.env` file in the project root:
   ```env
   VITE_CONTACT_API_URL=https://api.yourdomain.com/v1/inquiries
   ```
2. The form will automatically POST valid JSON inquiries to this endpoint. If left unconfigured, the form runs in safe demonstration mode with client-side validation.
