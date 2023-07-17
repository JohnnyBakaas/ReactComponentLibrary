import { useState } from "react";
import { styled } from "styled-components";
import { FAQItem } from "./FAQContracts";

export interface FAQProps {
  FAQItem: FAQItem;
}

const StyledFAQItemComponent = styled.div`
  color: var(--font-color);
  background-color: var(--card-background-color);
  border: 3px solid var(--card-border-color);
  border-radius: 20px;
  &:hover {
    border-color: var(--card-border-hover-color);
  }
  padding: 30px;
  margin-bottom: 10px;
`;

const Question = styled.h3`
  margin: 0;
`;

const Awnser = styled.p`
  padding-top: 30px;
`;

const FAQItemComponent = ({ FAQItem }: FAQProps) => {
  const [show, setShow] = useState(false);
  return (
    <StyledFAQItemComponent
      onClick={() => {
        setShow(!show);
      }}
    >
      <Question>{FAQItem.question}</Question>
      {show ? <Awnser>{FAQItem.answer}</Awnser> : null}
    </StyledFAQItemComponent>
  );
};

export default FAQItemComponent;
