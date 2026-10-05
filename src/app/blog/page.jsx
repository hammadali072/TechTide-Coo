import { BlogData } from "@/Data";
import BlogHeroSec from "@/components/blogHeroSec/blogHeroSec";
import BlogListSec from "@/components/blogListSec/blogListSec";

export const metadata = {
  title: "Blog | TechTide Corporate LLP",
  description:
    "Insights on web development, AI workflow automation, SaaS engineering and growth strategy from the TechTide team.",
  openGraph: {
    title: "Blog | TechTide Corporate LLP",
    description:
      "Insights on web development, AI workflow automation, SaaS engineering and growth strategy from the TechTide team.",
    images: ["/assets/SEO.webp"], // default fallback image
  },
};

export default function BlogListingPage() {
  // Sort posts by date descending
  const sortedPosts = [...BlogData].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="bg-black pt-20">
      <BlogHeroSec />
      <BlogListSec posts={sortedPosts} />
    </main>
  );
}
