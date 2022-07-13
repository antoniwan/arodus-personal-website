import { Helmet } from "react-helmet";

export default function Seo({
  title,
  description,
  type,
  image,
}: {
  title: string;
  description?: string;
  type?: string;
  image?: string;
}) {
  const metaTitle = `${title} | Antonio R.`;
  const metaDescription =
    description ||
    "Software engineering and product leader, enjoyer of modern web technologies. Fullstack developer, accidental cofounder and manager, living in Miami, Florida. I know what I'm doing 60% of the time!";
  const metaImage = image
    ? `${window.location.origin}/${image}`
    : undefined || `${window.location.origin}/share-image.jpg`;
  const ogType = type || "website";
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content={ogType} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${window.location.origin}`} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
    </Helmet>
  );
}
