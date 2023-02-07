// CSS
import "./LandingPage.css";

// Components
import { useSpring, animated } from "react-spring";

// images
import businessMeeting from "../assets/images/bussiness-meeting.jpg";
import pl1 from "../assets/images/group-working.jpg";
import pl2 from "../assets/images/girl-smiling.jpg";
import pl3 from "../assets/images/man-on-phone.jpg";
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
              Better hiring starts with Reel Talent
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
              Creating a Positive Workplace: The Benefits of Good Hiring
              Practices
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
              Dedicated to Your Success: How Reel Talent Can Help You Hire the
              Right People
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
      </div>
    </div>
  );
};
