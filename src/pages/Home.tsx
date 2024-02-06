import styled from "styled-components";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Page from "../components/Page";
import LinkTree from "../components/LinkTree";
import picture from "../images/profile-picture-2024.jpeg";
import picture2x from "../images/profile-picture-2024.jpeg";

const StyledProfilePicture = styled.div`
  display: block;
  position: relative;
  width: calc(100% + (4rem * 2));
  height: 300px;
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

export default function Home({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: (value: string) => void;
}) {
  return (
    <Layout colorMode={colorMode} setColorMode={setColorMode}>
      <Seo title="Home" />
      <Page>
        <StyledProfilePicture>
          <img
            srcSet={`${picture} 1x, ${picture2x} 2x`}
            alt="Antonio R., wearing a pink dress shirt and horn-rimmed glasses, and a smile."
          />
        </StyledProfilePicture>

        <h1>Antonio R.</h1>
        <p>
          Enjoyer of Learning, Doer, Conscious Person, Parent, Technical Program
          Manager, Web Developer, Product Leader, Philosopher, Powerful
        </p>
        <LinkTree />
      </Page>
    </Layout>
  );
}
