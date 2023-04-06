// CSS
import "./LandingPage.css";

// Components
import { useSpring, animated } from "react-spring";

// images
import businessMeeting from "../assets/images/bussiness-meeting.jpg";
import pl1 from "../assets/images/group-working.jpg";
import pl2 from "../assets/images/girl-smiling.jpg";
import pl3 from "../assets/images/man-on-phone.jpg";
import pl4 from "../assets/svg/seaweed-pattern01.svg";

import pl5 from "../assets/svg/seashell-pattern-01.svg";
import { useEffect, useRef, useState } from "react";

export const LandingPage = () => {
  const [image1Props, setImage1Props] = useSpring(() => ({ y: 0 }));
  const [image2Props, setImage2Props] = useSpring(() => ({ y: 0 }));
  const [image3Props, setImage3Props] = useSpring(() => ({ y: 0 }));

  const handleImage1Hover = () => setImage1Props({ y: -10 });
  const handleImage1Leave = () => setImage1Props({ y: 0 });

  const handleImage2Hover = () => setImage2Props({ y: -10 });
  const handleImage2Leave = () => setImage2Props({ y: 0 });

  const handleImage3Hover = () => setImage3Props({ y: -10 });
  const handleImage3Leave = () => setImage3Props({ y: 0 });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-section">
            <h1 className="landing-page-headings">
              Better Hiring starts with Reel Talent test
            </h1>
            <p className="landing-page-pg">
              Hiring good people is important for the success of any business.
              They bring new ideas, energy, and skill to the table, and help
              drive the company forward. At Reel Talent, we understand the
              importance of finding the right candidates for your organization,
              and we strive to make the hiring process as easy and effective as
              possible.
            </p>
          </div>
          <div className="col image-section">
            <animated.img
              src={pl1}
              alt="First Image"
              className="aspect-ratio-3-4"
              style={{
                transform: image1Props.y.interpolate(
                  (y) => `translateY(${y}px)`
                ),
              }}
              onMouseEnter={handleImage1Hover}
              onMouseLeave={handleImage1Leave}
            />
          </div>
        </div>
        <div className="row">
          <div className="col image-section image__girl">
            <animated.img
              src={pl2}
              alt="Second Image"
              className="aspect-ratio-3-4"
              style={{
                transform: image2Props.y.interpolate(
                  (y) => `translateY(${y}px)`
                ),
              }}
              onMouseEnter={handleImage2Hover}
              onMouseLeave={handleImage2Leave}
            />
          </div>
          <div className="col text-section">
            <h1 className="landing-page-headings">
              The Benefits Of Good Hiring Practices
            </h1>
            <p className="landing-page-pg">
              Another important aspect of hiring good people is that they help
              to create a positive and productive work environment. This in turn
              leads to higher employee satisfaction and retention, which is good
              for both the company and the employees.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-section">
            <h1 className="landing-page-headings">
              How Reel Talent Can Help You Hire The Right People
            </h1>
            <p className="landing-page-pg">
              At Reel Talent, we are dedicated to providing our clients with the
              best possible service and support. Whether you're a small startup
              or a large corporation, we have the resources and expertise to
              help you find the talent you need to achieve your goals.
            </p>
          </div>
          <div className="col image-section">
            <animated.img
              src={pl3}
              alt="Second Image"
              className="aspect-ratio-3-4"
              style={{
                transform: image3Props.y.interpolate(
                  (y) => `translateY(${y}px)`
                ),
              }}
              onMouseEnter={handleImage3Hover}
              onMouseLeave={handleImage3Leave}
            />
          </div>
        </div>
        {/* <div className="break__text"></div>

        <div className="row">
          <div className="text-container">
            <h1 className="landing-page-headings">
              A Comprehensive Hiring Solution
            </h1>
            <p className="landing-page-pg">
              At Reel Talent, we offer a complete range of hiring services, from
              job postings and candidate sourcing to interview support and
              onboarding. Our team of experienced recruiters will work with you
              every step of the way to help you find the best talent for your
              organization.
            </p>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col image-section image__girl">
            <animated.img
              src={pl5}
              alt="Second Image"
              className="aspect-ratio-3-4"
              style={{
                transform: image2Props.y.interpolate(
                  (y) => `translateY(${y}px)`
                ),
              }}
              onMouseEnter={handleImage2Hover}
              onMouseLeave={handleImage2Leave}
            />
          </div>
          <div className="col text-section">
            <h1 className="landing-page-headings">
              Partner with Reel Talent for a Better Hiring Experience
            </h1>
            <p className="landing-page-pg">
              Reel Talent is your trusted partner in hiring. We understand the
              challenges of finding the right candidates and we are committed to
              making the process smoother and more efficient for you. Partner
              with us today and see the difference that better hiring can make
              for your business.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
