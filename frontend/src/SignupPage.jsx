import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    contactno: Number(),
    institute: '',
    password: '',
    cpassword: ''
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
    // Perform login logic here
    event.preventDefault();
    console.log('firstname:', formData.firstname);
    console.log('middlename:', formData.middlename);
    console.log('lastname:', formData.lastname);
    console.log('Email:', formData.email);
    console.log('contact:', formData.contactno);
    console.log('institute:', formData.institute);
    console.log('Password:', formData.password);
    console.log('COnfirm Password:', formData.cpassword);

    setFormData({
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      contactno: '',
      password: '',
    });
    console.log(JSON.stringify({
      fname: formData.firstname,
      lname: formData.lastname,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.password,
      contact: formData.contactno,
    }));    // details to be sent {fname,lname,email,password,confirm_password,age,gender,cast,income,city,state,education,contact}
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
        confirm_password: formData.cpassword,
        contactno: formData.contactno,
      })
    });
    const resJson = await res.json();
    console.log("Resjson : ", resJson);
    if (res.status == 400 || res.status == 500 || !res) {
      window.alert("An error occurred");
      console.log("An error occurred");
    }
    else if (res.status == 200) {
      window.alert("Account successfully created Successful");
      localStorage.setItem("jwt", resJson.token);
      console.log("Login Successful");
      window.location.href = "/";
    }
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
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-flex1">
          <div className="signup-heading">Find a best Scholarship <br />for your education</div>
          <img className="signup-illustrator" src='./Images/Graduation 4.svg' alt="Error" srcset="" />
        </div >
        <div className="signup-flex2">
          <div className="signup-heading2">Create Account</div>
          <div className="form1">
            <form>
              <label>
                <div className="signup-fname">First name</div>
                <input
                  id="sp1"
                  type="firstname"
                  name="firstname"
                  onChange={handleChange}
                  required placeholder="Enter your First name"
                  value={formData.firstname}
                />
              </label>
              {/* <label>
              <div className="signup-mname">Middle name</div>
              <input
                id="sp2"
                type="middlename"
                name="middlename"
                onChange={handleChange}
                required placeholder="Enter your Middle name"
                value={formData.middlename}
              />
            </label> */}
              <label>
                <div className="signup-lname">Last name</div>
                <input
                  id="sp3"
                  type="lastname"
                  name="lastname"
                  onChange={handleChange}
                  required placeholder="Enter your Last name"
                  value={formData.lastname}
                />
              </label>
              <br />
              <label>
                <div className="signup-mail">Email</div>
                <input
                  id="sp4"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required placeholder="abc@gmail.com"
                  value={formData.email}
                />
              </label>
              <br />
              <label>
                <div className="signup-contact">Contact No</div>
                <input
                  id="sp5"
                  type="contactno"
                  name="contactno"
                  onChange={handleChange}
                  required placeholder="+91"
                  value={formData.contactno}
                />
              </label>

              {/* <label>
              <div className="signup-institute">Institute</div>
              <input
                id="sp6"
                type="text"
                name="institute"
                onChange={handleChange}
                required placeholder="Charusat University"
                value={formData.institute}
              />
            </label> */}

              <label>
                <div className="signup-pwd">Password</div>
                <input
                  id="sp7"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required placeholder="8 Charactor required"
                  value={formData.password}
                />
              </label>
              {/* <label>
              <div className="signup-cpwd">Confirm Password</div>
              <input
                id="sp8"
                type="cpassword"
                name="cpassword"
                onChange={handleChange}
                required
                placeholder="Confirm password"
                value={formData.cpassword}
              />
            </label> */}
              <br />
              <button type="submit" name="Create Account" id="sp9" onClick={handleLogin}>Create Account</button>
              <div className="signup-login-account">Already have an account ? <Link to="/login">Login</Link></div>
            </form>
          </div>
        </div>
      </div >
    </div>
  );
}
export default SignupPage;