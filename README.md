# CS601 - Term Project: My Portfolio

## 📄 Project Description

This is my **Personal Portfolio Website** created as the **Term Project** for CS601 – Web Application Development.  
The website is built with **React + Vite + TypeScript**, and features a dynamic, responsive design showcasing my professional background, skills, and projects.

The project uses:

- Dynamic JSON data for Projects, Skills, Gallery, Resume  
- Responsive layout with CSS + animations using Framer Motion  
- Contact form with Geolocation and Leaflet map  
- Responsive mobile menu (hamburger navigation)  
- GitHub Pages deployment

---

## 📁 Project Structure

```plaintext
/CS601_TermProject_HernandezPena
  my-portfolio/
    public/
      assets/                # Contains all product detail images used in ProductDetail pages
      404-error.png          # Error image, used when no page is reached
      my-logo.png            # My logo image, shown in the header
      gallery.json           # JSON file containing all gallery images (festivals, family, trips)
      projects.json          # JSON file containing project data (pages links, name, images)
      resume.json            # JSON file containing data from my prior jobs (company name, logo, achievements)
      skills.json            # JSON file containing my current technical and soft skills
    src/
      components/
        Footer.tsx           # Persistent footer for site info and navigation links
        Header.tsx           # Top header with store logo and main title
        NavBar.tsx           # Top navigation bar to navigate throught pages
      pages/
        Biography.tsx        # Displays my photo and an about me message
        Contact.tsx          # Form with different inputs (textbox, input bar, geolocation, and submit button).
        Gallery.tsx          # Fetches gallery.json and displays some animated photos
        Home.tsx             # Displays a welcome message
        NoPage.tsx           # Displays 404 error
        Projects.tsx         # Fetches projects.json and displays 2 projects (CS601 - Assigments 2 and 6)
        Resume.tsx           # Fetches resume.json and displays highlights from my prior jobs
        Skills.tsx           # Fetches skills.json and displays my current technical and soft skills
      styles/
        App.css              # App-wide CSS styles including layout, responsiveness, and visual effects
    App.tsx                  # Root React component: includes layout, routing, and main component mounting
    index.css                # Additional global CSS
    main.tsx                 # Entry point: initializes the app and wraps it with BrowserRouter
    vite-env.d.ts
  .gitignore                 # Node and Vite ignore settings
  eslint.config.js           # ESLint configuration for code linting
  index.html                 # Main HTML entry point, includes favicon and #root
  package-lock.json          # Dependency lock file
  package.json               # Project manifest and scripts
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.js             # Vite configuration
README.md                    # This documentation file
```

---

## 🎥 Live Site

👉 [**View on GitHub Pages**](https://joelhdzp.github.io/CS601_TermProject_HernandezPena/)

---

## 🔏 GitHub Repository

👉 [**GitHub Repo**](https://github.com/joelhdzp/CS601_TermProject_HernandezPena/tree/main)

---

## 👨‍🏫 Presentation

👉 [**YouTube Video**](https://youtu.be/6FvabiFVxb8)

---

## 🖥️ Page Highlights

**Home.tsx**  
✅ Animated title and welcome message  
✅ Motivational personal quote  
✅ Responsive design

**Biography.tsx**  
✅ Personal biography section  
✅ Photo and quote displayed with responsive flex layout

**Resume.tsx**  
✅ Dynamic JSON loading for Resume data  
✅ Displays professional experience and education  
✅ Styled timeline layout

**Skills.tsx**  
✅ Dynamic JSON loading for Skills data  
✅ Animated skill circles using Framer Motion  
✅ Icons using React Icons  
✅ Responsive grid

**Projects.tsx**  
✅ Dynamic JSON loading for Projects data  
✅ Interactive project cards  
✅ Embedded project iframe preview  
✅ External project links

**Gallery.tsx**  
✅ Dynamic JSON loading for Gallery data  
✅ Responsive image grid by category  
✅ Animated image hover  
✅ Scroll animations

**Contact.tsx**  
✅ Contact form with validation  
✅ Auto-detect geolocation (HTML5 Geolocation API)  
✅ Leaflet map display  
✅ Submits to FormSubmit endpoint

**NoPage.tsx**  
✅ 404 error page with image  
✅ Styled and animated fallback page
✅ Go back Home button

**NavBar.tsx**  
✅ Responsive hamburger menu (CSS + React state)  
✅ Animated menu transitions  
✅ Auto-close on link click

---

## ✨ Key Features

- 📚 8 main content pages  
- 📍 Dynamic data loaded from JSON (Projects, Skills, Gallery, Resume)  
- 📱 Fully responsive design (CSS Media Queries + Flex/Grid)  
- 🎨 Animations with Framer Motion  
- 🌍 Geolocation + Leaflet Map on Contact page  
- 🍔 Responsive Hamburger menu (mobile friendly)  
- 🐈‍⬛ GitHub Pages deployment

---

## 🛠️ Technologies Used

- React + Vite + TypeScript  
- CSS3 + Flexbox + Grid  
- Framer Motion  
- React Icons  
- Leaflet JS  
- HTML5 APIs: Geolocation  
- GitHub Pages for deployment

---

## 💾 Inventory Data

Located in `public/(gallery.json, projects.json, resume.json, skills.json)` and includes:

**Example entry:**

```json
{ 
  "id": "m1", 
  "group": "Music Festivals", 
  "image": "assets/music1.jpg", 
  "alt": "Music Festival 1" 
}
```

---

## 🚀 How to Run Locally

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### 1. Clone the repository

```bash
git clone https://github.com/joelhdzp/CS601_HW6_HernandezPena.git
```

### 2. Install dependencies

```bash
cd CS601_HW6_HernandezPena/my-portfolio
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 👨‍💻 Author
**Joel Hernandez Pena**  
MET CS601 – Web Application Development  
Boston University
