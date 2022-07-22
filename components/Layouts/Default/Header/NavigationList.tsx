import styled from "styled-components"

interface NavigationListProps {
  children: JSX.Element | JSX.Element[];
}

export const NavigationList = ({ children }: NavigationListProps) => {
  return (
    <Navigation>
      <List>
        {children}
      </List>
    </Navigation>
  )
}

const Navigation = styled.nav`
  margin: 0px;
  padding: 0px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0px;

  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
    align-items: center;
    align-content: center;
`;