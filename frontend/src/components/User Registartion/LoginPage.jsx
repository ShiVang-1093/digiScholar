import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";


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

  const handleLogin = (event) => {
    event.preventDefault();
    if (formData.email === '' || formData.password === '') {
      alert('Please fill in both email and password fields.');
      return;
    }

    if (!validatePassword()) {
      alert(
        'Invalid password. Please make sure it has at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one symbol.'
      );
      return;
    }
    
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    setFormData({
      email: '',
      password: '',
    });
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
    return passwordRegex.test(formData.password);
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
          <button type="submit" name="Login"onClick={handleLogin}>Login</button>
        </form>
        <Link className="create" to='/'>Don't have an account ? Create Account</Link>        
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
