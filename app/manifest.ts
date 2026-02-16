import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Delali & Laura — Wedding",
        short_name: "Delali & Laura",
        description:
            "Wedding of Delali Dogbevi & Laura Bosompem — March 14, 2026",
        start_url: "/",
        display: "standalone",
        background_color: "#0a1628",
        theme_color: "#c8a951",
    };
}
