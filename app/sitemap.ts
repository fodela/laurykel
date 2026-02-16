import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://laurykel.pages.dev";
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/#story`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#details`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#rsvp`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#registry`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}
