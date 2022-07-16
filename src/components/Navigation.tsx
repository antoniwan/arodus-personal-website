import styled from "styled-components";
import Skullface from "../components/Skullface";
import misc from "../libs/misc";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 60px;
  padding-left: 1rem;
  padding-right: 2rem;

  button {
    padding: 0;
    margin: 0;
    background: none;
    border: 0px;
    cursor: pointer;
    font-size: 2.2rem;
  }

  .mobile-menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  .desktop-menu {
    display: none;
  }

  .links-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    background: var(--color-black);
    ${misc.black_food_background_css_string}
    border-bottom: 1px solid var(--color-black);

    &.is-open {
      max-height: 600px;
    }
  }

  @media (min-width: 1024px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;

    button {
      font-size: 3rem;
      position: absolute;
      top: 2rem;
      right: 2rem;
    }

    .mobile-menu {
      display: none;
    }
    .desktop-menu {
      display: block;
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
      <button onClick={toggleColorMode}>
        {colorMode !== "light" ? <span>🌞</span> : <span>🌖</span>}
      </button>
    </StyledNavigation>
  );
};

export default Navigation;
