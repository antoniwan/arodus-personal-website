import { useLocation } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import styled from "styled-components";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import SocialIcons from "../components/SocialIcons";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: left;
  }

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    margin-bottom: 5rem;
    border-radius: 300px;
    margin-top: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .discus-embed {
    width: 100%;
    margin-top: 4rem;
  }

  @media (min-width: 1024px) {
    img {
      margin-top: 0;
      border-radius: 300px;
      height: 300px;
      width: 300px;
    }
  }
`;

export default function Tools() {
  let location = useLocation();
  let pageUrl = `${window.location.origin}${location.pathname}`;
  return (
    <Layout>
      <Seo title="Tools" />
      <StyledPage>
        <p>Tools</p>

        <SocialIcons />

        <div className="discus-embed">
          <DiscussionEmbed
            shortname="a-bunch-of-ideas"
            config={{
              url: pageUrl,
              identifier: "tools-comments_001",
              title: "Tools",
            }}
          />
        </div>
      </StyledPage>
    </Layout>
  );
}
