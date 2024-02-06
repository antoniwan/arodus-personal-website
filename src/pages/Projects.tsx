import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { DiscussionEmbed } from "disqus-react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Page from "../components/Page";
import Ebook1Picture from "../images/projects/EBook-MiaTheSunTheMoon.jpg";
import Ebook1Picture2x from "../images/projects/EBook-MiaTheSunTheMoon.jpg";
import JCPicture from "../images/projects/JCPortfolio.jpg";
import JCPicture2x from "../images/projects/JCPortfolio.jpg";

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledProjectListItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 50px;
  margin-bottom: 50px;
  border-bottom: 1px solid var(--color-pink);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  h2,
  h3,
  p {
    margin: 0;
  }
`;

export default function Projects({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: (value: string) => void;
}) {
  let location = useLocation();
  let pageUrl = `${window.location.origin}${location.pathname}`;
  return (
    <Layout colorMode={colorMode} setColorMode={setColorMode}>
      <Seo title="Recent Projects" />
      <Page>
        <h1>Recent Projects</h1>

        <StyledProjectList>
          <StyledProjectListItem>
            <img
              srcSet={`${Ebook1Picture} 1x, ${Ebook1Picture2x} 2x`}
              alt="Desktop & Mobile e-book screenshots"
            />

            <h2>
              <a
                href="http://mia-the-sun-and-the-moon.antoniorodriguez.us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mia, the Sun, and the Moon
              </a>
            </h2>
            <h3>Children's E-book in English and Spanish</h3>
            <p>
              I used the create-react-app React starter to create a simple
              e-book website. It uses Styled Components, basic state hooks, and
              local storage to save the chosen language and the last page the
              user browsed. I made the illustrations using multiple AI
              generators, and writing the content was the most challenging part.
              The design is entirely responsive.
            </p>
          </StyledProjectListItem>

          <StyledProjectListItem>
            <img
              srcSet={`${JCPicture} 1x, ${JCPicture2x} 2x`}
              alt="Desktop & Mobile Portfolio for my friend, Googler, Visual Designer, Juan Carlos Angustia"
            />

            <h2>
              <a
                href="https://juanangustia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                JuanAngustia.Com
              </a>
            </h2>
            <h3>Personal Portfolio</h3>
            <p>
              I used the create-react-app React starter to create a front-end
              heavy portfolio website. My friend designed it, and I created the
              components, layout, breakpoints, and necessary JavaScript and
              React hooks to calculate and animate all transitions and particles
              using the Framer animation libraries for mobile, tablet, and
              desktop breakpoints - this was particularly challenging.
            </p>
          </StyledProjectListItem>
        </StyledProjectList>

        <hr />

        <div className="discus-embed">
          <DiscussionEmbed
            shortname="a-bunch-of-ideas"
            config={{
              url: pageUrl,
              identifier: "projects-comments_001",
              title: "Projects",
            }}
          />
        </div>
      </Page>
    </Layout>
  );
}
