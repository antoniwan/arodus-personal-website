import styled from "styled-components";
import Skullface from "./Skullface";
import Links from "./Links";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  height: 60px;
  padding-left: 1rem;
  padding-right: 2rem;
  z-index: 7;
  overflow: hidden;

  button.dark-mode-toggle {
    padding: 0;
    margin: 0;
    background: none;
    border: 0px;
    cursor: pointer;
    font-size: 2.2rem;
  }

  @media (min-width: 1024px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;

    button.dark-mode-toggle {
      font-size: 3rem;
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;

const Navigation = ({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: (value: string) => void;
}) => {
  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <StyledNavigation>
      <Skullface />
      <Links />
      <button className="dark-mode-toggle" onClick={toggleColorMode}>
        {colorMode !== "light" ? <span>🌞</span> : <span>🌖</span>}
      </button>
    </StyledNavigation>
  );
};

export default Navigation;
