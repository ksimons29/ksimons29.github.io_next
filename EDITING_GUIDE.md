# How to Edit Your Portfolio Site

This guide explains how to update content on your Astro portfolio site.

---

## Quick Reference

| What to Change | File to Edit |
|----------------|--------------|
| All text content | `src/content/profile.yml` |
| Site structure/layout | `src/pages/index.astro` |
| Styling/colors | `src/styles/global.css` |
| Images | `public/` folder |

---

## 1. Editing Content (`src/content/profile.yml`)

All your site content lives in one YAML file. Here's each section:

### Meta (Site-wide settings)
```yaml
meta:
  name: "Your Name"
  title: "Your Title"
  email: "your@email.com"
  linkedin: "your-linkedin-username"    # Just the username, not full URL
  github: "your-github-username"
  whatsapp: "+351123456789"
  image: "/profile.jpg"                 # Must exist in public/ folder
  siteTitle: "Browser Tab Title"
  description: "SEO description"
```

### About Section
```yaml
about:
  intro: |
    Your intro text here. Use **bold** for emphasis.
    Multiple lines are supported.
  highlights:
    - icon: "/Discovery.svg"           # SVG in public/ folder
      title: "Card Title"
      description: "Card description text"
    - icon: "/Data.svg"
      title: "Another Card"
      description: "Another description"
```

**To add/remove highlight cards:** Just add or delete items from the `highlights` list.

### Current Work
```yaml
currentWork:
  - project: "Project Name"
    type: "Project Type | Context"
    duration: "2025 - Present"
    link: "github.com/yourrepo"        # Optional
    quote: "One-line description"       # Optional
    description: |
      Longer description here.
    learnings:                          # Optional bullet list
      - "Learning point 1"
      - "Learning point 2"
    note: "Footer note"                 # Optional
```

### Services (Consulting)
```yaml
services:
  intro: "Intro paragraph"
  items:
    - title: "Service Name"
      description: "What you offer"
      engagement: "Engagement type"
  cta:
    email: "your@email.com"
    calendly: "https://calendly.com/your-link"  # Optional
```

### Selected Outcomes (Case Studies)
```yaml
outcomes:
  - title: "Project Title"
    subtitle: "Type | Industry"
    date: "2024"
    challenge: "The problem"
    actions:
      - "Action 1"
      - "Action 2"
    impact:
      - "Result 1"
      - "Result 2"
```

### Experience
```yaml
experience:
  - company: "Company Name"
    role: "Your Role"
    dates: "2020 - 2024"
    link: "https://company.com"         # Optional
    summary: "Brief description"
    projects:                           # Optional - for consulting roles
      - client: "Client Name"
        years: "2022-2024"
        role: "Role at client"
        description: "What you did"
```

### Skills
```yaml
skills:
  - category: "Category Name"
    emoji: "🎯"
    items:
      - "Skill 1"
      - "Skill 2"
```

### Education
```yaml
education:
  - institution: "School Name"
    program: "Degree/Program"
    date: "2025"
    description: "Details"
```

### Beyond Work
```yaml
beyondWork:
  - "Paragraph 1"
  - "Paragraph 2"
```

### Languages
```yaml
languages:
  - name: "English"
    level: "Native"
    flag: "🇬🇧"
    percentage: 100
```

---

## 2. Adding/Removing Sections

### To remove a section entirely:

1. Delete the section from `profile.yml`
2. Remove the corresponding block from `src/pages/index.astro`

**Example:** To remove "Beyond Work" section:
- Delete `beyondWork:` block from `profile.yml`
- Delete this from `index.astro`:
```astro
<!-- Beyond Work -->
<Section title="Beyond Work" id="beyond-work">
  ...
</Section>
```

### To add a new section:

1. Add data to `profile.yml`
2. Add rendering code to `index.astro`

---

## 3. Adding Images

1. Place image in `public/` folder
2. Reference as `/filename.ext` in profile.yml

**For SVG icons:** Place in `public/` and reference in highlights:
```yaml
highlights:
  - icon: "/MyIcon.svg"
```

**Important:** SVG colors must be hardcoded (e.g., `stroke="#2c4a6e"`), not `currentColor`.

---

## 4. Styling (`src/styles/global.css`)

### Color tokens (lines 10-30):
```css
:root {
  --ink: #1f1f1f;           /* Main text */
  --paper: #f8f6f3;         /* Background */
  --navy: #2c4a6e;          /* Primary accent */
  --terracotta: #d4a373;    /* Secondary accent */
  --gold: #c9a227;          /* Highlight accent */
}
```

### To change colors site-wide:
Just update the CSS variables in `:root`. All components use these tokens.

---

## 5. Deploying Changes

After editing, commit and push:
```bash
git add -A
git commit -m "Update content"
git push
```

GitHub Actions will automatically build and deploy.

---

## Common Tasks

| Task | How To |
|------|--------|
| Change profile photo | Replace `public/profile.jpg` |
| Edit About text | Edit `about.intro` in profile.yml |
| Add a highlight card | Add item to `about.highlights` list |
| Remove a section | Delete from profile.yml + index.astro |
| Change accent color | Edit `--navy` in global.css |
| Add new SVG icon | Add to `public/`, reference in profile.yml |

---

## File Structure

```
src/
├── content/
│   └── profile.yml      # All content lives here
├── pages/
│   └── index.astro      # Page structure
├── components/          # Reusable UI components
├── styles/
│   └── global.css       # All styling
public/
├── profile.jpg          # Your photo
├── Discovery.svg        # Highlight icons
├── Data.svg
├── Collaboration.svg
└── favicon.svg
```
