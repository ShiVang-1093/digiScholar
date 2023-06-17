import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import isLoggedin from "./Helpers/isLoggedin";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
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

  useEffect(() => {
    if (isLoggedin()) {
      window.location.href = "/";
    }
  });
  const handleLogin = async (event) => {
    event.preventDefault();

    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    setFormData({
      email: '',
      password: '',
    });

    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });
    const resJson = await res.json();
    console.log(resJson);
    if (res.status == 400 || res.status == 500 || !res) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }
    else if (res.status == 200) {
      window.alert("Login Successful");
      localStorage.setItem("jwt", resJson.token);
      console.log("Login Successful");
      window.location.href = "/";
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-flex1">
          <div className="login-heading">Login To Your Account</div>
          <div className="login-form1">
            <form >
              <label className="w-100 form-label">
                <div className="login-mail ms-0 p-0">Email:</div>
                <input
                  id="dcs3"
                  type="email"
                  name="email"
                  style={{ fontSize: '28px' }}
                  onChange={handleChange}
                  className="mb-3"
                  required placeholder="abc@gmail.com"
                  value={formData.email}
                />
              </label >
              <label className="w-100 form-label">
                <div className="login-password ms-0 p-0">Password:</div>
                <input
                  id="dcs4"
                  type="password"
                  name="password"
                  style={{ fontSize: '28px' }}
                  onChange={handleChange}
                  className=""
                  required placeholder="8 character required"
                  value={formData.password}
                />
              </label>
              <br />
              {<button type="submit" className="mt-3 mb-3" name="Login" onClick={handleLogin} id="dsc1">Login</button>}
            </form>
            {<div id="dcs7" className="mt-0">Don't have an account ? <Link to="/signup">Create Account</Link></div>}
          </div>
        </div>
        <div className="login-flex2">
          <div className="login-heading2">First step towards your dream Scholarship</div>
          <img id="dcs2" className="img-fluid me-3 p-0 m-0" src="./Images/Graduation 2.svg" alt="Error" srcset="" />
        </div>
      </div >
    </div >
  );
}

export default LoginPage;