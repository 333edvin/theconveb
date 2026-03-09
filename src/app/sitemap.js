export default async function sitemap() {
    return [
        {
            url: "https://www.conveb.com", // ← ADD THIS
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0
        },
        {
            url: "https://www.conveb.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.conveb.com/services",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9
        },
        {
            url: "https://www.conveb.com/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        }
    ];
}