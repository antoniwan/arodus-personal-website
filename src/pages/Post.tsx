import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { DiscussionEmbed } from "disqus-react";
import { formatDistance, parseJSON } from "date-fns";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import sanityClient from "../helpers/sanity-client";
import Page from "../components/Page";

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
  const postBody: any = postContent === null ? undefined : postContent.body;

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
      <Page>
        {postTitle && <h1>{postTitle}</h1>}

        {loading && <h2>Loading!</h2>}

        {postContent && <PortableText value={postBody} />}

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
      </Page>
    </Layout>
  );
}
