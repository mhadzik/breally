import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import RichText from "./RichText";
import { rem } from "polished";
import { postNewsletter } from "../helpers/api-service";

const StyledNewsletter = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 0.1fr;
  justify-content: center;
  align-items: center;

  h5 {
    margin: 1.3rem 0 0;
  }

  h2 {
    margin: 0 0 ${rem(40)};
  }
`;

const Container = styled.div`
  justify-self: center;
`;

const Newsletter = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [response, setResponse] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postNewsletter(formData)
      .then((res) => setResponse(res.message))
      .catch((err) => setResponse(err.message));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.type]: event.target.value.trim(),
    });
  };

  return (
    <StyledNewsletter>
      <Container>
        <RichText>
          <h2>Sign up for Newsletter</h2>
        </RichText>
      </Container>
      <div>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="email"
            id={"email"}
            value={formData.email}
            onChange={handleChange}
          />
          <Button>Submit</Button>
        </form>
      </div>
      <Container>
        <RichText>
          <h5>{response}</h5>
        </RichText>
      </Container>
    </StyledNewsletter>
  );
};

export default Newsletter;
