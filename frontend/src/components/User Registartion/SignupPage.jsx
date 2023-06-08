import React, { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    middelname: '',
    lastname: '',
    institute: '',
    email: '',
    contactno: Number(),
    password: '',
    Confirmpassword:''

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
    console.log('firstname:', formData.middelname);
    console.log('lastname:', formData.lastname);
    console.log('firstname:', formData.institute);
    console.log('Email:', formData.email);
    console.log('contact:', formData.contactno);
    console.log('Password:', formData.password);
    console.log('confirm Password:', formData.Confirmpassword);


    setFormData({
        firstname: '',
        middelname:'',
        lastname: '',
        institute:'',
        email: '',
        contactno: '',
        password: '',
        Confirmpassword: ''
    });
  };

  return (
    <div className="main">
      <div className="flex1">
        <div className="text">Find a best scholarship for your education.</div>
      <img className="img" src='./images/Graduation2.png' alt="Error" srcset="" />
      </div>
      <div className="flex2">
        <div className="heading">Create Your Account</div>
        <div className="form1">
        <form>
        <label>
            <div className="fname">First name</div>            
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
            <div className="mname">Middel name</div>            
            <input
              type="middelname"
              name="middelname"
              onChange={handleChange} 
              placeholder="Enter your Middel name"
              value={formData.middelname}
              required
            />
          </label>
          <label>
            <div className="lname">Last name</div>            
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
          <label>
            <div className="institute">Institute</div>            
            <input
              type="institute"
              name="institute"
              onChange={handleChange} 
              placeholder="Enter your institute name"
              value={formData.institute}
              required
            />
          </label>
          <br/>
          <label>
            <div className="mail">Email</div>
            <input
              type="email"
              name="email"
              onChange={handleChange} 
              required 
              placeholder="abc@gmail.com"
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
              required 
              placeholder="+91"
              value={formData.contactno}
            />
          </label>
          <br/>
          <label>
          <div className="pwd">Password</div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required 
              placeholder="8 Charactor required"
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
              value={formData.Confirmpassword}
            />
          </label>
          <br />
          <button type="submit" name="Create Account" onClick={handleLogin}>Create Account</button>
        </form>
        <Link className="create" to ='/login'>Already have an account ? Login</Link>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;