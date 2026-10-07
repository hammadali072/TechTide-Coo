import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots() {
    const baseUrl = SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}