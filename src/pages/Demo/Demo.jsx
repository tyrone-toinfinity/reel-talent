// CSS
import "./Demo.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
import { Calendly } from "../../components/Calendly";
import { ContactForm } from "../../components/ContactForm";

export const Demo = () => {
  return (
    <div>
      <Navbar />{" "}
      <main className="demo__main">
        <div className="demo__container">
          <h2 className="demo__title">
            See how Reel Talent can improve your hiring
          </h2>
          <p className="demo__pg">
            From recruiting candidates to onboarding new team members, Reel
            Talent gives your company everything you need to be great at hiring.
          </p>
          <h4 className="demo__booking">Book a session with us to:</h4>
          <ul className="demo__list">
            <li className="">Get an overview of the Reel Talent platform</li>
            <li className="">Discuss your goals with a product expert</li>
            <li className="">Receieve pricing details based on your needs</li>
          </ul>
          <p className="demo__pg">
            {" "}
            Once you complete the request form, a Reel Talent team member will
            reach out within 24 business hours.
          </p>
        </div>
        <div className="calendly__container">
          {" "}
          <Calendly />
        </div>
      </main>
      {/* Contact box */}
      <section className="contact__main">
        <div className="contact__container">
          {" "}
          <h2 className="contact__heading">
            Find Your Perfect Fit, Connect with Us Today 👋
          </h2>
        </div>
      </section>
      <ContactForm />
      <SiteFooter />
    </div>
  );
};
