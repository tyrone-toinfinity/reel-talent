// CSS
import "./LandingPage2.css";

// Components
import { BookingCard } from "./BookingCard";
import { useSpring, animated } from "react-spring";

// images
import businessMeeting from "../assets/images/bussiness-meeting.jpg";
import pl1 from "../assets/images/placeholderimg1.jpeg";
import pl2 from "../assets/images/placeholderimg2.jpeg";
import pl3 from "../assets/images/placeholderimg3.jpeg";
import { useEffect, useRef, useState } from "react";

export const LandingPage2 = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const image1Y = useSpring({
  //   transform: `translate3d(0, ${scrollY / 4}px, 0)`,
  // });
  // const image2Y = useSpring({
  //   transform: `translate3d(0, ${scrollY / 2}px, 0)`,
  // });
  // const image3Y = useSpring({
  //   transform: `translate3d(0, ${scrollY / 1.5}px, 0)`,
  // });

  // useEffect(() => {
  //   function handleScroll() {
  //     setScrollY(window.pageYOffset);
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
              // style={image1Y}
            />
          </div>
        </div>
        <div className="row">
          <div className="col image-section">
            <animated.img
              src={pl2}
              alt="Second Image"
              className="aspect-ratio-3-4"
              // style={image2Y}
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
              // style={image3Y}
            />
          </div>
        </div>
      </div>
      <BookingCard />
    </div>
  );
};
