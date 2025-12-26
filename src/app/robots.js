export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            }
        ],
        sitemap: "https://conveb3.vercel.app/sitemap.xml"
    };
}
