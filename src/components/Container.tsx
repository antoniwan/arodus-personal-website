import styled from "styled-components";

const Section = styled.section`
  max-width: var(--max-container-width);
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: 960px) {
    padding-left: 4rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
`;

export default function Container({ children }: { children: React.ReactNode }) {
  return <Section className={`container`}>{children}</Section>;
}
