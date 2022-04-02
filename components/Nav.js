import React from "react";
import NavItem from "./NavItem";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <nav>
      <StyledUl>
        <NavItem />
      </StyledUl>
    </nav>
  );
};

export default Nav;
