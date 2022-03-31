module.exports = {
    siteUrl: "http://localhost:3000",
    generateRobotsTxt: true,
    exclude: ["/server-sitemap.xml"],
    sitemapSize: 7000,
    changefreq: "daily",
    priority: 0.7,
    robotsTxtOptions: {
        additionalSitemaps: [
            "http://localhost:3000/server-sitemap.xml", // <==== Add here
        ],
    },
};
