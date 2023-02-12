// CSS
import "./Demo.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
import { Calendly } from "../../components/Calendly";
import { NavbarMobile } from "../../components/NavbarMobile";

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
          <h2 className="contact__heading">Contact us</h2>
          <p className="contact__pg">
            Reach out to us at Reel Talent to transform your recruitment process
            and build a more engaged workforce. With our expertise, accelerate
            your hiring and connect with the best talent available. Let's work
            together to build a strong foundation for your company's success.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};
