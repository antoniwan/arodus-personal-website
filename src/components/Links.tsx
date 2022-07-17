import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled.ul`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  margin-left: 1rem;

  li {
    margin: 0;
    list-style-type: none;
  }

  a:link,
  a:active,
  a:visited {
    display: block;
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
    }
  }
`;

const Links = () => {
  return (
    <StyledLinks>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </StyledLinks>
  );
};

export default Links;
