import React from "react";
import styled from "styled-components";
import imgTestimonials from "../assets/quotation-mark.svg";
import Image from "next/image";
import RichText from "./RichText";

const StyledTestimonials = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const ContainerAuthor = styled.div`
  margin-top: 5.5rem;
`;

const Testimonials = (props) => {
  const { text, author } = props;
  return (
    <StyledTestimonials>
      <div>
        <Image src={imgTestimonials} alt={"imgtest"} width={48} height={40} />
      </div>
      <RichText>
        <p>{text}</p>
      </RichText>
      <ContainerAuthor>
        <RichText>
          <h4>{author}</h4>
        </RichText>
      </ContainerAuthor>
    </StyledTestimonials>
  );
};

export default Testimonials;
