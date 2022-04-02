import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 24px;
  border: none;
  font-size: ${rem(16)};
  margin-right: 1rem;
  width: ${rem(416)};
  height: ${rem(48)};
  padding: 0 2rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
    font-family: "Inter", sans-serif;
    font-size: ${rem(16)};
    line-height: ${rem(19)};
  }

  :focus {
    outline: none;
  }
`;

const Input = (props) => {
  const { type, id, onChange } = props;
  return (
    <StyledInput
      type={type}
      placeholder={`Type your ${id}`}
      id={id}
      onChange={onChange}
    />
  );
};

export default Input;
