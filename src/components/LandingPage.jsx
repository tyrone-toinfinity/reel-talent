import "./LandingPage.css";
import React from "react";
import businessMeeting from "../assets/images/bussiness-meeting.jpg";

const LandingPage = () => {
  return (
    <section>
      <h1>Connecting Real Talent with Real Careers</h1>
      <img
        src={businessMeeting}
        alt="Successful candidates finding new job opportunities"
      />
      <p>
        At Reel Talent, we believe that every individual has the potential to
        achieve great things in their career. That's why we specialize in
        connecting top-performing talent with the right opportunities. Our
        extensive network and expertise in the industry allow us to match the
        perfect candidate with the perfect job, every time.
      </p>
      <h2>Our Services</h2>
      <ul>
        <li>Candidate sourcing and screening</li>
        <li>Interview coordination and feedback</li>
        <li>Offer negotiation and closing</li>
        <li>Onboarding and post-placement support</li>
      </ul>
      <h2>What Our Clients Say</h2>
      <blockquote>
        <p>
          "Reel Talent helped us find the perfect candidate for our open
          position. They took care of everything from sourcing to closing, and
          the whole process was seamless and stress-free. Highly recommend!"
        </p>
        <cite>Kim Peterson, HR Manager at XYZ Company</cite>
      </blockquote>
      <blockquote>
        <p>
          "Reel Talent connected me with the perfect job opportunity and made
          the whole process seamless and stress-free. I couldn't be happier with
          the outcome and would highly recommend them to anyone looking for a
          new job!"
        </p>
        <cite>Rick Zoolander, HR Manager at XYZ Company</cite>
      </blockquote>
      <blockquote>
        <p>
          "I had been searching for a job for months before turning to Reel
          Talent. Within weeks, they had found me the perfect position and I
          couldn't be happier. Their professionalism and personalized approach
          made all the difference."
        </p>
        <cite>Taylor Austin, HR Manager at XYZ Company</cite>
      </blockquote>
      <blockquote>
        <p>
          "The team at Reel Talent is truly top-notch. They were able to
          understand my career goals and find me a job that not only met but
          exceeded my expectations. I highly recommend their services."
        </p>
        <cite>Mike Lee, HR Manager at XYZ Company</cite>
      </blockquote>
      <blockquote>
        <p>
          "Reel Talent not only helped me find a new job, but also helped me
          improve my resume and interview skills. They truly care about their
          clients and go above and beyond to ensure their success. Thank you
          Reel Talent!"
        </p>
        <cite>Jane Smith, HR Manager at XYZ Company</cite>
      </blockquote>
      <a href="mailto:nick@reeltalent.com?subject=Contact Us&cc=bobby@reeltalent.com&body=Hello">
        <button>Contact Us</button>
      </a>
    </section>
  );
};

export default LandingPage;
