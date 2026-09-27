# A-level DT

A clean, static Astro website for A-level Design & Technology notes. Editing and hosting can be free on GitHub and Cloudflare Pages, subject to their current free-tier terms.

## Work on either computer

Install [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) on Windows and Mac. Clone the same GitHub repository on each device. In the project folder run:

```sh
npm install
npm run dev
```

Open the local address printed by Astro. To save and share an edit between computers:

```sh
git pull
git add .
git commit -m "Update notes"
git push
```

Before working on the other computer, run `git pull`. You can also edit Markdown files directly in GitHub's web editor.

## Add notes to a subtopic

Every subtopic in `src/data/syllabus.js` has its own page. For example, `3.2.2 → Styles and movements` lives at `/notes/3.2.2/styles-and-movements/`.

To put your written notes directly on that page, create the matching Markdown file:

```text
src/content/subtopics/3.2.2/styles-and-movements.md
```

Write ordinary Markdown, starting with a `##` heading. The page builds automatically; you do not need to create a new Astro page or edit the navigation. The pattern is `src/content/subtopics/<topic-code>/<subtopic-slug>.md`. Open the subtopic page to copy its URL slug, or see the matching title in `src/data/syllabus.js`.

The existing Arts & Crafts and Bauhaus articles appear as links under Styles and movements. Materials & properties appears under Classification of materials. If you want to add another standalone article, create `src/content/<slug>.md`, add an item to `src/data/notes.js`, and set its `topic` and `subtopic` to match the syllabus. The article will appear on its assigned subtopic page.

Run `npm run build`, then commit and push. Cloudflare publishes the update automatically. You can also edit Markdown from GitHub on either computer. Do not include private student information in this public repository.

## Cloudflare Pages settings

Connect the GitHub repository in Cloudflare Pages, choose the `main` production branch, set build command `npm run build` and output directory `dist`. The default static Astro build requires no Cloudflare adapter. Pushes to `main` then deploy automatically.

Add `aleveldt.com` under Pages → Custom domains once the domain is managed by Cloudflare DNS. Confirm existing Namecheap DNS records, including email records, before changing nameservers. Add `www.aleveldt.com` as a second domain if desired and configure a redirect to the primary domain.
