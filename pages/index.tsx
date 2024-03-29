import { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

import { IHeaderProps } from '@components/Header/index';
import { lightTheme, darkTheme } from '@styles/index';

import {
  Container,
  MainContainerContent,
  SecondSection,
  SecondSectionTitle,
  DescriptionText,
  ThirdSection,
  ThirdSectionTitle,
  HomeFooter,
  ThirdListButton,
  ThirdButtonWithIcon,
} from '@styles/Home/index';

const Header = dynamic<IHeaderProps>(() =>
  import('@components/Header/index').then(module => module.Header),
);

interface IHomeProps {
  currentLanguage: string;
}

const Home: NextPage<IHomeProps> = ({ currentLanguage }) => {
  const { t } = useTranslation();

  const [currentThemeMode, setCurrentThemeMode] = useState<'light' | 'dark'>(
    'light',
  );

  return (
    <>
      <NextSeo
        title="Geziel Elyon"
        description="This is the Geziel Elyon software engineer website and contain some important link."
      />
      <Container
        className={currentThemeMode === 'light' ? lightTheme : darkTheme}
      >
        <Header
          currentLanguage={currentLanguage}
          currentThemeMode={currentThemeMode}
          setCurrentThemeMode={setCurrentThemeMode}
        />

        <MainContainerContent>
          <SecondSection>
            <SecondSectionTitle>
              {t('common:title_second_section')} 🔥
            </SecondSectionTitle>
            <DescriptionText>
              {t('common:description_second_section')}
            </DescriptionText>
          </SecondSection>

          <ThirdSection>
            <ThirdSectionTitle>
              {t('common:title_third_section')} 👇
            </ThirdSectionTitle>

            <ThirdListButton>
              <ThirdButtonWithIcon>
                <NextLink
                  href="https://www.linkedin.com/in/geziel-elyon-a0a1381a5/"
                  passHref
                  prefetch={false}
                >
                  <a
                    title="Linkedin link"
                    aria-label="Linkedin link"
                    target="_blank"
                  >
                    <h3>Linkedin</h3>
                    <span>🤓</span>
                  </a>
                </NextLink>
              </ThirdButtonWithIcon>
              <ThirdButtonWithIcon>
                <NextLink
                  href="https://github.com/programador404"
                  passHref
                  prefetch={false}
                >
                  <a
                    title="Github link"
                    aria-label="Github link"
                    target="_blank"
                  >
                    <h3>Github</h3>
                    <span>🖥️</span>
                  </a>
                </NextLink>
              </ThirdButtonWithIcon>
              <ThirdButtonWithIcon>
                <NextLink
                  href="https://www.instagram.com/gezielelyon"
                  passHref
                  prefetch={false}
                >
                  <a
                    title="Instagram link"
                    aria-label="Instagram link"
                    target="_blank"
                  >
                    <h3>Instagram</h3>
                    <span>😎</span>
                  </a>
                </NextLink>
              </ThirdButtonWithIcon>
              <ThirdButtonWithIcon>
                <NextLink href="https://pagar.me/" passHref prefetch={false}>
                  <a
                    title="Empresa atual link"
                    aria-label="Empresa atual link"
                    target="_blank"
                  >
                    <h3>{t('common:company_text')}</h3>
                    <span>👨‍💻</span>
                  </a>
                </NextLink>
              </ThirdButtonWithIcon>
              <ThirdButtonWithIcon>
                <a
                  href={
                    currentLanguage === 'English'
                      ? '/english-curriculum.pdf'
                      : '/portuguese-curriculum.pdf'
                  }
                  title="Baixar currículo"
                  aria-label="Baixar currículo"
                  download
                >
                  <h3>{t('common:curriculum_text')}</h3>
                  <span>💯</span>
                </a>
              </ThirdButtonWithIcon>
            </ThirdListButton>
          </ThirdSection>
        </MainContainerContent>

        <HomeFooter>
          <span>
            {t('common:text_footer')} <wbr />
          </span>
        </HomeFooter>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale !== undefined ? locale : 'pt';

  return {
    props: {
      currentLanguage: currentLocale === 'en' ? 'English' : 'Português',
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
};

export default Home;
