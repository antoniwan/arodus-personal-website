import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { DiscussionEmbed } from "disqus-react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import picture from "../images/profile-picture.jpg";
import picture2x from "../images/profile-picture-2x.jpg";

const StyledProfilePicture = styled.div`
  display: block;
  position: relative;
  width: calc(100% + (4rem * 2));
  height: 250px;
  left: -4rem;
  top: -4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 -15px;
  }

  @media (min-width: 500px) {
    position: unset;
    width: unset;
    height: unset;
    left: unset;
    top: unset;

    img {
      width: 200px;
      height: 200px;
      object-fit: unset;
      object-position: unset;
      border-radius: 200px;
      border: 0px solid var(--color-black);
      margin-bottom: 2rem;
    }
  }
`;

export default function About({
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
      <Seo title="About Me" />
      <Page>
        <StyledProfilePicture>
          <img
            srcSet={`${picture} 1x, ${picture2x} 2x`}
            alt="Antonio Rodriguez, wearing a pink dress shirt and horn-rimmed glasses, and a smile."
          />
        </StyledProfilePicture>

        <p>
          Hi, my name is Antonio, and I enjoy building things: web applications,
          software development teams, prototypes, documents, products,
          abstractions, songs, cooking recipes, instructionals, anything. I
          genuinely enjoy my work; it truly blows my mind that I get paid to
          learn and build things all day.
        </p>

        <p>
          Some years ago, as a college student, a friend and I founded a web
          software development company that a marketing firm later acquired.
          Unfortunately, this entrepreneurship experience was more educational
          than lucrative. The good news is that this venture helped me define
          how I want to work and what I need to facilitate for my
          coworkers—integrity, empathy, ethics, compassion, kindness,
          transparency, inclusion, diversity, tolerance, and respect. We are
          most productive and efficient when we are diverse and healthy in mind,
          body, and spirit. We need to care for each other if we will work so
          hard every day. I see you. You are all working so hard.
        </p>

        <p>
          The marketing agency life was very fun and appealing to me. I will
          miss all the variability of the projects, their scope, and their
          features. The people you work with are brilliant too. The wild client
          feedback and how quick turnarounds were. We'd have to learn a
          language, library, framework, or protocol (!!) on the go because the
          client wanted us to do X, Y, and Z. What?! I loved that feeling, and
          delivering felt even more remarkable. I learned to love learning.
        </p>

        <p>
          Throughout my career, I've held many responsibilities: Individual
          Contributor, Architect, Chief Technology Officer, Engineering Manager,
          and Director to a few teams, projects, and products with various
          levels of effort and impact. Nowadays, I'm enjoying my work as a
          Technical Program Manager for the digital core technology group in a
          fantastic Global tool and hardware company.
        </p>

        <p>
          Aside from work, I put most of my efforts into being a conscious and
          present person. I enjoy bringing my family together with home-cooked
          food, weightlifting, playing basketball, reading, and putting in the
          hours to be a loving, mindful, and involved parent.
        </p>

        <p>Thanks for visiting! And If you'd like, sign my website below!!</p>

        <SocialIcons />

        <div className="discus-embed">
          <DiscussionEmbed
            shortname="a-bunch-of-ideas"
            config={{
              url: pageUrl,
              identifier: "home-comments_001",
              title: "Home",
            }}
          />
        </div>
      </Page>
    </Layout>
  );
}
