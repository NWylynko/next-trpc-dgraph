import { NextSeo } from 'next-seo';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Firebase } from '../components/Firebase';
import { getLayout } from "../components/Layouts";
import { Plausible } from "../components/Plausible";
import { withTRPC } from "../lib/trpc";
import { site } from "../site";
import { theme } from "../theme";
import { AppProps } from '../types/AppProps';

import "@fontsource/raleway"
import "@fontsource/oswald"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.colours.background};
    color: ${({ theme }) => theme.colours.foreground};

    font-family: "Raleway", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Oswald", sans-serif;

    margin: 0px;
  }
`

const App = ({ Component, pageProps }: AppProps) => {

  // pages can set there layout, if they don't it uses the default layout
  // checkout the layouts/index.ts file
  const { Header, Main, Footer } = getLayout(Component.layout ?? "default")

  return (
    <>
      <ThemeProvider theme={theme}>
        <Firebase>
          <Plausible>
            <GlobalStyle />
            <NextSeo titleTemplate={site.titleTemplate} />
            <Header />
            <Main>
              <Component {...pageProps} />
            </Main>
            <Footer />
            <ReactQueryDevtools />
          </Plausible>
        </Firebase>
      </ThemeProvider>
    </>
  );
}

export default withTRPC(App);