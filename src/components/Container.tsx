import styled from "styled-components";

const Section = styled.section`
  max-width: var(--max-container-width);
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 0 auto;
  width: calc(100% - (4rem * 2));

  @media screen and (min-width: 1024px) {
    margin-left: unset;
    margin-right: unset;
  }
`;

export default function Container({ children }: { children: React.ReactNode }) {
  return <Section className={`container`}>{children}</Section>;
}
