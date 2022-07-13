import { Helmet } from "react-helmet";

export default function Seo({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const metaDescription =
    description ||
    "Software engineering and product leader, enjoyer of modern web technologies. Fullstack developer, accidental cofounder and manager, living in Miami, Florida. I know what I'm doing 60% of the time!";
  return (
    <>
      <Helmet>
        <title>{title} | Antonio R.</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
    </>
  );
}
