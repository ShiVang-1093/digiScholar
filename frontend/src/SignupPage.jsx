import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactno: '',
    password: ''
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log('firstname:', formData.firstname);
    console.log('lastname:', formData.lastname);
    console.log('Email:', formData.email);
    console.log('contact:', formData.contactno);
    console.log('Password:', formData.password);

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: formData.firstname,
          lname: formData.lastname,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.password,
          contactno: formData.contactno,
        })
      });

      const resJson = await res.json();
      console.log("Resjson : ", resJson);

      if (res.status === 200) {
        window.alert("Account successfully created");
        localStorage.setItem("jwt", resJson.token);
        console.log("Login Successful");
        navigate("/");
      } else {
        window.alert(resJson.errors[0]);
        console.log("An error occurred");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="container mb-0 mt-3">
        <div className="row">
          <div className="col-md-4 border border-dark left-container d-flex flex-wrap justify-content-center align-items-center">
            <h3 className="mt-4">Find the best scholarship for your education</h3>
            <img src="./Images/Graduation 4.png" className="img-fluid " alt="" />
          </div>
          <div className="col-md-8 border border-danger right-container">
            <h1 className="m-3">Create Account</h1>
            <form className="d-flex align-items-center flex-column">
              <div className="form-group w-75 mt-2">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="firstName"
                  name="firstname"
                  placeholder="Enter your First Name"
                  required
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-75 mt-2">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="lastName"
                  name="lastname"
                  placeholder="Enter your Last Name"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-75 mt-2">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control custom-input"
                  id="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-75 mt-2">
                <label htmlFor="contactNo">Contact No:</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="contactNo"
                  name="contactno"
                  placeholder="+91"
                  required
                  value={formData.contactno}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group w-75 mt-2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control custom-input"
                  id="password"
                  name="password"
                  placeholder="8 Characters required"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="submit-btn-signup w-75 mt-4"
                onClick={handleLogin}
              >
                Create Account
              </button>
              <p className="mt-3">
                Already have an account? <NavLink to="/login">Login</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
