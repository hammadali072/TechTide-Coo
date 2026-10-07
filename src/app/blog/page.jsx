import { BlogData } from "@/Data";
import HeroSec2 from "@/components/heroSec/heroSec2";
import BlogListSec from "@/components/blogListSec/blogListSec";

// export const metadata = {
//   title: "Blog | FidayinCorporate",
//   description:"Insights on web development, AI workflow automation, SaaS engineering and growth strategy from the TechTide team.",
//   openGraph: {
//     title: "Blog | FidayinCorporate",
//     description:
//       "Insights on web development, AI workflow automation, SaaS engineering and growth strategy from the TechTide team.",
//     images: ["/assets/SEO.webp"], // default fallback image
//   },
// };

export const metadata = {
  title: "About Us | FidayinCorporate",
  description: "Insights on web development, AI workflow automation, SaaS engineering and growth strategy from the TechTide team.",
  alternates: { canonical: "/blog" },
};

export default function BlogListingPage() {
  // Sort posts by date descending
  const sortedPosts = [...BlogData].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="bg-black pt-20">
      <HeroSec2
        pill="Insights & Articles"
        title="Ideas, Guides & Engineering Insights"
        accentWord="Engineering Insights"
        description="Explore our deep dives on web development, AI workflow automation, SaaS engineering and growth strategy."
        pb="pb-24"
      />
      <BlogListSec posts={sortedPosts} />
    </main>
  );
}
