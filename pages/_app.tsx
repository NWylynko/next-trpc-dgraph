import { NextSeo } from 'next-seo';
import { AppType } from 'next/dist/shared/lib/utils';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Firebase } from '../components/Firebase';
import { Plausible } from "../components/Plausible";
import { withTRPC } from "../lib/trpc";
import { site } from "../site";
import { theme } from "../theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.colours.background};
    color: ${({ theme }) => theme.colours.foreground};
  }
`

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Firebase>
          <Plausible>
            <GlobalStyle />
            <NextSeo titleTemplate={site.titleTemplate} />
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </Plausible>
        </Firebase>
      </ThemeProvider>
    </>
  );
}

export default withTRPC(App);