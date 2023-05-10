import { Helmet } from "react-helmet";

export const SEO = () => {
  return (
    <Helmet>
      <meta
        name="description"
        content="Reel Talent provides comprehensive external recruiting services to help businesses fill job roles with top talent. Partner with us today."
      />
      <meta
        name="keywords"
        content="recruiting, external recruiting, job placement, talent acquisition, Reel Talent"
      />
      <meta name="author" content="Reel Talent" />
      <meta name="robots" content="index,follow" />
      <meta name="location" content="Salt Lake City, Utah" />
      <meta name="industry" content="Recruiting" />
      <meta
        name="services"
        content="External Recruiting, Job Placement, Talent Acquisition"
      />
      <meta property="og:image" content="./assets/svg/reeltalent-logo.svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Alternative text for the image" />
    </Helmet>
  );
};
