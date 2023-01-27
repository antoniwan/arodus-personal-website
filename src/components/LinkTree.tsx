import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkTree = styled.ul`
  display: flex;
  flex-direction: column;
`;

export default function LinkTree() {
  return (
    <StyledLinkTree>
      <li>
        <a
          href="https://www.linkedin.com/in/antoniwan/"
          rel="noopener no noreferrer"
          target="_blank"
        >
          Work Profile @ LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://github.com/antoniwan"
          rel="noopener no noreferrer"
          target="_blank"
        >
          GitHub Profile
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/antoniwan/#"
          rel="noopener no noreferrer"
          target="_blank"
        >
          CodePen Examples
        </a>
      </li>

      <li>
        <a
          href="mailto:antonio@builds.software"
          rel="noopener no noreferrer"
          target="_blank"
        >
          Contact Me via Email
        </a>
        <li>
          <Link to="/about-me">Learn More About Me</Link>
        </li>
      </li>
    </StyledLinkTree>
  );
}
