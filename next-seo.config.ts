const title = "MADDE22";
const description =
    "We combine good design, simple usability and smart technology.";
const siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`;

const SEO = {
    title,
    description,
    canonical: siteUrl,
    // TODO: update noindex value after production
    noindex: true,
    openGraph: {
        type: "website",
        locale: "tr_TR",
        url: siteUrl,
        title,
        description,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/android-chrome-512x512.png`,
                alt: title,
                width: 512,
                height: 512,
            },
        ],
    },
};

export default SEO;
