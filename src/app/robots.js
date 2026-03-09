export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/admin/"], // block unnecessary paths
            }
        ],
        sitemap: "https://www.conveb.com/sitemap.xml",
        host: "https://www.conveb.com" // ← ADD canonical host
    };
}