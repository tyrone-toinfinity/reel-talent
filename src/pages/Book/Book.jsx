// CSS
import "./Book.css";
// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
// Package
import { useState } from "react";
export const Book = () => {
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
      <SiteFooter />
    </div>
  );
};
