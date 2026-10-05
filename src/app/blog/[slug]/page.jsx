import { notFound } from "next/navigation";
import { BlogData, getPostBySlug } from "@/Data";
import BlogDetailHeroSec from "@/components/blogDetailHeroSec/blogDetailHeroSec";
import BlogArticle from "@/components/blogArticle/blogArticle";
import ReadingProgress from "@/components/blogArticle/readingProgress";
import RelatedPostsSec from "@/components/relatedPostsSec/relatedPostsSec";

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
    return { title: "Blog Not Found" };
  }

  return {
    title: `${post.title} | TechTide Corporate LLP`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
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
    image: [post.image],
    datePublished: post.date, // In a real app, this should be ISO format
    author: [{
      "@type": "Person",
      name: post.author,
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <main>
        <BlogDetailHeroSec blog={post} />
        <BlogArticle blog={post} />
        <RelatedPostsSec blog={post} />
      </main>
    </>
  );
}
