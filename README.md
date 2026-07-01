# Guangdong Yonghua Technology B2B Website

Next.js App Router website framework for a GEO SEO optimized B2B industrial site focused on Type-C female sockets, Type-C connectors, and precision interconnect components.

## Run locally

```bash
npm install
npm run dev
```

## Content files

- `data/products.ts`: local product data
- `data/articles.ts`: local GEO article data with sections, keywords, and FAQ
- `data/solutions.ts`: industry solution mock data
- `data/factory.ts`: factory capability mock data
- `data/home.ts`: legacy homepage mock data, kept for future reference

These files are intentionally separated from page components so they can be replaced later with WordPress, CMS, or API data.

## Main routes

- `/`
- `/products`
- `/products/[slug]`
- `/blog`
- `/blog/[slug]`
- `/solutions`
- `/factory`
- `/about`
- `/contact`

## SEO-oriented structures

- Blog details output Article JSON-LD and FAQPage JSON-LD
- Product details output Product JSON-LD and FAQPage JSON-LD
- Product pages include structured parameter tables, application scenarios, comparison tables, and FAQ
- Contact page is structured as an RFQ page with WhatsApp entry
