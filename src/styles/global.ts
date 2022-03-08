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
});