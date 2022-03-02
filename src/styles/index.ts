import { createStitches, ScaleValue } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      default: 'Roboto'
    },
    colors: {
      pureWhite: '#fff',
      lightWhite: '#FBF9FB',

      blackLighter: '#0A0A0A',
      blackDarker: '#010101',
    },
    space: {
      '0': `0px`,
      '1': `1px`,
      '4': `0.25rem`,
      '8': `0.5rem`,
      '12': `0.75rem`,
      '16': `1rem`,
      '24': `1.5rem`,
      '32': `2rem`,
      '64': `4rem`,
    },
    radii: {
      full: `99999px`,
      default: `5px`,
    },
  },
  utils: {
    paddingX: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});