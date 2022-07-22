import Link from "next/link";
import styled from "styled-components";

interface ItemProps {
  to: string;
  children: JSX.Element;
}

export const Item = ({ to, children }: ItemProps): JSX.Element => {
  return (
    <Container>
      <Link href={to} passHref>
        <A>
          <Clickable>
            {children}
          </Clickable>
        </A>
      </Link>
    </Container>
  );
};

const Container = styled.li`
  margin: 0px;
  padding: 0px;
`;

const A = styled.a`
  color: ${({ theme }) => theme.colours.background};
  text-decoration: none;


`;

const Clickable = styled.div`
  padding: 12px;
  margin: 0px;
`;