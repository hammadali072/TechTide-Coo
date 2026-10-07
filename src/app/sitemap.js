import { getAllServices } from "@/lib/services";
import { BlogData } from "@/Data";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;

export const dynamic = "force-static";

export default function sitemap() {
    const staticRoutes = [
        "", "about", "services", "blog", "contact",
        "privacy-policy", "terms-of-service", "cookie-policy",
    ].map((path) => ({
        url: `${BASE_URL}/${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
    }));

    const serviceRoutes = getAllServices().map((s) => ({
        url: `${BASE_URL}/services/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const blogRoutes = BlogData.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}