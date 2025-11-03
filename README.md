# Ontario Tech University CS Wiki Page

**A lightweight, static website providing information, guidance, and resources for the Ontario Tech University Computer Science Department.**

### Core Principles

1. **Lightweight** – Fast loading and minimal dependencies

2. **Easy to Modify** – Content updates require no complex setup

3. **Easy to Maintain** – Simple structure with minimal upkeep

This site is built with [Next.JS](https://nextjs.org/docs) as the web framework and [Tailwind](https://tailwindcss.com/docs) as the CSS Framework. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once running, open [http://localhost:3000](http://localhost:3000) in your browser to view the site

## File and Location Structure

Creating a new page or blog post can be done simply by adding an `.mdx` file inside the `src/pages/content` directory.

**For example:**
* Adding a `contact.mdx` file in `src/pages/content` will create a page accessible at `http://localhost:3000/contact`.
* Adding a `information.mdx` file in `src/pages/content/contact` will create a page accessible at `http://localhost:3000/contact/information`.

The MDX files use the GitHub Flavoured Markdown (GFM). Example of this format can be viewed at `printing/linux` or `printing/windows`

```
src
|-- app
|-- components                      <-- Global components
|       `-- navbar
|              `-- linklists.tsx    <-- Modify this file to add links to the navbar
|-- pages
|     `-- content                   <-- Add new pages/blog posts here
|            |-- home.mdx           <-- Default landing page
|            `-- printing
|                   `-- linux.mdx   <-- Accessible via "localhost:3000/printing/linux"
|-- [..slug.tsx]                    <-- Handles dynamic static page generation
`-- 404.tsx                         <-- Custom 404 page
```

## Maintainance

This project is intentionally minimal to simplify maintenance. To keep dependencies up to date, you can run:
```
npm update
```

The site relies only on essential packages that improve stability and reduce load times.
Notable dependencies include:

* **remarkGFM**: Adds support for GitHub Flavored Markdown
* **gray-matter**: Parses front-matter from a string or file
* **sharp**: Optimizes and resizes images for web performance
* **glob**: Allows finding files in the filesystem using glob patterns

With all these packages and lightweight design, the current site uses only __3 MB__ to __5 MB__ of memory.

## Containerization

Thanks to Next.js, containerizing this site is straightforward. The included Dockerfile is based on the official [Next.js Docker template](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile).