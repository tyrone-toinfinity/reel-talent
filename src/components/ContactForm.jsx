import "./ContactForm.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dogImage from "../assets/images/dog-waiting.jpg";
import { Link } from "react-router-dom";

export const ContactForm = () => {
  const formContact = useRef();
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i6ytsvs",
        "template_ra8vv2k",
        formContact.current,
        "vvgAiHNMFcWHykmQ2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowThankYou(true);
        },
        (error) => {
          console.log(error.text);
          setShowThankYou(true);
        }
      );
  };

  if (showThankYou) {
    return (
      <div className="thank-you">
        <img
          src={dogImage}
          className="thank-you-img"
          alt="dog looking at a computer screen"
        />
        <h1 className="thank-you-header">Thank you for reaching out!</h1>
        <p>
          We will get back to you soon. In the meantime, check out our{" "}
          <Link className="thank-you-blog" to="/blog">
            blog
          </Link>
          .
        </p>
      </div>
    );
  } else {
    return (
      <form ref={formContact} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="contact-btn" type="submit" value="Send" />
      </form>
    );
  }
};
