// CSS
import "./About.css";
// Components
import { MeetTheTeam } from "../../components/MeetTheTeam";
// Package
// Assets
import Image1 from "../../assets/images/pexels-mizuno-k-12903281.jpg";
import Image2 from "../../assets/images/pexels-fauxels-3184300.jpg";
import Image3 from "../../assets/images/pexels-fauxels-3183172.jpg";
export const About = () => {
  return (
    <>
      <section className="about__page">
        <section className="about__section">
          <h1 className="about__title">
            Expertly Connecting Talent with Opportunities
          </h1>
          <p className="about__description">
            Reel Talent is a recruiting company that aims to make hiring easy
            for businesses. We believe in transparency and strive to put it at
            the forefront of everything we do. Our goal is to provide a seamless
            and efficient hiring process that helps companies find the best
            talent for their needs. With Reel Talent, you can rest assured that
            you'll find the right fit for your organization.
          </p>
        </section>
        <MeetTheTeam />
        {/* <section className="card__section">
          <div className="about__card">
            <img src={Image1} alt="Transparency" className="about__img" />
            <h2 className="card__title ">Transparency</h2>
            <p className="card__text  about__description">
              We believe in being transparent in all our dealings with our
              clients and job seekers.
            </p>
          </div>
          <div className="about__card">
            <img src={Image2} alt="Efficiency" className="about__img" />
            <h2 className="card__title ">Efficiency</h2>
            <p className="card__text  about__description">
              Our goal is to provide a seamless and efficient hiring process for
              businesses.
            </p>
          </div>
          <div className="about__card ">
            <img
              src={Image3}
              alt="Finding the Right Fit"
              className="about__img"
            />
            <h2 className="card__title ">Finding the Right Fit</h2>
            <p className="card__text about__description">
              We strive to help businesses find the best talent for their needs,
              ensuring a good fit for both the company and the job seeker.
            </p>
          </div>
        </section> */}
      </section>
    </>
  );
};
