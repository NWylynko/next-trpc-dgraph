import { NextSeo } from 'next-seo';
import { ReactQueryDevtools } from 'react-query/devtools';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Firebase } from '../components/Providers/Firebase';
import { getLayout } from "../components/Layouts";
import { Plausible } from "../components/Providers/Plausible";
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

    background-color: ${({ theme }) => theme.colours.foreground};

    font-family: "Raleway", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Oswald", sans-serif;
    color: ${({ theme }) => theme.colours.accent1};
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
            <Container>
              <Header />
              <Main>
                <Component {...pageProps} />
              </Main>
              <Footer />
            </Container>
            {false && <ReactQueryDevtools />}
          </Plausible>
        </Firebase>
      </ThemeProvider>
    </>
  );
}

export default withTRPC(App);

const Container = styled.div`

  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;

  display: grid;
  grid-template-rows: 64px 1fr 64px;
  
`;