import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";
import Button from "./Button";
import { rem } from "polished";

const StyledHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr;
  padding: ${rem(24)} ${rem(64)};
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const StyledContactUs = styled.div`
  justify-self: end;
`;

const StyledLogo = styled.div`
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Link href="/" passHref>
          <Image src={Logo} alt="logo" width={89} height={32} />
        </Link>
      </StyledLogo>
      <Nav />
      <StyledContactUs>
        <Button>Contact us</Button>
      </StyledContactUs>
    </StyledHeader>
  );
};

export default Header;
