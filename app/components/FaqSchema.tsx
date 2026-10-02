/* ============================================================
   FAQ SCHEMA (JSON-LD)
   - Reusable component for pages with an FAQ section
   - IMPORTANT: the q/a pairs passed in here must match the
     visible FAQ text on the page exactly, or Google can ignore
     or penalize the rich result
   - Renders as expandable FAQ dropdowns directly in Google
     search results when eligible
   ============================================================ */

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}