import { extendTheme } from "@chakra-ui/react";
import {
    BREAKPOINTS,
    FONTS,
    FONTSIZES,
    COLORS,
    SPACES,
    SIZES,
    BORDER_RADIUS,
    SHADOWS,
    Z_INDICES,
    LETTER_SPACING,
    LINE_HEIGHTS,
    GLOBAL,
} from "./foundations";
import COMPONENTS from "./components";
import { LAYER_STYLES, TEXT_STYLES } from "./styles";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/theming/customize-theme
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */
const theme = extendTheme({
    colors: COLORS,
    fonts: FONTS,
    fontSizes: FONTSIZES,
    breakpoints: BREAKPOINTS,
    components: COMPONENTS,
    space: SPACES,
    sizes: SIZES,
    radii: BORDER_RADIUS,
    shadows: SHADOWS,
    zIndices: Z_INDICES,
    letterSpacings: LETTER_SPACING,
    lineHeights: LINE_HEIGHTS,
    textStyles: TEXT_STYLES,
    layerStyles: LAYER_STYLES,
    styles: {
        global: GLOBAL,
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
});

// console.log(JSON.stringify(theme, null, 2));
export default theme;
