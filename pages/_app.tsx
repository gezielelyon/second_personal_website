import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { globalStyles } from '@styles/global';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
