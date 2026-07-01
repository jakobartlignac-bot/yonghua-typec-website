import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { solutions } from "@/data/solutions";

const lastModified = new Date("2026-07-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/factory`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.75 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes, ...solutionRoutes];
}
