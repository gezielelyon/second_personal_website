import { globalCss } from '@styles/index';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`,
  },
  'body, button': {
    fontFamily: `$default`,
  },
  body: {
    backgroundColor: `$lightWhite`,
    color: `$blackDarker`,
  },
  'h1, h2, h3, h4, h5, h6': {
    color: `$blackDarker`,
  },
});