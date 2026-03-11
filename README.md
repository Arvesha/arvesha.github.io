# Arvesha Intelligence — arvesha.github.io

> **Engineering the Future of Intelligence**

The official website for **Arvesha Intelligence**, a deep-technology AI company building advanced artificial intelligence systems, autonomous agents, and scalable AI platforms.

🌐 **Live at:** [https://arveshaintelligence.com](https://arveshaintelligence.com)

---

## Project Purpose

Arvesha Intelligence develops:

- **AI Platforms** — End-to-end infrastructure for deploying intelligent applications
- **Autonomous AI Agents** — Self-directed agents capable of planning and executing complex tasks
- **Healthcare Intelligence** — AI systems for diagnostics and clinical decision support
- **RAG Systems** — Retrieval-Augmented Generation pipelines for grounded AI responses
- **AI Infrastructure** — Cloud-native infrastructure for high-throughput model serving

This repository hosts the company's public-facing website as a static site via **GitHub Pages**.

---

## Repository Structure

```
arvesha.github.io/
│
├── index.html        ← Main landing page (all sections)
├── style.css         ← Stylesheet (futuristic AI-startup aesthetic)
├── script.js         ← Interactive effects & animations
├── CNAME             ← Custom domain configuration
├── README.md         ← This file
│
└── assets/
    ├── logo.svg      ← Company logo (SVG)
    └── hero-bg.svg   ← Hero background (SVG)
```

---

## How GitHub Pages Works

GitHub Pages is a free static site hosting service built into GitHub. When enabled, it automatically serves files from a designated branch (typically `main`) as a website.

1. The repository must be named `<username>.github.io` for user/organisation pages — this enables GitHub Pages automatically.
2. GitHub Pages serves `index.html` at the root URL by default.
3. Every `git push` to `main` triggers an automatic redeployment (usually within 1–2 minutes).
4. No build step or server is required — HTML, CSS, and JavaScript are served directly.

---

## How the Custom Domain Works

The file `CNAME` in the repository root contains:

```
arveshaintelligence.com
```

This tells GitHub Pages to respond to requests for `arveshaintelligence.com`.

### DNS Configuration (at your domain registrar)

Add the following DNS records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | arvesha.github.io.     |

After DNS propagation (up to 48 hours), the site will be accessible at `https://arveshaintelligence.com`. GitHub Pages automatically provisions a free TLS certificate via Let's Encrypt.

---

## How to Deploy

### Prerequisites
- A GitHub account
- The repository must be `arvesha/arvesha.github.io`

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/arvesha/arvesha.github.io.git
   cd arvesha.github.io
   ```

2. **Make changes locally** — edit `index.html`, `style.css`, or `script.js`.

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

4. **GitHub Pages deploys automatically** — visit your repository's **Settings → Pages** to monitor deployment status.

5. **Verify the live site** at [https://arveshaintelligence.com](https://arveshaintelligence.com).

### Enabling GitHub Pages (first-time setup)
1. Go to the repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Enable **Enforce HTTPS** once the custom domain is verified

---

## Local Development

Open `index.html` directly in a browser, or use a simple local server:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Design

| Property | Value |
|----------|-------|
| Primary Background | `#0f172a` |
| Accent Color | `#6366f1` |
| Text | `#ffffff` |
| Typography | Inter + Space Grotesk |
| Style | Futuristic minimal AI-startup |

---

## Founder

**Arvind Sisodiya** — Founder, Arvesha Intelligence

AI engineer focused on building scalable AI platforms, autonomous agents, and real-world AI systems.

---

© 2026 Arvesha Intelligence. Founded by Arvind Sisodiya.

