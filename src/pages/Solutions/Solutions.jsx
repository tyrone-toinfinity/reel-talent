// CSS
import "./Solutions.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
// Package
import { Link } from "react-router-dom";
import { FaUserCheck, FaChartBar, FaLightbulb } from "react-icons/fa";
// Assets
import ctaLogo from "..//../assets/svg/AI-CTA.svg";

export const Solutions = () => {
  return (
    <>
      <Navbar />

      <section className="solutions">
        <section className="solutions__intro">
          <div class="tagline-container">
            <h1 class="tagline">
              AI-Powered Solutions for Extraordinary Outcomes
            </h1>
            <p className="tagline__pg">
              {" "}
              Real Talent partners with Team AI to provide cutting-edge tools
              and technologies that enhance our recruitment process, ensuring
              the best match between candidates and employers.
            </p>
          </div>
        </section>

        <section className="solutions__features-container">
          <div className="solutions__feature-card">
            <div className="solutions__feature-icon">
              <FaUserCheck />
            </div>
            <h4 className="solutions__feature-title">Expert Talent Matching</h4>
            <p className="solutions__feature-description">
              Our AI-powered system matches the best candidates with your
              company culture and job requirements.
            </p>
          </div>
          <div className="solutions__feature-card">
            <div className="solutions__feature-icon">
              <FaChartBar />
            </div>
            <h4 className="solutions__feature-title">Data-Driven Decisions</h4>
            <p className="solutions__feature-description">
              Our analytics help you make informed decisions about your
              recruitment process.
            </p>
          </div>
          <div className="solutions__feature-card">
            <div className="solutions__feature-icon">
              <FaLightbulb />
            </div>
            <h4 className="solutions__feature-title">Innovative Technology</h4>
            <p className="solutions__feature-description">
              Our technology provides cutting-edge solutions for your talent
              acquisition needs.
            </p>
          </div>
        </section>

        <section className="cta">
          <div className="cta__container">
            <div className="cta__link">
              <h3 className="cta__tagline">
                Discover the Future of Hiring with Our AI-Powered Platform
              </h3>
              <Link to="/demo">
                <button className="cta__button">Contact Us</button>
              </Link>
            </div>

            <img className="cta__logo" src={ctaLogo} alt="" width={500} />
          </div>
        </section>
      </section>

      <SiteFooter />
    </>
  );
};
