import "./LandingPage2.css";
import businessMeeting from "../assets/images/bussiness-meeting.jpg";
// import { Waypoint } from "react-waypoint";

// images
import pl1 from "../assets/images/placeholderimg1.jpeg";
import pl2 from "../assets/images/placeholderimg2.jpeg";
import pl3 from "../assets/images/placeholderimg3.jpeg";
import { useEffect, useRef, useState } from "react";

export const LandingPage2 = () => {
  const [isActive, setActive] = useState(true); // changed the initial state to true
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          //   setActive(false);
        }
      });
    });
    observer.observe(myRef.current);

    return () => {
      observer.unobserve(myRef.current);
    };
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col text-section">
            <h1 className="landing-page-headings">
              Better Hiring Starts with Reel Talent
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
          <div class="col image-section">
            <img
              src={pl1}
              alt="First Image"
              className={`${
                isActive ? "active-class" : "inactive-class"
              } aspect-ratio-3-4 `}
              ref={myRef}
            />
          </div>
        </div>
        <div class="row">
          <div class="col image-section">
            <img
              src={pl2}
              alt="First Image"
              className={`${
                isActive ? "active-class" : "inactive-class"
              } aspect-ratio-3-4 `}
              ref={myRef}
            />
          </div>
          <div class="col text-section">
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
        <div class="row">
          <div class="col text-section">
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
          <div class="col image-section">
            <img
              src={pl3}
              alt="First Image"
              className={`${
                isActive ? "active-class" : "inactive-class"
              } aspect-ratio-3-4 `}
              ref={myRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
