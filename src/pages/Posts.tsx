import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDistance, parseJSON } from "date-fns";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Page from "../components/Page";
import sanityClient from "../helpers/sanity-client";

const StyledPostLinkOut = styled.div`
  background: ${({ theme }) => theme["content-background"]};
  border-radius: 8px;
  padding: 2rem;

  a {
    text-decoration: none;
  }

  h3 {
    font-family: var(--font-sans);
    font-weight: bold;
    margin-bottom: 0;
  }
`;

const StyledPostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 30px;
  width: 100%;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

const PostLinkout = ({
  id,
  title,
  slug,
  createdOn,
}: {
  id: string;
  slug: any;
  title: string;
  createdOn: string;
}) => {
  const todayDate = Date.now();
  const createdOnDate = parseJSON(createdOn);
  const created = formatDistance(createdOnDate, todayDate);
  return (
    <StyledPostLinkOut>
      <Link to={`/posts/${slug.current}/${id}`}>
        <h3>{title}</h3>
      </Link>
      <small>Created {created} ago.</small>
    </StyledPostLinkOut>
  );
};

export default function Posts({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: (value: string) => void;
}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = `*[_type == "post"]`;

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(query)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [query]);

  return (
    <Layout colorMode={colorMode} setColorMode={setColorMode}>
      <Seo title="Posts" />
      <Page>
        <h1>Posts</h1>

        {loading && <h2>Now Loading Posts...</h2>}

        <StyledPostsWrapper>
          {!loading &&
            posts &&
            posts.map((post: any) => {
              return (
                <PostLinkout
                  key={post.title}
                  title={post.title}
                  slug={post.slug}
                  id={post._id}
                  createdOn={post._createdAt}
                />
              );
            })}
        </StyledPostsWrapper>

        {!loading && posts.length === 0 && (
          <>
            <p>Under Construction!</p>
          </>
        )}
      </Page>
    </Layout>
  );
}
