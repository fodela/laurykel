import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Delali & Laura — Wedding Celebration",
        short_name: "Delali & Laura",
        description:
            "Wedding celebration of Delali Dogbevi & Laura Bosompem — March 14, 2026 in Obuasi, Ghana. Traditional ceremony, white wedding & thanksgiving.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait-primary",
        background_color: "#0a1628",
        theme_color: "#c8a951",
        categories: ["lifestyle", "social"],
        lang: "en",
        dir: "ltr",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
