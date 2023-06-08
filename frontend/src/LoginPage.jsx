import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
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
    localStorage.setItem("jwt", resJson.token);
    if (res.status == 400 || res.status == 500 || !res) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }
    else if (res.status == 200) {
      window.alert("Login Successful");
      console.log("Login Successful");
    }
  };

  return (
    <div className="main">
      <div className="flex1">
        <div className="text">First step towards your dream Scholarship</div>
        <img className="img" src="./Images/Graduation 2.png" alt="Error" srcset="" />
      </div>
      <div className="flex2">
        <div className="heading">Login To Your Account</div>
        <div className="form1">
          <form>
            <label>
              <div className="mail2">Email</div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required placeholder="abc@gmail.com"
                value={formData.email}
              />
            </label >
            <br />
            <label>
              <div className="pwd2">Password</div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required placeholder="8 Charactor required"
                value={formData.password}
              />
            </label>
            <br />
            <button type="submit" name="Login" onClick={handleLogin}>Login</button>
          </form>
          <div className="create">Don't have an account ? <Link to="/signup">Create Account</Link></div>
        </div>
      </div>
    </div>
  );
}


export default LoginPage;