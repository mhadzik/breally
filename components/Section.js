import { rem } from "polished";
import { Fragment } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const StyledSection = styled.section`
  width: 100%;
  padding: ${rem(128)} ${rem(172)} ${rem(145)} ${rem(172)};
  background-color: ${({ theme }) => theme.colors.white};

  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.black};
    padding: ${rem(128)} ${rem(172)} ${rem(128)} ${rem(172)};
  }
`;

const Section = (props) => {
  const { type, text, author, image } = props;

  switch (type) {
    case "hero":
      return (
        <Fragment>
          <StyledSection>
            <Hero text={text} image={image} />
          </StyledSection>
        </Fragment>
      );
    case "testimonial":
      return (
        <Fragment>
          <StyledSection>
            <Testimonials text={text} author={author} />
          </StyledSection>
        </Fragment>
      );
    case "newsletter":
      return (
        <Fragment>
          <StyledSection>
            <Newsletter />
          </StyledSection>
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <StyledSection>{props.children}</StyledSection>
        </Fragment>
      );
  }
};

export default Section;
