import Image from "next/image";
import React from "react";
import styled from "styled-components";
import RichText from "./RichText";

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;
`;

const TextContainer = styled.div`
  align-self: center;
`;

const ImageContainer = styled.div``;

const Hero = (props) => {
  const { text, image } = props;
  return (
    <StyledHero>
      <TextContainer>
        <RichText>
          <h1>{text}</h1>
        </RichText>
      </TextContainer>
      <ImageContainer>
        <Image src={image} alt={text} width={516} height={384} />
      </ImageContainer>
    </StyledHero>
  );
};

export default Hero;
