import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./SignupPage.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    contactno: Number(),
    institute:'',
    password: '',

  });
  const [error, setError] = useState("");

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
    if (formData.email === '' || 
        formData.password === '' || 
        formData.firstname === ''  || 
        formData.middlename === ''  || 
        formData.lastname === '' || 
        formData.institute === '' || 
        formData.contactno === '') {
      // setError("Please fill in both email and password fields.");
      alert('Please fill up all fields.');
      return;
    }

    if (!validatePassword()) {
      alert(
        'Invalid password. Please make sure it has at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one symbol.'
      );
      return;
    }
    console.log('firstname:', formData.firstname);
    console.log('middlename:', formData.middlename);
    console.log('lastname:', formData.lastname);
    console.log('Email:', formData.email);
    console.log('contact:', formData.contactno);
    console.log('institute:', formData.institute);
    console.log('Password:', formData.password);

    setFormData({
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        contactno: '',
        password: '',
    });
    // You can send the email and password to your backend for authentication
    // and handle the login logic on the server-side.
  };

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);

  //   // Perform login logic here
  //   setError("");

  //   // Send login credentials to the server
  //   fetch("/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.error) {
  //         setError(data.error);
  //       } else {
  //         // Store the JWT token in local storage or a secure cookie
  //         localStorage.setItem("token", data.token);
  //         // Redirect or perform other actions after successful login
  //       }
  //     })
  //     .catch((error) => {
  //       setError("An error occurred. Please try again.");
  //       console.error(error);
  //     });
  // };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
    return passwordRegex.test(formData.password);
  };

  return (
    <div className="main">
      <div className="flex1">
        <div className="text">Find a best Scholarship <br />for your education</div>
      <img className="img" src='./Images/Graduation 4.png' alt="Error" srcset="" />
      </div>
      <div className="flex2">
        <div className="heading">Create Account</div>
        <div className="form1">
        <form>
        <label>
            <div className="fname">First name</div>
            <input
              type="firstname"
              name="firstname"
              onChange={handleChange} 
              required placeholder="Enter your First name"
              value={formData.firstname}
            />
          </label>
        <label>
            <div className="mname">Middle name</div>
            <input
              type="middlename"
              name="middlename"
              onChange={handleChange} 
              required placeholder="Enter your Middle name"
              value={formData.middlename}
            />
          </label>
          <label>
            <div className="lname">Last name</div>
            <input
              type="lastname"
              name="lastname"
              onChange={handleChange} 
              required placeholder="Enter your Last name"
              value={formData.lastname}
            />
          </label>
          <br/>
          <label>
            <div className="mail">Email</div>
            <input
              type="email"
              name="email"
              onChange={handleChange} 
              required placeholder="abc@gmail.com"
              value={formData.email}
            />
          </label>
          <br />
          <label>
            <div className="contact">Contact No</div>
            <input
              type="contactno"
              name="contactno"
              onChange={handleChange} 
              required placeholder="+91"
              value={formData.contactno}
            />
          </label>
          <br/>
          <label>
            <div className="institute">Institute</div>
            <input
              type="text"
              name="institute"
              onChange={handleChange} 
              required placeholder="Charusat University"
              value={formData.institute}
            />
          </label>
          <br />
          <label>
          <div className="pwd">Password</div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required placeholder="8 Charactor required"
              value={formData.password}
            />
          </label>
          <br />
          <button type="submit" name="Create Account"onClick={handleLogin}>Create Account</button>
        <div className="create">Already have an account ? <Link to="/login">Login</Link></div>
        </form>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;


