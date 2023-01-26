import "./LandingPage.css";
import React from "react";

const LandingPage = () => {
  return (
    <section>
      <h1>Connecting Real Talent with Real Careers</h1>
      <img
        src="src/assets/images/bussiness-meeting.jpg"
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
        <cite>Jane Smith, HR Manager at XYZ Company</cite>
      </blockquote>
      <button>Contact Us</button>
    </section>
  );
};

export default LandingPage;
