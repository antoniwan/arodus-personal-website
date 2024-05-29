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
    "Enjoyer of Learning, Doer, Conscious Person, Parent, Technical Program Manager, Web Developer, Product Leader, Philosopher, Powerful";
  const metaImage = image
    ? `${window.location.origin}/${image}`
    : undefined || `${window.location.origin}/share-image.jpg`;
  const ogType = type || "website";
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={window.location.origin} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content={ogType} />
    </Helmet>
  );
}
