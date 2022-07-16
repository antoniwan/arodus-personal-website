import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

const PostLinkout = ({
  id,
  title,
  slug,
  createdOn,
  lastUpdateOn,
}: {
  id: string;
  slug: any;
  title: string;
  createdOn: string;
  lastUpdateOn: string;
}) => {
  const todayDate = Date.now();
  const createdOnDate = parseJSON(createdOn);
  const updatedOnDate = parseJSON(lastUpdateOn);
  const created = formatDistance(createdOnDate, todayDate);
  const updated = formatDistance(updatedOnDate, todayDate);
  console.log(slug);
  return (
    <div>
      <Link to={`/posts/${slug.current}`}>
        <h3>{title}</h3>
      </Link>
      <p>
        Created {created}. Last Update {updated}.
      </p>
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
            return (
              <PostLinkout
                key={post.title}
                title={post.title}
                slug={post.slug}
                id={post._id}
                createdOn={post._createdAt}
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
