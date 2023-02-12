// CSS
import "./ContactForm.css";
// Package
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { BsArrowUpRight } from "react-icons/bs";
// Assets
import dogImage from "../assets/images/dog-waiting.jpg";

export const ContactForm = () => {
  const formContact = useRef();
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i6ytsvs",
        "template_ra8vv2 k",
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
        <div className="form-section">
          <div className="form-row">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="form-row">
            <label>Work email address</label>
            <input type="email" name="user_email" />
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <label>Company name</label>
            <input type="text" name="company_name" />
          </div>
          <div className="form-row">
            <label>Company size</label>
            <select name="company_size">
              <option value="" disabled selected>
                Select size
              </option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>
        </div>
        <div className="form-text-container">
          <label>Message</label>
          <textarea className="form-textarea" name="message" />
        </div>
        <input className="contact-btn" type="submit" value="Send" />
      </form>
    );
  }
};
