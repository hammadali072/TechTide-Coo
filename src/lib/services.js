import { ServicesData } from "@/Data";

/**
 * Returns all services.
 */
export function getAllServices() {
  return ServicesData;
}

/**
 * Returns a service matching the given slug.
 */
export function getServiceBySlug(slug) {
  return ServicesData.find((service) => service.slug === slug) || null;
}

/**
 * Returns related services for a given service.
 * Uses relatedSlugs array if present, otherwise falls back to same category.
 */
export function getRelatedServices(service) {
  if (!service) return [];

  if (service.relatedSlugs && service.relatedSlugs.length > 0) {
    const related = service.relatedSlugs
      .map((slug) => ServicesData.find((s) => s.slug === slug))
      .filter(Boolean);
    if (related.length > 0) return related;
  }

  // Fallback: other services in same or other category
  return ServicesData.filter((s) => s.slug !== service.slug).slice(0, 3);
}

/**
 * Returns unique categories with counts.
 * Format: [{ name: "All", count: total }, { name: "Development", count: 3 }, ...]
 */
export function getServiceCategories() {
  const categories = ["All"];
  const counts = { All: ServicesData.length };

  ServicesData.forEach((s) => {
    if (!categories.includes(s.category)) {
      categories.push(s.category);
    }
    counts[s.category] = (counts[s.category] || 0) + 1;
  });

  return categories.map((cat) => ({
    name: cat,
    count: counts[cat] || 0,
  }));
}
