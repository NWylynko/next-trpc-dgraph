import styled from "styled-components"
import type { HeaderProps } from "../.."
import { Item } from "./Item";
import { Menu } from "./Menu";
import { NavigationList } from "./NavigationList";

const Title = styled.h1`
  color: ${({ theme }) => theme.colours.background};
`;

export const Header = ({ }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <NavigationList>
        <Item to="/">
          <Title>
            [Logo]
          </Title>
        </Item>
        <Menu />
      </NavigationList>
    </Container>
  )
}

const Container = styled.header`
  background-color: ${({ theme }) => theme.colours.foreground};
  color: ${({ theme }) => theme.colours.background};

  min-height: 64px;
  width: 100vw;
`;
