import SEO from "@/next-seo.config";
import { ChakraProvider } from "@chakra-ui/react";
import { Fonts } from "@common";
import { RootStoreProvider } from "@store";
import theme from "@theme";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

// Import Swiper styles
import "swiper/css";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/images/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/images/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/images/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <DefaultSeo {...SEO} />
            <ChakraProvider theme={theme}>
                <RootStoreProvider>
                    <NextNProgress
                        options={{
                            showSpinner: false,
                            trickleSpeed: 500,
                            easing: "linear",
                            speed: 600,
                        }}
                        color={theme.colors.brand["500"]}
                        height={1.5}
                    />
                    <Fonts />
                    <Component {...pageProps} />
                </RootStoreProvider>
            </ChakraProvider>
        </>
    );
}

export default App;
