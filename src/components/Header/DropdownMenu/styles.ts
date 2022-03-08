import { styled, keyframes } from '@stitches/react';
import { violet, mauve } from '@radix-ui/colors';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { lightTheme, darkTheme } from '@styles/index'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 150,
  backgroundColor:  lightTheme ? lightTheme.colors.primaryBackground : darkTheme.colors.primaryBackground,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,
  borderRadius: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '7px 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  backgroundColor:  lightTheme ? lightTheme.colors.secondaryBackground : darkTheme.colors.secondaryBackground,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,
  outline: 0,
  border: 0,

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor:  lightTheme ? lightTheme.colors.primaryBackground : darkTheme.colors.primaryBackground,
    color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,
  },
};

const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
});


// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const Box = styled('div', {});

export const IconButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,
  fontWeight: 700,
  fontSize: `14px`,

  backgroundColor:  lightTheme ? lightTheme.colors.secondaryBackground : darkTheme.colors.secondaryBackground,
  cursor: `pointer`,
  border: 0,
  outline: 0,
});

export const DropdownMenuRadioItem = styled(StyledRadioItem, {
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,
  fontSize: `14px`,

  padding: `$4 10px`,

  '&:hover': {
    backgroundColor:  lightTheme ? darkTheme.colors.primaryBackground : lightTheme.colors.primaryBackground,
  },
});