import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const StyledRichText = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.colors.black};
  }
  h1 {
    line-height: ${rem(64)};
    font-weight: 500;
    margin: 0;
    font-size: ${rem(48)};
  }
  h2 {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${rem(40)};
    line-height: ${rem(56)};
    font-weight: 500;
    margin: 0;
  }
  p {
    font-size: ${rem(24)};
    line-height: ${rem(40)};
    color: ${({ theme }) => theme.colors.lightGray};
  }

  h4 {
    font-size: ${rem(24)};
    line-height: ${rem(29)};
    color: ${({ theme }) => theme.colors.gray};
    margin: 0;
  }

  h5 {
    color: ${({ theme }) => theme.colors.green};
    font-size: ${rem(14)};
    line-height: ${rem(22)};
    margin: 0;
  }
`;

const RichText = (props) => {
  return <StyledRichText>{props.children}</StyledRichText>;
};

export default RichText;
