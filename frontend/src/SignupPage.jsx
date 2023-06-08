import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./SignupPage.css";

function SignupPage() {
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
      education: formData.institute,
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
        education: formData.institute
      })
    });
    const resJson = await res.json();
    console.log("Resjson : ", resJson);
    localStorage.setItem("jwt", resJson.token);
    if (res.status == 400 || res.status == 500 || !res) {
      window.alert("An error occurred");
      console.log("An error occurred");
    }
    else if (res.status == 200) {
      window.alert("Login Successful");
      console.log("Login Successful");
    }
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
            <br />
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
            <br />
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
            <label>
              <div className="cpwd">Confirm Password</div>
              <input
                type="cpassword"
                name="cpassword"
                onChange={handleChange}
                required
                placeholder="Confirm password"
                value={formData.cpassword}
              />
            </label>
            <br />
            <button type="submit" name="Create Account" onClick={handleLogin}>Create Account</button>
            <div className="create">Already have an account ? <Link to="/login">Login</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;


