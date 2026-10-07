import { notFound } from "next/navigation";
import { BlogData, getPostBySlug } from "@/Data";
import BlogDetailHeroSec from "@/components/blogDetailHeroSec/blogDetailHeroSec";
import BlogArticle from "@/components/blogArticle/blogArticle";
import RelatedPostsSec from "@/components/relatedPostsSec/relatedPostsSec";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return BlogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: `Blog Not Found | ${SITE_NAME}`, robots: { index: false } };
  }

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

// Converts "Sep 24, 2026" style strings to ISO 8601 for structured data.
// Falls back to the raw string only if parsing somehow fails.
function toISODate(dateString) {
  const parsed = new Date(dateString);
  return Number.isNaN(parsed.getTime()) ? dateString : parsed.toISOString();
}

export default async function BlogDetail({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${SITE_URL}${post.image}`],
    datePublished: toISODate(post.date),
    author: [
      {
        "@type": "Person",
        name: post.author,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <BlogDetailHeroSec blog={post} />
        <BlogArticle blog={post} />
        <RelatedPostsSec blog={post} />
      </main>
    </>
  );
}