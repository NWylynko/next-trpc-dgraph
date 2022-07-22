import styled from "styled-components";
import type { FooterProps } from "../.."

export const Footer = ({ }: FooterProps): JSX.Element => {
  return (
    <Container>

    </Container>
  )
}

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colours.foreground};
  color: ${({ theme }) => theme.colours.background};

  min-height: 64px;
  width: 100vw;
`;