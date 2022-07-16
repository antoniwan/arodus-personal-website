import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import styled from "styled-components";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import sanityClient from "../helpers/sanity-client";

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

const PostLinkout = ({
  title,
  createdOn,
  lastUpdateOn,
}: {
  title: string;
  createdOn: Date;
  lastUpdateOn: Date;
}) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default function Posts({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: (value: string) => void;
}) {
  let location = useLocation();
  let pageUrl = `${window.location.origin}${location.pathname}`;
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
      <Seo title="Home" />
      <StyledPage>
        <h1>My Posts</h1>

        {loading && <h2>Loading!</h2>}

        {!loading &&
          posts &&
          posts.map((post: any) => {
            console.log(post);
            return (
              <PostLinkout
                key={post.title}
                title={post.title}
                createdOn={post._createdat}
                lastUpdateOn={post._updatedAt}
              />
            );
          })}

        <div className="discus-embed">
          <DiscussionEmbed
            shortname="a-bunch-of-ideas"
            config={{
              url: pageUrl,
              identifier: "posts-comments_001",
              title: "Posts",
            }}
          />
        </div>
      </StyledPage>
    </Layout>
  );
}
