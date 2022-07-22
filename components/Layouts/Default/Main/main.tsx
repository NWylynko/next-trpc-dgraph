import styled from "styled-components";
import type { MainProps } from "../..";

export const Main = ({ children }: MainProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colours.background};
  color: ${({ theme }) => theme.colours.foreground};

  /* min-height: 100vh; */

`;