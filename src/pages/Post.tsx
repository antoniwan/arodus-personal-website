import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import styled from "styled-components";
import { formatDistance, parseJSON } from "date-fns";
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

export default function Post({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: (value: string) => void;
}) {
  const { postSlug } = useParams();
  let location = useLocation();
  let pageUrl = `${window.location.origin}${location.pathname}`;
  const [postContent, setPostContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const query = `*[_type == "post" && slug.current=="${postSlug}"]`;

  const postId: any = postContent === null ? undefined : postContent._id;
  const postTitle: any = postContent === null ? undefined : postContent.title;

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(query)
      .then((data) => {
        setPostContent(data[0]); // TODO: This seems dirty AF
        setLoading(false);
      })
      .catch(console.error);
  }, [query]);

  return (
    <Layout colorMode={colorMode} setColorMode={setColorMode}>
      <Seo title={postTitle ? postTitle : ""} />
      <StyledPage>
        {postTitle && <h1>{postTitle}</h1>}

        {loading && <h2>Loading!</h2>}

        <div className="discus-embed">
          <DiscussionEmbed
            shortname="a-bunch-of-ideas"
            config={{
              url: pageUrl,
              identifier: `post-${postId}-comments`,
              title: `${postTitle}`,
            }}
          />
        </div>
      </StyledPage>
    </Layout>
  );
}
