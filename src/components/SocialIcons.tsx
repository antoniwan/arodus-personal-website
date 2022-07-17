import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLastfm,
  FaCodepen,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";

const StyledSocialIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  justify-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    font-size: 2.6rem;
    line-height: 1.6;
    height: 60px;
    width: 60px;
  }

  @media (min-width: 1024px) {
  }
`;

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a
          href="https://twitter.com/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="http://instagram.com/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/antoniwan/#"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaCodepen />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          href="http://www.last.fm/user/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLastfm />
        </a>
      </li>
      <li>
        <a
          href="https://open.spotify.com/user/antoniwan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaSpotify />
        </a>
      </li>
      <li>
        <a href="mailto:antonio@builds.software">
          <GoMail />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
