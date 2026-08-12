# Sarfaraz Patel — Portfolio

A personal portfolio website built with React and Vite, inspired by the original Framer design.

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx / .css      — Navigation bar
│   ├── Hero.jsx / .css        — Hero section with Spline 3D
│   ├── Work.jsx / .css        — Projects and selected work
│   ├── About.jsx / .css       — About me and education
│   ├── Skills.jsx / .css      — Technical skills
│   └── Contact.jsx / .css     — Contact section and links
├── App.jsx
├── main.jsx
└── index.css                  — Global styles and design settings
```

## Design

* Dark background with purple accents
* Clash Grotesk for headings
* Inter for regular text
* Responsive layout for desktop and mobile
* 3D Spline scene in the hero section

## Run the Project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Build

To create a production build:

```bash
npm run build
```

To preview the build locally:

```bash
npm run preview
```

## Notes

* The hero section uses a Spline 3D scene.
* Fonts are loaded from Google Fonts and Fontshare.
* Navigation, email, GitHub, and other links are connected.
* The website is responsive and works across different screen sizes.
