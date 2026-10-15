import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://econovare.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: "https://econovare.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://econovare.com/offerings", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://econovare.com/geothermal", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://econovare.com/connect", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}