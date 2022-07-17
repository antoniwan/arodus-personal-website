import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .discus-embed {
    width: 100%;
    margin-top: 4rem;
  }
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <StyledPage>{children}</StyledPage>;
}
