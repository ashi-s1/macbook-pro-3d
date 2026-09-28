# 💻 Apple MacBook Pro 3D Showcase

An interactive, high-performance 3D web experience inspired by Apple’s MacBook Pro product landing page. Built with **React 19**, **Three.js (React Three Fiber)**, **GSAP ScrollTrigger**, and **Tailwind CSS**.

---

## ✨ Features

- **🧊 Interactive 3D Model Viewer**: Real-time rendering and interactive manipulation of MacBook Pro 14" and 16" 3D models using `@react-three/fiber` and `@react-three/drei`.
- **🎨 Dynamic Customization**: Toggle between sizes (14" and 16") and finishes (Space Gray and Silver) with smooth GSAP color and opacity transitions.
- **🎬 Scroll-Driven Storytelling**: Cinematic transitions and parallax effects powered by **GSAP** and **ScrollTrigger**.
- **📱 Fully Responsive**:
  - Custom mobile navigation drawer with animated hamburger toggle.
  - Adaptive 3D camera and model scaling tailored for smartphones, tablets, and desktops.
  - Fluid typography and responsive grid/flex layouts.
- **⚡ Performance Optimized**: High-performance rendering pipeline with dynamic pixel ratio (`dpr`), asset preloading, and mobile-specific animation fallbacks.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [GSAP 3](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand.docs.pmnd.rs/)

---

## 📂 Project Structure

```bash
macbook_gsap_app/
├── public/                 # Static 3D models (.glb), videos, icons, and textures
├── src/
│   ├── components/
│   │   ├── models/         # 3D model components (MacBook 14" & 16")
│   │   ├── three/          # 3D scene helpers & ModelSwitcher
│   │   ├── Hero.jsx        # Hero section with animated video and title
│   │   ├── Highlights.jsx  # Feature highlights with masonry grid
│   │   ├── NavBar.jsx      # Responsive header with mobile drawer
│   │   ├── performance.jsx # GPU performance section with parallax images
│   │   ├── ProductViewer.jsx # Interactive 3D model customizer
│   │   └── Showcase.jsx    # Cinematic chip reveal & scroll effects
│   ├── constants/          # Application data and configuration
│   ├── store/              # Zustand global state (color, scale, texture)
│   ├── Features.jsx        # 3D feature showcase with video textures
│   ├── Footer.jsx          # Apple-style responsive footer
│   ├── app.jsx             # Main layout component
│   ├── index.css           # Tailwind CSS directives and custom styling
│   └── main.jsx            # React root entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/macbook-pro-showcase.git
   cd macbook-pro-showcase/macbook_gsap_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👏 Acknowledgments

- Inspired by [Apple's](https://www.apple.com) MacBook Pro landing page.
- 3D models and creative assets sourced for educational and portfolio demonstration purposes.
