# IS117 Final Project Portfolio

Welcome to my final project portfolio for IS117. This repository houses a collection of three distinct web development projects, showcased through a central landing page designed with a modern Neumorphism aesthetic.

## Projects Overview

This portfolio demonstrates versatility in web design and development through three unique implementations:

1.  **Portfolio Site**
    *   **Theme**: AI Product Engineer Portfolio.
    *   **Design Style**: **Hero Archetype / Game HUD**.
    *   **Description**: A high-contrast, immersive portfolio featuring a "Mission" narrative, "Arsenal" of services, and a "Deploy" booking system. Includes Calendly integration and Zapier simulation.

2.  **Design Style Site**
    *   **Theme**: Digital Museum Exhibit.
    *   **Design Style**: **Cyberpunk 2077 (Kitsch & Neo-Militarism)**.
    *   **Description**: An interactive museum exploring the contrasting aesthetics of the Cyberpunk genre, featuring glitch effects, neon visuals, and mobile-responsive navigation.

3.  **Client Site**
    *   **Theme**: Lumina Salon.
    *   **Design Style**: **Caregiver Archetype**.
    *   **Description**: A soothing, sustainable beauty salon website designed to build trust. Features a mobile-responsive layout, service showcase, and lead generation forms.

## Recent Updates (December 2025)

### Portfolio Site Implementation
*   **Full Build**: Created the complete "Hero" portfolio from scratch (`docs/portfolio/`).
*   **Integrations**: Linked Calendly for appointment booking and simulated a Zapier webhook for lead capture.
*   **Optimization**: Achieved high Lighthouse scores for Accessibility (100), SEO (100), and Best Practices.
*   **Mobile**: Implemented a stacked, responsive layout for seamless mobile viewing.

### Mobile Responsiveness & UX
*   **Client Site**: Added a smooth slide-out mobile drawer menu and fixed visual glitches (removed gray line).
*   **Design Style Site**: Implemented a custom Cyberpunk-themed hamburger menu with high-contrast focus states.
*   **Global**: Ensured all text wraps correctly on small screens to prevent cut-offs.

### Accessibility & SEO
*   **Audit Fixes**: Addressed Lighthouse audit findings across all sub-projects.
*   **Improvements**: Added `aria-labels`, improved color contrast ratios, defined image dimensions to prevent layout shifts (CLS), and added meta descriptions.

## Landing Page Design

The main entry point (`docs/index.html`) features a **Neumorphism (Soft UI)** design language. Key characteristics include:
*   **Soft Shadows**: Creating depth and a tactile feel.
*   **Monochromatic Color Scheme**: Using a soft gray-blue palette (`#e0e5ec`).
*   **Interactive Elements**: Buttons and cards that appear to be extruded from the background, with realistic pressed states and ripple effects on interaction.

## Getting Started

To run this project locally on your machine:

### Prerequisites
*   [Node.js](https://nodejs.org/) installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd My_website_work
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

Start the local development server using Vite:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
My_website_work/
├── docs/                   # Main source code for the website
│   ├── index.html          # Landing page
│   ├── styles.css          # Neumorphism styles
│   ├── portfolio/          # Portfolio project files
│   ├── design_style/       # Design history project files
│   └── client_site/        # Client business project files
├── In_progress/            # Documentation and planning files
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```