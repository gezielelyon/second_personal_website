import { darkTheme, lightTheme, styled } from '@styles/index';

export const Container = styled('div', {
  flex: 1,
  backgroundColor:  lightTheme ? lightTheme.colors.primaryBackground : darkTheme.colors.primaryBackground,
})

export const MainContainerContent = styled('main', {
  maxWidth: `640px`,
  margin: `0 auto`,
  padding: `130px $16 $16 $16`,
});

export const FirstSection = styled('section', {
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `space-between`,

  gap: `10px`
});

export const FistSectionImageFigure = styled('figure', {
  'img': {
    borderRadius: `999px`,
    height: `150px`,
    width: `150px`,
  }
});

export const DeveloperNameTitle = styled('h1', {
  fontSize: `30px`,
  fontWeight: 700,
  transition: `all 0.3s ease`,
  cursor: `default`,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  '&:hover': {
    '-webkit-text-stroke':  lightTheme ? `1px ${lightTheme.colors.primaryText}` : `1px ${darkTheme.colors.primaryText}` ,
    color: `transparent`,
  },

  '@media(max-width: 400px)': {
    fontSize: `24px`
  }
});

export const SecondSection = styled('section', {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,

  marginTop: `$64`,
  gap: `10px`
});

export const SecondSectionTitle = styled('h2', {
  fontWeight: 600,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  '@media(max-width: 400px)': {
    fontSize: `20px`
  }
});

export const DescriptionText = styled('p', {
  fontSize: `19px`,
  fontWeight: 400,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  marginTop: `$16`,

  '@media(max-width: 400px)': {
    fontSize: `16px`
  }
});

export const ThirdSection = styled('section', {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,

  marginTop: `$64`,
  gap: `10px`
});

export const ThirdSectionTitle = styled('h2', {
  fontWeight: 600,
  marginBottom: `$16`,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  '@media(max-width: 400px)': {
    fontSize: `20px`
  }
});

export const ThirdListButton = styled('ul', {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,

  width: `100%`,
  gap: `20px`
});

export const ThirdButtonWithIcon = styled('li', {
  height: `70px`,
  width: `100%`,
  borderRadius: `10px`,
  backgroundColor: lightTheme ? lightTheme.colors.secondaryBackground : darkTheme.colors.secondaryBackground,
  boxShadow: `1px 1px 10px 1px #0000001A`,
  listStyle: `none`,
  transition: `transform 0.3s ease`,
  
  '&:hover': {
    transform: `scale(1.03, 1.03)`
  },
  
  'a': {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,

    height: `100%`,
    width: `100%`,

    textDecoration: `none`,
    textTransform: `capitalize`,
    padding: `20px 22px`,
    
    'h3': {
      fontSize: `17px`,
      color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

      '@media(max-width: 400px)': {
        fontSize: `16px`,
      }
    },

    'span': {
      fontSize: `25px`,
      textAlign: `center`
    }
  }
});

export const HomeFooter = styled('footer', {
  maxWidth: `640px`,
  margin: `0 auto`,
  padding: `$16 $16 $32 $16`,

  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,

  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  'span': {
    fontWeight: 400,
    opacity: 0.6,
    
    'strong': {
      fontWeight: 900,
    }
  },
});