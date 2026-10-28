import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Quality Auto",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2ea",
    theme_color: "#1b2f6b",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
