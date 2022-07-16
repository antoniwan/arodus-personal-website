import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled.ul`
  display: flex;
  flex-grow: 1;

  a:link,
  a:active,
  a:visited {
    display: block;
    padding: 2rem;
    color: var(--color-white);
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: normal;
    transition: all 0.5s ease;

    &:hover {
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
    }

    &.active {
      font-weight: bold;
      border-left: 4px solid var(--color-pink);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    padding-bottom: 0;

    li {
      margin-top: 1rem;
    }
    a {
      padding: 0;
      padding-right: 1rem;

      font-size: 2rem;
      line-height: 1;
      text-decoration: none;
      text-shadow: none;
      text-align: center;
      &:hover {
        color: var(--color-black);
      }

      &.active {
        font-weight: normal;
        border-bottom: none;
        border: none;
        color: var(--color-pink);
        transition: all 0.2s;
      }
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
