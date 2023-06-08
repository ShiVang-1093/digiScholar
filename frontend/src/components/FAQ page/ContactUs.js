import React, { useState } from "react";
import "./FAQs.css";
// import "./ContactUs.css";
// import { Link } from "react-router-dom";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactno: Number(),
    message: '',

  });
  // const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    // Perform login logic here
    event.preventDefault();
    console.log('firstname:', formData.firstname);
    console.log('lastname:', formData.lastname);
    console.log('Email:', formData.email);
    console.log('contact:', formData.contactno);
    console.log('Password:', formData.message);

    setFormData({
        firstname: '',
        lastname: '',
        email: '',
        contactno: '',
        message: '',
    });
  };

  return (
      <div className="flex1">
        <div className="title">Get in Touch</div>
        <div className="contact-form">
        <form>
        <label>
            <div className="fname">First name:</div>            
            <input
              type="firstname"
              name="firstname"
              onChange={handleChange} 
              placeholder="Enter your First name"
              value={formData.firstname}
              required
            />
          </label>
          <label>
            <div className="lname">Last name:</div>            
            <input
              type="lastname"
              name="lastname"
              onChange={handleChange} 
              required 
              placeholder="Enter your Last name"
              value={formData.lastname}
            />
          </label>
          <br/>
          <br/>
          <label>
            <div className="mail">Email:</div>
            <input
              type="email"
              name="email"
              onChange={handleChange} 
              required 
              placeholder="abc@gmail.com"
              value={formData.email}
            />
          </label>
          <label>
            <div className="contact">Contact Number:</div>
            <input
              type="contactno"
              name="contactno"
              onChange={handleChange} 
              required 
              placeholder = "Enter your contact number"
              value={formData.contactno}
            />
          </label>
          <br/>
          <label>
          <div className="message">Message:</div>
            <input
              type="message"
              name="message"
              onChange={handleChange}
              required 
            //   placeholder
              value={formData.password}
            />
          </label>
          <br/>
          <br/>
          <button className="sub-btn" onClick={handleLogin}>Submit</button>
        </form>
        {/* <Link className="create" to ='/login'>Already have an account ? Login</Link> */}
        </div>
      </div>
  );
}
export default ContactUs;