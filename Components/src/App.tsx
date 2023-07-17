import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import { FAQItems } from "./components/FAQ/FAQContracts";
import { styled } from "styled-components";

const WidthContainer = styled.main`
  width: 90%;
`;

const AppContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const App = () => {
  const FAQItems: FAQItems = [
    {
      question: "Jeg får ikke logget inn",
      answer: "Det kan være flere grunner til at du ikke kommer inn.",
    },
    {
      question: "Hvor finner jeg kake",
      answer:
        "Kake finner du i de fleste butikker, hos bestemor og på bursdager",
    },
  ];
  return (
    <AppContainer>
      <WidthContainer>
        <FAQ FAQItems={FAQItems} />
      </WidthContainer>
    </AppContainer>
  );
};

export default App;
