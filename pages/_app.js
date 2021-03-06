import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { store } from '../src/redux/store';

import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import * as locales from '../locale';

import '../src/firebase/init';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();
  const { locale, defaultLocale } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy;

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Bùi Chí Vinh</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/swiper-min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/animation.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />

        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/bootstrap-validator.js"></script>
        <script src="/assets/js/form-validation.js"></script>
        <script src="/assets/js/swiper-min.js"></script>
        <script src="/assets/js/jquery-magnific-popup.js"></script>
        <script src="/assets/js/jquery-appear.js"></script>
        <script src="/assets/js/main.js"></script>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <IntlProvider locale={locale}
            defaultLocale={defaultLocale} messages={messages}>
            {
              loading ? <p>Loading...</p>
                :
                <Component {...pageProps} />
            }
          </IntlProvider>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
