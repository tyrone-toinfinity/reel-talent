// CSS
import "./Demo.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
// Package
import { useState } from "react";
export const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform API call or send form data to server here
    console.log(formData);
  };
  return (
    <div>
      <Navbar />{" "}
      <div className="demo__main">
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button className="button-22" type="submit">
            Submit
          </button>
        </form>
      </div>
      <SiteFooter />
    </div>
  );
};
