# Personal Portfolio Website - 2nd-Year B.Tech CSE Student

A modern, high-performance, and responsive personal portfolio website engineered exclusively with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed to present a 2nd-year Computer Science & Engineering undergraduate as an ambitious, disciplined, and motivated software developer ready for internships and technical roles.

---

## 🚀 Key Highlights & Features

- **Pure Web Standards**: Zero external frameworks or heavy libraries (No React, No Bootstrap, No Tailwind). Instant loading, 100% offline capable.
- **Aesthetic Dark Theme**: Dark slate palette (`#0A0E17`) with subtle cyan-to-indigo gradients, glassmorphism cards, and refined micro-animations.
- **Dark / Light Mode Toggle**: Smooth theme switching with user preference saved in `localStorage`.
- **Interactive Developer Terminal**: macOS-styled code card with syntax highlighting and simulated candidate profile.
- **Hero Typing Animation**: Realistic typing effect cycling through technical roles with blinking cursor.
- **Responsive Navigation**:
  - Sticky header with glassmorphism backdrop blur on scroll.
  - Active section scrollspy tracking.
  - Accessible mobile hamburger menu drawer with keyboard navigation support (Escape key).
- **Projects Showcase & Category Filter**:
  - Filterable by `All`, `Web Development`, and `Software / Core`.
  - Crisp vector SVG mockups (no broken image URLs).
  - Quick action links for GitHub code and Live Demo.
- **Skills Matrix with Animated Progress Bars**:
  - Structured into Programming, Web Development, Developer Tools, and Core CS Fundamentals.
  - Progress bars smoothly animate when scrolled into view.
- **Vertical Education Timeline**: Clean milestone tree with pulsing glowing nodes.
- **Transparent Experience Section**: Tailored specifically for a 2nd-year undergraduate seeking internships without falsely claiming prior industry experience.
- **Accessible Contact Form**: Client-side field validation with friendly status feedback and direct `mailto:` integration.
- **SEO & Performance Ready**: Semantic tags (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`), Open Graph meta tags, and inline SVG favicon.

---

## 📁 File Structure

```
portfolio/
├── index.html                  # Main semantic HTML5 document with all sections & EDIT HERE markers
├── css/
│   └── style.css               # Complete stylesheet with CSS variables, dark/light themes, animations
├── js/
│   └── script.js               # Vanilla JS: Theme toggle, typing effect, scrollspy, filter, validation
├── assets/
│   ├── images/                 # High-resolution vector SVG project illustrations
│   │   ├── project-portfolio.svg
│   │   ├── project-student.svg
│   │   ├── project-todo.svg
│   │   └── project-weather.svg
│   └── icons/                  # Vector SVG icons (GitHub, LinkedIn, Mail)
└── README.md                   # Documentation, customization guide & career advice
```

---

## ✏️ Where to Add Your Personal Information

Every customizable field in `index.html` is marked with `<!-- EDIT HERE -->` comments. Simply open `index.html` in VS Code or your preferred text editor and search for `EDIT HERE`.

Here is a quick reference table:

| Section | Line / Element | What to Replace |
| :--- | :--- | :--- |
| **SEO & Meta** | `<title>`, `<meta name="author">` | Replace `[YOUR NAME]` with your full name. |
| **Navbar Brand** | `<a class="nav-brand">` | Replace `[YOUR NAME]` with your name or dev handle. |
| **Hero Name & Bio** | `<h1 class="hero-name">`, `<p class="hero-bio">` | Put your name and a brief custom intro. |
| **Hero Terminal** | `.terminal-card` | Update `name`, favorite languages, or custom greeting. |
| **Social Links** | Hero & Footer `<a>` tags | Replace placeholder URLs with your actual GitHub, LinkedIn, and email address. |
| **About Section** | `.about-text`, `.stats-grid` | Update with your personal journey, college experience, and stats (e.g. 5+ projects, 10+ techs). |
| **Skills** | `.skill-item` | Adjust skill levels (`data-progress="80"`) to match your comfort level. |
| **Projects** | `.project-card` | Replace project titles, descriptions, GitHub repo links, and demo links with your own work. |
| **Education** | `.timeline-wrapper` | Add your actual College / University name, expected graduation year, CGPA, and 10th/12th school names. |
| **Achievements** | `.achievement-card` | Add your actual LeetCode/HackerRank count, completed courses, hackathons, or workshops. |
| **Contact Info** | `.contact-info-list` | Replace email, phone number, location, and social links. |
| **Resume Link** | `#resume-download-btn` | Place your resume PDF in `assets/` (e.g. `assets/Resume_[Your_Name].pdf`) and link it to the button. |

---

## 💻 How to Run the Website Locally

### Method 1: Direct File Opening (No Installation Needed)
1. Double-click on `index.html` directly in your file explorer, OR
2. Right-click `index.html` $\rightarrow$ **Open with** $\rightarrow$ Google Chrome / Microsoft Edge / Mozilla Firefox.

### Method 2: Using VS Code Live Server (Recommended)
1. Open the `portfolio/` folder in Visual Studio Code.
2. Install the **Live Server** extension by *Ritwick Dey*.
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The website will open at `http://127.0.0.1:5500/index.html` with automatic hot reloading when you save changes.

### Method 3: Using Python Built-In HTTP Server
Open your terminal / command prompt in the `portfolio/` directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

---

## 🌟 Suggestions to Make Your Portfolio Even Stronger

To maximize your chances when applying for software development internships:

1. **Deploy to GitHub Pages (Free & 2 Minutes)**:
   - Create a repository named `portfolio` (or `<your-username>.github.io`) on GitHub.
   - Push your code to the `main` branch.
   - In repository **Settings** $\rightarrow$ **Pages** $\rightarrow$ select `Deploy from a branch` $\rightarrow$ branch `main` $\rightarrow$ Save.
   - You will receive a live URL (`https://<username>.github.io/portfolio`) to put on your resume!

2. **Add Proof of Work in Project Descriptions**:
   - Instead of just saying *"Built a Student Management System"*, write: *"Engineered a C++ console application handling 1,000+ student records with binary search trees, achieving O(log N) lookup time and persistent file serialization."*
   - Mention edge cases handled, bugs fixed, or unit tests written.

3. **Showcase Problem Solving Profiles**:
   - Embed your LeetCode, Codeforces, HackerRank, or GeeksforGeeks profile badge or link directly in the Achievements section.
   - For 2nd-year CSE students, having 100+ solved problems on LeetCode with good DSA grasp is one of the strongest signals for recruiters.

4. **Keep GitHub Repositories Well Documented**:
   - Ensure every project card link points to a repository with a neat `README.md` containing screenshots, installation instructions, and tech stack details.

5. **Connect the Contact Form to a Free Backend Service**:
   - When ready for automated email delivery without `mailto:`, you can simply set the `<form action="...">` to [Formspree](https://formspree.io/) or integrate [EmailJS](https://www.emailjs.com/) with 4 lines of JavaScript.
