# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite to showcase skills, experience, projects, and certificates.

## � Live Demo

Visit the live portfolio: [https://rakhirani-portfolio.vercel.app/](https://rakhirani-portfolio.vercel.app/)

## �📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Routes](#available-routes)
- [Development](#development)
- [Build](#build)
- [Project Organization](#project-organization)

## ✨ Features

- **Responsive Design**: Mobile-friendly layout that works across all devices
- **Multiple Pages**: Showcase different aspects of your professional profile
  - Home - Landing page
  - About - Personal information and bio
  - Experience - Work history and professional background
  - Certificates - Educational and professional certifications
  - Hackathons - Hackathon participation and achievements
  - Projects - Portfolio of work and personal projects
  - Skills - Technical skills and competencies
- **Fast Performance**: Built with Vite for instant HMR and optimized builds
- **Modern Stack**: React with React Router for seamless navigation
- **ESLint Configuration**: Code quality standards included

## 🛠 Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: CSS
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
Portfolio/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx        # Main application component with routing
│   │   ├── main.jsx       # Entry point
│   │   ├── index.css      # Global styles
│   │   ├── components/    # Reusable components
│   │   │   ├── Header.jsx
│   │   │   └── PageShell.jsx
│   │   ├── pages/         # Route pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Hackathons.jsx
│   │   │   ├── Project.jsx
│   │   │   └── Skill.jsx
│   │   └── assets/        # Static assets
│   │       ├── Certificates/
│   │       ├── Experience/
│   │       └── projects/
│   ├── public/            # Public static files
│   ├── package.json       # Project dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── eslint.config.js   # ESLint configuration
│   └── index.html         # HTML entry point
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd d:\SelfLearning\Portfolio
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The development server typically runs on `http://localhost:5173`
   - Check terminal output for the exact URL

## 🗺 Available Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page and introduction |
| `/about` | About | Personal information and bio |
| `/experience` | Experience | Work history and professional background |
| `/certificates` | Certificates | Certifications and credentials |
| `/hackathons` | Hackathons | Hackathon participations |
| `/project` | Projects | Portfolio projects showcase |
| `/skill` | Skills | Technical skills and competencies |

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

### Making Changes

1. **Update Page Content**: Edit files in `src/pages/` directory
2. **Modify Styles**: Update `src/index.css` or create component-specific styles
3. **Add Assets**: Place images and files in `src/assets/` with appropriate subdirectories
4. **Enhance Components**: Create new components in `src/components/` and import in pages

## 🏗 Build

To create a production-ready build:

```bash
npm run build
```

This generates an optimized build in the `dist/` directory ready for deployment.

## 📝 Notes

- The Header component is included on all pages via `PageShell.jsx`
- Use React Router's `<Route>` component to add new pages
- Keep assets organized in subdirectories under `src/assets/`
- Ensure responsive design by testing on mobile devices

## 📄 License

This project is personal and free to use.

---

**Last Updated**: 2026-06-24
