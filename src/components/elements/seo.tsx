import { NextSeo } from "next-seo";
// import PropTypes from "prop-types";
import { getStrapiMedia } from "@utils/media";
import { OpenGraphMedia } from "next-seo/lib/types";

interface ISeo {
    metadata: {
        metaTitle: string;
        metaDescription: string;
        shareImage: {
            id: string | number;
            alternativeText?: string;
            mime: string;
            url: string;
            formats: {
                [key: string]: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string;
                    size: number;
                    width: number;
                    height: number;
                };
            };
        };
        twitterCardType?: string;
        twitterUsername?: string;
    };
}

const Seo: React.FC<ISeo> = ({ metadata }) => {
    // Prevent errors if no metadata was set
    if (!metadata) return null;

    return (
        <NextSeo
            title={metadata.metaTitle}
            description={metadata.metaDescription}
            openGraph={{
                // Title and description are mandatory
                title: metadata.metaTitle,
                description: metadata.metaDescription,
                // Only include OG image if we have it
                // Careful: if you disable image optimization in Strapi, this will break
                ...(metadata.shareImage && {
                    images: Object.values(metadata.shareImage.formats).map(
                        (image) => {
                            const mda: OpenGraphMedia = {
                                url: getStrapiMedia(image.url) || "",
                                width: image.width,
                                height: image.height,
                            };
                            return mda;
                        },
                    ),
                }),
            }}
            // Only included Twitter data if we have it
            twitter={{
                ...(metadata.twitterCardType && {
                    cardType: metadata.twitterCardType,
                }),
                // Handle is the twitter username of the content creator
                ...(metadata.twitterUsername && {
                    handle: metadata.twitterUsername,
                }),
            }}
        />
    );
};

export default Seo;
