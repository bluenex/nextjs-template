/**
 * uncomment import in next project and remove dummy Head component
 */
// import Head from 'next/head';

const Head = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

interface SEOProps {
  title?: string | undefined | null;
  description?: string | undefined | null;
  image?: string | undefined | null;
  url?: string | undefined | null;
}

const BASE_URL = "https://bluenex.dev";
const fallbacks = {
  title: "bluenex.dev",
  description: "A personal website for a random software developer.",
  image: "/image/path.jpg",
  url: "https://bluenex.dev",
};

const SEO = ({ title, description, image }: SEOProps) => {
  return (
    <Head>
      <title>{title || fallbacks.title}</title>
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta
        property="og:title"
        content={title || fallbacks.title}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={description || fallbacks.description}
        key="ogdesc"
      />
      <meta
        property="og:image"
        content={`${BASE_URL}${image || fallbacks.image}`}
        key="ogimage"
      />
      <meta
        property="og:site_name"
        content={fallbacks.title}
        key="ogsitename"
      />
    </Head>
  );
};

export default SEO;
