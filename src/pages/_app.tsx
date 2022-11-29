import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, LIGHT_THEME } from 'styles';
import 'normalize.css/normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
