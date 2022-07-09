import styled from "styled-components";
import Navigation from "./Navigation";

const StyledPillar = styled.section`
  background: linear-gradient(
    68.9deg,
    rgba(144, 60, 240, 1) 46.3%,
    rgba(235, 88, 84, 1) 94.8%
  );
  background-size: 500% 500%;
  animation: AnimateBGGradient 10s ease infinite;
  height: 60px;
  width: 100%;

  @media (min-width: 1024px) {
    min-height: 100vh;
    height: 100%;
  }
`;

const Pillar = () => {
  return (
    <StyledPillar>
      <Navigation />
    </StyledPillar>
  );
};

export default Pillar;
