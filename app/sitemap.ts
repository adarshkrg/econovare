import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: "https://greenfilament.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: "https://greenfilament.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://greenfilament.com/connect", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://greenfilament.com/projects", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://greenfilament.com/schemes", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://greenfilament.com/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Product pages
    { url: "https://greenfilament.com/rooftop-solar", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/solar-street-lighting", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/solar-water-pump", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/solar-cooking", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://greenfilament.com/solar-high-mast-light", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://greenfilament.com/solar-roi-calculator", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://greenfilament.com/solar-sizing-calculator", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Blog listing + posts
    { url: "https://greenfilament.com/blogs", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: "https://greenfilament.com/blogs/solar-street-lights-rural-india", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/rooftop-solar-vs-electricity-bills-2026", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/solar-water-systems-rural-villages", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/future-of-solar-cooking-battery-free", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/why-solar-street-light-stops-working-at-night", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/3kw-solar-price-odisha-after-subsidy-2026", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/tpcodl-net-metering-process-2026", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/almm-cell-mandate-2026-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/monsoon-solar-generation-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/solar-didi-programme-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/solar-cooking-anganwadis-schools-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/solar-power-schools-colleges-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://greenfilament.com/blogs/odisha-district-rooftop-solar-ganjam-baleshwar", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },



    // Location pages
    { url: "https://greenfilament.com/solar-company-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/rooftop-solar-bhubaneswar", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/rooftop-solar-cuttack", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/pm-surya-ghar-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://greenfilament.com/pm-kusum-odisha", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Legal
    { url: "https://greenfilament.com/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://greenfilament.com/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}