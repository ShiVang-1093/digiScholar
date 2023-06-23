import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './SchDetails.css';
import 'typeface-montserrat';
import isLoggedIn from "../../Helpers/isLoggedin";


const SchDetails = (props) => {
  const isLoggedInUser = isLoggedIn();
  console.log("Data in sch details", props.scholarship);
  console.log("Eligibility in sch details", props.eligibility);
  const scholarshipData = props.scholarship;
  const eligibilityData = props.eligibility;
  const resourcesData = props.resources;
  const [showEligibility, setShowEligibility] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const showEligibilityContent = () => {
    setShowEligibility(true);
    setShowResources(false);
  };

  const showResourcesContent = () => {
    setShowEligibility(false);
    setShowResources(true);
  };
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    houseno: '',
    state: '',
    age: '',
    cast: '',
    income: '',
    contactNO: '',
    city: '',
    pincode: '',
    gender: '',
    qualification: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // if (!scholarship) {
  //   return <div>Scholarship not found.</div>;
  // }

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/application/", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        scholarship: scholarshipData._id,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        houseno: formData.houseno,
        state: formData.state,
        age: formData.age,
        cast: formData.cast,
        income: formData.income,
        contactNO: formData.contactNO,
        city: formData.city,
        pincode: formData.pincode,
      })
    });
    const data = await res.json();
    if (res.status == 201) {
      window.alert("Application Submitted Successfully");
    }
    else {
      window.alert(data.error);
      console.log("error in submitting: ", data.error);
    }
  }
  return (
    <div className="page-container">
      <div className='img-breif'>
        <div className="image-container">
          <img src={scholarshipData.img} alt="Your Image" />
        </div>
        <div className="brief-container">
          <h3>{scholarshipData.name}</h3>
          <li>{scholarshipData.deadline}</li>
          <li>{scholarshipData.amount}</li>
          <p>{scholarshipData.description}</p>
        </div>
      </div>
      <div className="ele-res">
        <button
          className={`ele ${showEligibility ? 'active' : ''}`}
          onClick={showEligibilityContent}
        >
          Eligibility
        </button>
        <button
          className={`res ${showResources ? 'active' : ''}`}
          onClick={showResourcesContent}
        >
          Resources
        </button>
      </div>
      {showEligibility && (
        <div className="eligibility-container">
          <h2>Eligibility Criteria</h2>
          <ul className='criterias'>
            <p>{eligibilityData}</p>
          </ul>
          {
            isLoggedInUser && (
              <button className='apply-now btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>)
          }
          {
            !isLoggedInUser && (
              <NavLink className='apply-now btn btn-primary' to="/login">Login to Apply</NavLink>)
          }
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog m0">
              <div className="modal-content m1">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Apply for KC Mahindra Scholarship program </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body ">
                  <div className="f-group-label" style={{ marginLeft: "3.2rem" }}>Basic Details</div>
                  <form className='modal-form'>
                    <div className='modal-flex1'>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-fname mb-1">First name: </div>
                        <input
                          className='modal-IO-fields'
                          id="apl1"
                          type="text"
                          name="firstname"
                          onChange={handleChange}
                          required
                          placeholder="Enter your First name"
                          value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3 mb-3'>
                        <div className="apply-email ">Email:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl3"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          required
                          placeholder="Enter your Email id"
                          value={formData.email}
                        />
                      </label> <br />
                      <div className="f-group-label" style={{ marginLeft: "3rem" }}>Address Details</div>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-houseNo">House no/Streets:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl5"
                          type="text"
                          name="houseno"
                          onChange={handleChange}
                          required
                          placeholder="Enter your house no"
                          value={formData.houseno}
                        />
                      </label> <br />
                      <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-houseNo">State:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl7"
                          type="text"
                          name="state"
                          onChange={handleChange}
                          required
                          placeholder="Enter State"
                          value={formData.state}
                        />
                      </label> <br />
                      <div className="f-group-label">Personal Details:</div>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-age">Age:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl9"
                          type="number"
                          name="age"
                          onChange={handleChange}
                          required
                          placeholder="Enter Your age"
                          value={formData.age}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-cast">Cast:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl11"
                          type="text"
                          name="cast"
                          onChange={handleChange}
                          required
                          placeholder="Enter your caste"
                          value={formData.cast}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-income">Income:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl13"
                          type="number"
                          name="income"
                          onChange={handleChange}
                          required
                          placeholder="Enter your Income"
                          value={formData.income}
                        />
                      </label> <br />
                    </div>

                    <div className='modal-flex2'>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-lname">Last Name:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl2"
                          type="text"
                          name="lastname"
                          onChange={handleChange}
                          required
                          placeholder="Enter your Last name"
                          value={formData.lastname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-number">Contact No:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl4"
                          type="text"
                          name="contactNO"
                          onChange={handleChange}
                          required
                          placeholder="Enter your Contact No"
                          value={formData.contactNO}
                        />
                      </label> <br />
                      <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">City:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl6"
                          type="text"
                          name="city"
                          onChange={handleChange}
                          required
                          placeholder="Enter your City"
                          value={formData.city}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">PinCode:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl8"
                          type="text"
                          name="pincode"
                          onChange={handleChange}
                          required
                          placeholder="Enter your pincode"
                          value={formData.pincode}
                        />
                      </label> <br />
                      <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-gender">Gender:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl10"
                          type="text"
                          name="gender"
                          onChange={handleChange}
                          required
                          placeholder="Enter your gender"
                          value={formData.gender}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">Highest qualification:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl12"
                          type="text"
                          name="qualification"
                          onChange={handleChange}
                          required
                          placeholder="Enter your Highest qualification"
                          value={formData.qualification}
                        />
                      </label> <br />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary form-button-sch" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary form-button-sch" onClick={handleSubmit}>Submit  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showResources && (
        <div className="resources-container">
          <h2>Reference links</h2>
          <ul>
            {resourcesData}
            {/* {data.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link}>{resource.name}</a>
              </li>
            ))} */}
          </ul>
          {
            isLoggedInUser && (
              <button className='apply-now btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>)
          }
          {
            !isLoggedInUser && (
              <NavLink className='apply-now btn btn-primary' to="/login">Login to Apply</NavLink>)
          }
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog m0">
              <div className="modal-content m1">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Apply for scholarship here:  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body ">
                  <div className="f-group-label" style={{ marginLeft: "3.2rem" }}>Basic Details</div>
                  <form className='modal-form'>
                    <div className='modal-flex1'>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-fname">First Name:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl1"
                          type="firstname"
                          name="firstname"
                          // onChange={handleChange}
                          required placeholder="Enter your First name"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-email">Email:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl3"
                          type="Email"
                          name="Email"
                          // onChange={handleChange}
                          required placeholder="Enter your Email id"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <div className="f-group-label" >Address Details</div>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-houseNo">House no/Streets:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl5"
                          type="houseno"
                          name="houseno"
                          // onChange={handleChange}
                          required placeholder="Enter your house no"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-houseNo">State:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl7"
                          type="state"
                          name="state"
                          // onChange={handleChange}
                          required placeholder="Enter State"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <div className="f-group-label">Personal Details</div>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-age">Age:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl9"
                          type="age"
                          name="age"
                          // onChange={handleChange}
                          required placeholder="Enter Your age"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-cast">Cast:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl11"
                          type="cast"
                          name="cast"
                          // onChange={handleChange}
                          required placeholder="Enter your caste"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-income">Income:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl13"
                          type="Income"
                          name="Income"
                          // onChange={handleChange}
                          required placeholder="Enter your Income"
                        // value={formData.firstname}
                        />
                      </label> <br />
                    </div>


                    <div className='modal-flex2'>
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-lname">Last name:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl2"
                          type="lastname"
                          name="lastname"
                          // onChange={handleChange}
                          required placeholder="Enter your Last name"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-number">Contact No:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl4"
                          type="contactNO"
                          name="contactNO"
                          // onChange={handleChange}
                          required placeholder="Enter your Contact No"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">City:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl6"
                          type="city"
                          name="city"
                          // onChange={handleChange}
                          required placeholder="Enter your City"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">PinCode:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl8"
                          type="pincode"
                          name="pincode"
                          // onChange={handleChange}
                          required placeholder="Enter your pincode"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-gender">Gender:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl10"
                          type="gender"
                          name="gender"
                          // onChange={handleChange}
                          required placeholder="Enter your gender"
                        // value={formData.firstname}
                        />
                      </label> <br />
                      <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">Highest Qualification:</div>
                        <input
                          className='modal-IO-fields'
                          id="apl12"
                          type="qualification"
                          name="qualification"
                          // onChange={handleChange}
                          required placeholder="Enter your Highest qualification"
                        // value={formData.firstname}
                        />
                      </label> <br />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn form-button-sch text-dark" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn form-button-sch" onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default SchDetails;
