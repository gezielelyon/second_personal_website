import { darkTheme, lightTheme, styled } from '@styles/index';

export const Container = styled('header', {
  height: `70px`,
  width: `100%`,

  backgroundColor: lightTheme ? lightTheme.colors.secondaryBackground : darkTheme.colors.secondaryBackground,
  boxShadow: `0px 1px 10px 0px #0000000D`,

  position: `fixed`,
  left: 0,
  top: 0,
  zIndex: 99
});

export const MainContent = styled('div', {
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `space-between`,

  margin: `0 auto`,
  maxWidth: `640px`,
  height: `100%`,

  paddingLeft: `$16`,
  paddingRight: `$16`,
});

export const ThemeModeIcon = styled('button', {
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,

  outline: 0,
  border: 0,
  cursor: `pointer`,
  background: `transparent`
});

export const ChangeThemeButton = styled('button', {
  background: `transparent`,
  border: 0,
  outline: 0,
  cursor: `pointer`
}) 