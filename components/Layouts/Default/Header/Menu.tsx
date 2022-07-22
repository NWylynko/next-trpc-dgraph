import { HiOutlineMenuAlt4 } from "@react-icons/all-files/hi/HiOutlineMenuAlt4";
import styled from "styled-components";

export const Menu = () => {
  return (
    <Button onClick={console.log}>
      <Burger size={32} />
    </Button>
  )
}

const Button = styled.button`
  border: none;
  background-color: transparent;

  padding: 12px;
  margin: 0px;
`;

const Burger = styled(HiOutlineMenuAlt4)`
  color: ${({ theme }) => theme.colours.background};

  transform: translateY(4px);
`;