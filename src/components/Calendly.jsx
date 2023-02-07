// CSS
import "./Calendly.css";

// Packages
import { InlineWidget } from "react-calendly";

export const Calendly = () => {
  return (
    <div className="calendly__main">
      <div className="calendly__title">
        <h2 className="calendly__heading">Book a Demo with Reel Talent</h2>
        <p className="calendly__pg">
          Experience the power of Reel Talent in simplifying your recruitment
          process. Schedule a free, live 1:1 tour with us to see how we can
          elevate your workforce. Let us know your recruitment challenges and
          we'll show you how Reel Talent can supercharge your hiring.
        </p>
      </div>
      <InlineWidget
        // styles={{
        //   height: "100vh",
        // }}
        pageSettings={{
          backgroundColor: "fff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        url="https://calendly.com/reeltalent-247/30min"
      />
    </div>
  );
};
