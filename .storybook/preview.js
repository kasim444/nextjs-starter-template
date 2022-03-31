import { addDecorator } from "@storybook/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "@theme";
import { RootStoreProvider } from "@store";
import * as NextImage from "next/image";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// Import Swiper styles
import "swiper/css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ),
});

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

const withChakra = (StoryFn, context) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();
  return (
    <ChakraProvider theme={extendTheme({ ...theme, direction: dir })}>
      <RootStoreProvider>
        <div
          dir={dir}
          id="story-wrapper"
          style={{ minHeight: "100vh" }}
        >
          <StoryFn />
        </div>
      </RootStoreProvider>
    </ChakraProvider>
  );
};

addDecorator(withChakra);
