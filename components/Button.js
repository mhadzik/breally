import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 24px;
  width: ${rem(192)};
  height: ${rem(48)};
  border: none;
  font-family: "Inter", sans-serif;
  font-size: ${rem(16)};
  cursor: pointer;
`;

const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
