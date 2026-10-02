/* ============================================================
   BLOG POST LAYOUT — handles metadata for /blogs/[slug]
   ============================================================ */

import type { Metadata } from "next";
import { blogPosts } from "../../data/blog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Green Filament Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://greenfilament.com/blogs/${post.slug}`,
      siteName: "Green Filament",
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://greenfilament.com/blogs/${post.slug}`,
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}