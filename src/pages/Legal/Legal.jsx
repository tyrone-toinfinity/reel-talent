// CSS
import "./Legal.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
// Assets
import legal from "../../assets/svg/legal-graphic.svg";
export const Legal = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="legal__container">
        <figure className="legal__img__container">
          <img
            src={legal}
            alt="graphic of man sitting on legal documents"
            className="legal__img"
          />{" "}
          <figcaption className="legal__text">Legal</figcaption>
        </figure>

        <h2 className="terms__title">Terms and Conditions</h2>
        <p className="legal__pg">
          The following terms and conditions (collectively, these "Terms and
          Conditions") apply to your use of Reel Talent's website, including any
          content, functionality, and services offered (the "Website"). By using
          the Website, you accept and agree to be bound by these Terms and
          Conditions. These Terms and Conditions are effective as of September
          12, 2022 and may be updated without notice to you. or through any such
          web sites or services.
        </p>
        <p className="legal__pg">
          You are solely responsible for your conduct on the Website and must
          comply with all applicable laws and regulations. You may not post or
          distribute any content that is illegal, threatening, abusive, or
          violates the rights of others. We do not endorse any user-generated
          content and have the right to remove it if it does not comply with
          these Terms and Conditions.
        </p>
        <p className="legal__pg">
          The content on the Website is protected by copyrights, trademarks, and
          other proprietary rights, and is the property of Reel Talent. You may
          only use the content with written permission from Reel Talent or the
          specific content provider.
        </p>
        <p className="legal__pg">
          Reel Talent its subsidiaries, affiliates, and its licensors do not
          warrant that a) the Service will function uninterrupted, secure or
          available at any particular time or location; b) any errors or defects
          will be corrected; c) the Service is free of viruses or other harmful
          components; or d) the results of using the Service will meet your
          requirements.
        </p>
        <p className="legal__pg">
          The Website may link to other sites not under Reel Talent's control,
          and Reel Talent is not responsible for the content or accuracy of
          those sites. Your use of the Website is at your own risk and Reel
          Talent disclaims all warranties and limitations of liability. You
          agree to indemnify and hold Reel Talent harmless from any claims
          arising from your use of the Website.
        </p>
      </section>
      <SiteFooter />
    </>
  );
};
