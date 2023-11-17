import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

const StyledExternalLink = styled.div`
  font-size: 10px;
  display: inline-block;
  line-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

const StyledLinks = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  margin-left: 1rem;
  width: 100%;
  height: 100%;
  overflow: hidden;

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a:link,
  a:active,
  a:visited {
    padding: 10px;
    color: var(--color-white);
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: normal;
    transition: all 0.5s ease;

    &:hover {
      color: var(--color-black);
      text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.5);
    }

    &.active {
      font-weight: bold;
      border-left: 4px solid var(--color-pink);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    margin: 0;
    padding-top: 2rem;

    a:link,
    a:active,
    a:visited {
      font-size: 2rem;
      line-height: 2rem;
      display: block;
      text-align: center;
    }
  }

  @media (max-width: 376px) {
    a:link:first-child { display: none; }

  }
`;

const Links = () => {
  return (
    <StyledLinks>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <a href="https://wizards666.com/" target="_blank" rel="noopener no noreferrer">Personal Blog <StyledExternalLink><FaExternalLinkAlt /></StyledExternalLink></a>
      </li>
    </StyledLinks>
  );
};

export default Links;
