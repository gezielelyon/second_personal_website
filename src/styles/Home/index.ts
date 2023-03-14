import { darkTheme, lightTheme, styled } from '@styles/index';

export const Container = styled('div', {
  flex: 1,
  backgroundColor:  lightTheme ? lightTheme.colors.primaryBackground : darkTheme.colors.primaryBackground,
  minHeight: '100vh',
  height: '100%',
})

export const MainContainerContent = styled('main', {
  maxWidth: `650px`,
  margin: `0 auto`,
  padding: `130px $16 $16 $16`,
});

export const SecondSection = styled('section', {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,

  marginTop: `$32`,
  gap: `10px`,
  
  '@media(max-width: 500px)': {
    marginTop: 0
  }
});

export const SecondSectionTitle = styled('h2', {
  fontWeight: 600,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  '@media(max-width: 500px)': {
    fontSize: `20px`
  }
});

export const DescriptionText = styled('p', {
  fontSize: `19px`,
  fontWeight: 400,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  marginTop: `$16`,

  '@media(max-width: 500px)': {
    fontSize: `16px`
  }
});

export const ThirdSection = styled('section', {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,

  marginTop: `$72`,
  gap: `10px`,
  
  '@media(max-width: 500px)': {
    marginTop: `$48`,
  }
});

export const ThirdSectionTitle = styled('h2', {
  fontWeight: 600,
  marginBottom: `$16`,
  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,

  '@media(max-width: 500px)': {
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

      '@media(max-width: 500px)': {
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
  maxWidth: `650px`,
  margin: `0 auto`,
  padding: `$40 $16`,

  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,

  color:  lightTheme ? lightTheme.colors.primaryText : darkTheme.colors.primaryText,
  textAlign: `center`,

  'span': {
    fontWeight: 400,
    opacity: 0.6,
    
    'strong': {
      fontWeight: 700,
    }
  },

  '@media(max-width: 500px)': {
    padding: `$32 $16`,
  }
});