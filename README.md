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

## Add a note

1. Create `src/content/my-new-topic.md` with Markdown headings (`## Heading`), paragraphs and lists.
2. Add its title, category, description, reading time and slug `my-new-topic` to `src/data/notes.js`.
3. Run `npm run build` to check the new page, then commit and push.

The page appears at `/notes/my-new-topic/` and in the searchable note library. Do not put private student information in this public repository.

## Cloudflare Pages settings

Connect the GitHub repository in Cloudflare Pages, choose the `main` production branch, set build command `npm run build` and output directory `dist`. The default static Astro build requires no Cloudflare adapter. Pushes to `main` then deploy automatically.

Add `aleveldt.com` under Pages → Custom domains once the domain is managed by Cloudflare DNS. Confirm existing Namecheap DNS records, including email records, before changing nameservers. Add `www.aleveldt.com` as a second domain if desired and configure a redirect to the primary domain.
