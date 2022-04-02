import { rem, em } from "polished";

export function fluidValue(property, minValue, maxValue, minWidth, maxWidth) {
  return `
    ${property}: ${rem(minValue)};
    
    @media screen and (min-width: ${em(minWidth)}) {
      ${property}: calc(${rem(minValue)} + ${
    maxValue - minValue
  } * ((100vw - ${em(minWidth)}) / ${maxWidth - minWidth}));
    }

    @media screen and (min-width: ${em(maxWidth)}) {
      ${property}: ${rem(maxValue)};
    }
  `;
}
