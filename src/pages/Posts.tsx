import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import { formatDistance, parseJSON } from "date-fns";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Page from "../components/Page";
import sanityClient from "../helpers/sanity-client";

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
  return (
    <div>
      <Link to={`/posts/${slug.current}/${id}`}>
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
      <Page>
        <h1>Posts</h1>

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
      </Page>
    </Layout>
  );
}
