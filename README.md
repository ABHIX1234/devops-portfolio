# 🚀 Futuristic DevOps Portfolio

A premium, high-converting, and fully responsive DevOps portfolio website built with React, TypeScript, and Tailwind CSS. Designed to highlight measurable impact, technical expertise, and infrastructure-focused achievements.


## ✨ Features

- **Cinematic Experience**: Smooth scroll-based motion and entrance animations using Framer Motion.
- **Futuristic UI**: Dark mode default with glassmorphism, neon accents, and a soft gradient mesh background.
- **Impact-Driven**: Dedicated sections for measurable achievements with animated counters.
- **Interactive Timeline**: Expandable experience cards to showcase detailed project contributions.
- **Responsive Design**: Optimized for all devices, from mobile to ultra-wide monitors.
- **CI/CD Focused**: Design elements inspired by Kubernetes, Docker, and automation workflows.
- **Direct Resume Download**: Integrated Google Drive link for instant resume access.
- **Contact Integration**: One-click email, phone, and social media connectivity.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd devops-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Customization

### 1. Resume Data
All content is driven by a single JSON file. Update your details in:
`src/data/resume.json`

### 2. Profile Image
Update your photo in `src/components/HeroSection.tsx` by replacing the `src` URL in the `<img>` tag (around line 81).

### 3. Resume Download
Update the Google Drive link in `src/components/HeroSection.tsx` (around line 56) to point to your hosted resume.

## 📦 Deployment

This project is optimized for deployment on platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your preferred hosting provider.

## 📄 License

This project is licensed under the Apache-2.0 License. See the file headers for details.

---

Built with ❤️ by [Avnish Ranjan](mailto:avnishranjan7@gmail.com)
