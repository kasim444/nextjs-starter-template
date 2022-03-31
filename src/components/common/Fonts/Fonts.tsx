import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-Regular.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-Italic.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-Italic.woff') format('woff');
            font-weight: normal;
            font-style: italic;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-Medium.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-MediumItalic.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-MediumItalic.woff') format('woff');
            font-weight: 500;
            font-style: italic;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-SemiBold.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-SemiBold.woff') format('woff');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-SemiBoldItalic.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-SemiBoldItalic.woff') format('woff');
            font-weight: 600;
            font-style: italic;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-Bold.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Galano Grotesque';
            src: url('./assets/fonts/GalanoGrotesque-BoldItalic.woff2') format('woff2'),
                url('./assets/fonts/GalanoGrotesque-BoldItalic.woff') format('woff');
            font-weight: bold;
            font-style: italic;
            font-display: swap;
        }
      `}
    />
);

export default Fonts;
