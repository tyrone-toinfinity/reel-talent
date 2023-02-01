// Css
import "./Calendly.css";

// Packages
import { InlineWidget } from "react-calendly";

export const Calendly = () => {
  return (
    <div>
      <InlineWidget
        pageSettings={{
          backgroundColor: "ffffff",
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
