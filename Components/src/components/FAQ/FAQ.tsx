import { styled } from "styled-components";
import { FAQItem, FAQItems } from "./FAQContracts";
import FAQItemComponent from "./FAQItemComponent";

export interface FAQProps {
  FAQItems: FAQItems;
}

const SyledFAQ = styled.div`
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: var(--font-color);
`;

const FAQ = ({ FAQItems }: FAQProps) => {
  return (
    <SyledFAQ>
      <StyledTitle>FAQ</StyledTitle>
      {FAQItems.map((e: FAQItem, i) => {
        return <FAQItemComponent FAQItem={e} key={i} />;
      })}
    </SyledFAQ>
  );
};

export default FAQ;
