# DEVELOPER GUIDE

## REQUIREMENTS FOR PRODUCTION PROCESS

-   remove noindex row on next-seo.config.ts
-   remove Disallow row and comment out allow row on robots.txt

## Generate Accessibility Color Palette

-   [Link](https://smart-swatch.netlify.app/#1a44ff)

## Generate Favicon and manifest logos

-   [Link](https://favicon.io/favicon-converter/)

## REUPLOAD

-   yarn build
-   pm2 restart nextjs --update-env

## Commands

-   pm2 stop nextjs
-   pm2 start yarn --name "nextjs" -- start
-   pm2 delete offline-id
-   sudo systemctl restart apache2
-   lsof -i :8000
-   sudo kill -9 $(sudo lsof -t -i:3000)

## 'Port 3000 is already in use'

-   For Linux/Mac OS search (sudo) run this in the terminal:

```
$ lsof -i tcp:3000
$ kill -9 PID
```

-   On Windows:

```
netstat -ano | findstr :3000
tskill typeyourPIDhere
```

## Create Icon

To create a custom component, simply run the `yarn generate` command. Then you have to proceed from the icon option and finally give a name to your icon.

### How it works (<https://chakra-ui.com/docs/media-and-icons/icon#using-the-createicon-function>)

```JS
import { createIcon } from "@chakra-ui/icons"
// using `path`
export const UpDownIcon = createIcon({
  displayName: "UpDownIcon",
  viewBox: "0 0 200 200",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  ),
})
```

## Storybook

### Basic Example (<https://storybook.js.org/docs/react/essentials/controls>)

```js
import { Story, Meta } from '@storybook/react/types-6-0'
import Link from './Link'

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
  },
} as Meta

export const Basic: Story = ({ text, href, ...args }) => (
  <Link href={href} {...args}>
    {text}
  </Link>
)

Basic.args = {
  text: 'Link',
  href: '#',
}
```

## Media Queries

### 🍃 Usage

First let me mention how our default breakpoint look like:

```javascript
{
  '2xl': '1680px',
  'xl': '1440px',
  'lg': '1170px',
  'md': '768px',
  'sm': '450px',
}
```

## useBreakpointValue

useBreakpointValue is a custom hook used to help detect whether a single media query or multiple media queries individually match.

### Basic Example

```js
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const FooterNav = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    return (
        <Box>
            <Text>
                {isDesktop
                    ? "Current breakpoint is lg"
                    : `Current breakpoint isn't lg`}
            </Text>
        </Box>
    );
};
```

## i18n

### Basic Example

```js
import useTranslation from "next-translate/useTranslation";

const Hero = () => {
    const { t } = useTranslation();

    return <h1 ref={title}>{t("home:hero")}</h1>;
};

export default Hero;
```

## Z-Indexs

| Element   |  Class   |  Value |
| --------- | :------: | -----: |
| Chakra UI |   hide   |     -1 |
| Chakra UI |   auto   | "auto" |
| Chakra UI |   base   |      0 |
| Chakra UI |  docked  |     10 |
| Chakra UI | dropdown |   1000 |
| Chakra UI |  sticky  |   1100 |
| Chakra UI |  banner  |   1200 |
| Chakra UI | overlay  |   1300 |
| Chakra UI |  modal   |   1400 |
| Chakra UI | popover  |   1500 |
| Chakra UI | skipLink |   1600 |
| Chakra UI |  toast   |   1700 |
| Chakra UI | tooltip  |   1800 |
