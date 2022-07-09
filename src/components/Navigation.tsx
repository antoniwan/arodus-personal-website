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
      display: none;
    }

    .mobile-menu {
      display: none;
    }
    .desktop-menu {
      display: block;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <Skullface />
    </StyledNavigation>
  );
};

export default Navigation;
