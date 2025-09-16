import { Helmet } from "react-helmet-async";

type SEOProps = {
  readonly title: string;
  readonly description: string;
  readonly keywords?: string;
  readonly image?: string;
};

export default function SEO({
  title,
  description,
  keywords = "Eva Sisalli, Fullstack Developer, React, Java, Portfolio, Barcelona",
   image = "../../public/preview.png",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Eva Sisalli Guzmán" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://evasisalli.com" />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
