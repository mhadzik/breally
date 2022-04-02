import { em } from "polished";

const theme = {
  breakpoints: {
    mobile: 476,
    tablet: 769,
    laptop: 1024,
    wide: 1921,
  },
  colors: {
    black: "#231E1E",
    white: "#FFFFFF",
    pink: "#DAC2F2",
    gray: "#989898",
    green: "#5EDC4B",
    lightGray: "#F1F0F0",

    background: "#FFFFFF",
  },
  sizes: {
    containerWidth: 1400,
  },
};
export const devices = {
  mobile: `screen and (min-width: ${em(theme.breakpoints.mobile + 1)})`,
  tablet: `screen and (min-width: ${em(theme.breakpoints.tablet + 1)})`,
  laptop: `screen and (min-width: ${em(theme.breakpoints.laptop + 1)})`,
  site: `screen and (min-width: ${em(theme.sizes.containerWidth + 1)})`,
  wide: `screen and (min-width: ${em(theme.breakpoints.wide + 1)})`,
};

const defaultTheme = {
  ...theme,
  devices,
};

export default defaultTheme;
