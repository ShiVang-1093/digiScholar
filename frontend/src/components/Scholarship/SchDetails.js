import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SchDetails.css';
import 'typeface-montserrat';


const SchDetails = (props) => {
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

  // if (!scholarship) {
  //   return <div>Scholarship not found.</div>;
  // }

  return (
    <div className="page-container">
      <div className='img-breif'>
        <div className="image-container">
          <img src={scholarshipData.img} alt="Your Image" />
        </div>
        <div className="brief-container">
          <ul>{scholarshipData.name}</ul>
          <ul>{scholarshipData.deadline}</ul>
          <ul>{scholarshipData.amount}</ul>
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
          <button className='apply-now btn btn-primary'  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        
        
         <div class="modal-dialog m0">
            <div class="modal-content m1"> 
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Apply for KC Mahindra Scholarship program </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>


              <div class="modal-body ">
                <div>basic details</div>


                <from className='modal-form'>
                <div className='modal-flex1'>
                    <label className='modal-fields'>
                    <div className="apply-fname">First name</div>
                    <input
                    className='modal-IO-fields'
                      id="apl1"
                      type="firstname"
                      name="firstname"
                      // onChange={handleChange}
                      required placeholder="Enter your First name"
                      // value={formData.firstname}
                    />
                  </label>
                    <label className='modal-fields'>
                    <div className="apply-email">Email</div>
                    <input
                    className='modal-IO-fields'
                      id="apl3"
                      type="Email"
                      name="Email"
                      // onChange={handleChange}
                      required placeholder="Enter your Email id"
                      // value={formData.firstname}
                    />
                  </label>
                  <div>Address details</div>
                  <label className='modal-fields'>
                    <div className="apply-houseNo">House no/Streets</div>
                    <input
                    className='modal-IO-fields'
                      id="apl5"
                      type="houseno"
                      name="houseno"
                      // onChange={handleChange}
                      required placeholder="Enter your house no"
                      // value={formData.firstname}
                    />
                  </label>
                  <label className='modal-fields'>
                    <div className="apply-houseNo">State</div>
                    <input
                    className='modal-IO-fields'
                      id="apl7"
                      type="state"
                      name="state"
                      // onChange={handleChange}
                      required placeholder="Enter State"
                      // value={formData.firstname}
                    />
                  </label>
                  <div>personal details</div>
                  <label className='modal-fields'>
                    <div className="apply-age">Age</div>
                    <input
                    className='modal-IO-fields'
                      id="apl9"
                      type="age"
                      name="age"
                      // onChange={handleChange}
                      required placeholder="Enter Your age"
                      // value={formData.firstname}
                    />
                  </label>
                  <label className='modal-fields'>
                    <div className="apply-cast">cast</div>
                    <input
                    className='modal-IO-fields'
                      id="apl11"
                      type="cast"
                      name="cast"
                      // onChange={handleChange}
                      required placeholder="Enter your caste"
                      // value={formData.firstname}
                    />
                  </label>
                  <label className='modal-fields'>
                    <div className="apply-income">Income</div>
                    <input
                    className='modal-IO-fields'
                      id="apl13"
                      type="Income"
                      name="Income"
                      // onChange={handleChange}
                      required placeholder="Enter your Income"
                      // value={formData.firstname}
                    />
                  </label>
                </div>


                <div className='modal-flex2'>
                        <label className='modal-fields'>
                        <div className="apply-lname">Last name</div>
                        <input
                        className='modal-IO-fields'
                          id="apl2"
                          type="lastname"
                          name="lastname"
                          // onChange={handleChange}
                          required placeholder="Enter your Last name"
                          // value={formData.firstname}
                        />
                      </label>
                        <label className='modal-fields'>
                        <div className="apply-number">Contact no</div>
                        <input
                        className='modal-IO-fields'
                          id="apl4"
                          type="contactNO"
                          name="contactNO"
                          // onChange={handleChange}
                          required placeholder="Enter your Contact No"
                          // value={formData.firstname}
                        />
                      </label>
                      <br/>
                        <label className='modal-fields'>
                        <div className="apply-city">City</div>
                        <input
                        className='modal-IO-fields'
                          id="apl6"
                          type="city"
                          name="city"
                          // onChange={handleChange}
                          required placeholder="Enter your City"
                          // value={formData.firstname}
                        />
                      </label>
                        <label className='modal-fields'>
                        <div className="apply-city">pincode</div>
                        <input
                        className='modal-IO-fields'
                          id="apl8"
                          type="pincode"
                          name="pincode"
                          // onChange={handleChange}
                          required placeholder="Enter your pincode"
                          // value={formData.firstname}
                        />
                      </label>
                      <br/>
                      <label className='modal-fields'>
                        <div className="apply-gender">Gender</div>
                        <input
                        className='modal-IO-fields'
                          id="apl10"
                          type="gender"
                          name="gender"
                          // onChange={handleChange}
                          required placeholder="Enter your gender"
                          // value={formData.firstname}
                        />
                      </label>
                      <label className='modal-fields'>
                        <div className="apply-city">Highest qualification</div>
                        <input
                        className='modal-IO-fields'
                          id="apl12"
                          type="qualification"
                          name="qualification"
                          // onChange={handleChange}
                          required placeholder="Enter your Highest qualification"
                          // value={formData.firstname}
                        />
                      </label>
                </div>
                </from>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">submit  </button>
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
          <button className='apply-now btn btn-primary'  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Apply Now</button>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        
        
         <div class="modal-dialog m0">
            <div class="modal-content m1"> 
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Apply for KC Mahindra Scholarship program </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>


              <div class="modal-body ">
                <div>basic details</div>


                <from className='modal-form'>
                <div className='modal-flex1'>
                    <label className='modal-fields'>
                    <div className="apply-fname">First name</div>
                    <input
                    className='modal-IO-fields'
                      id="apl1"
                      type="firstname"
                      name="firstname"
                      // onChange={handleChange}
                      required placeholder="Enter your First name"
                      // value={formData.firstname}
                    />
                  </label>
                    <label className='modal-fields'>
                    <div className="apply-email">Email</div>
                    <input
                    className='modal-IO-fields'
                      id="apl3"
                      type="Email"
                      name="Email"
                      // onChange={handleChange}
                      required placeholder="Enter your Email id"
                      // value={formData.firstname}
                    />
                  </label>
                  <div>Address details</div>
                  <label className='modal-fields'>
                    <div className="apply-houseNo">House no/Streets</div>
                    <input
                    className='modal-IO-fields'
                      id="apl5"
                      type="houseno"
                      name="houseno"
                      // onChange={handleChange}
                      required placeholder="Enter your house no"
                      // value={formData.firstname}
                    />
                  </label>
                  <label className='modal-fields'>
                    <div className="apply-houseNo">State</div>
                    <input
                    className='modal-IO-fields'
                      id="apl7"
                      type="state"
                      name="state"
                      // onChange={handleChange}
                      required placeholder="Enter State"
                      // value={formData.firstname}
                    />
                  </label>
                  <div>personal details</div>
                  <label className='modal-fields'>
                    <div className="apply-age">Age</div>
                    <input
                    className='modal-IO-fields'
                      id="apl9"
                      type="age"
                      name="age"
                      // onChange={handleChange}
                      required placeholder="Enter Your age"
                      // value={formData.firstname}
                    />
                  </label>
                  <label className='modal-fields'>
                    <div className="apply-cast">cast</div>
                    <input
                    className='modal-IO-fields'
                      id="apl11"
                      type="cast"
                      name="cast"
                      // onChange={handleChange}
                      required placeholder="Enter your caste"
                      // value={formData.firstname}
                    />
                  </label>
                  <label className='modal-fields'>
                    <div className="apply-income">Income</div>
                    <input
                    className='modal-IO-fields'
                      id="apl13"
                      type="Income"
                      name="Income"
                      // onChange={handleChange}
                      required placeholder="Enter your Income"
                      // value={formData.firstname}
                    />
                  </label>
                </div>


                <div className='modal-flex2'>
                        <label className='modal-fields'>
                        <div className="apply-lname">Last name</div>
                        <input
                        className='modal-IO-fields'
                          id="apl2"
                          type="lastname"
                          name="lastname"
                          // onChange={handleChange}
                          required placeholder="Enter your Last name"
                          // value={formData.firstname}
                        />
                      </label>
                        <label className='modal-fields'>
                        <div className="apply-number">Contact no</div>
                        <input
                        className='modal-IO-fields'
                          id="apl4"
                          type="contactNO"
                          name="contactNO"
                          // onChange={handleChange}
                          required placeholder="Enter your Contact No"
                          // value={formData.firstname}
                        />
                      </label>
                      <br/>
                        <label className='modal-fields'>
                        <div className="apply-city">City</div>
                        <input
                        className='modal-IO-fields'
                          id="apl6"
                          type="city"
                          name="city"
                          // onChange={handleChange}
                          required placeholder="Enter your City"
                          // value={formData.firstname}
                        />
                      </label>
                        <label className='modal-fields'>
                        <div className="apply-city">pincode</div>
                        <input
                        className='modal-IO-fields'
                          id="apl8"
                          type="pincode"
                          name="pincode"
                          // onChange={handleChange}
                          required placeholder="Enter your pincode"
                          // value={formData.firstname}
                        />
                      </label>
                      <br/>
                      <label className='modal-fields'>
                        <div className="apply-gender">Gender</div>
                        <input
                        className='modal-IO-fields'
                          id="apl10"
                          type="gender"
                          name="gender"
                          // onChange={handleChange}
                          required placeholder="Enter your gender"
                          // value={formData.firstname}
                        />
                      </label>
                      <label className='modal-fields'>
                        <div className="apply-city">Highest qualification</div>
                        <input
                        className='modal-IO-fields'
                          id="apl12"
                          type="qualification"
                          name="qualification"
                          // onChange={handleChange}
                          required placeholder="Enter your Highest qualification"
                          // value={formData.firstname}
                        />
                      </label>
                </div>
                </from>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">submit  </button>
              </div>
            </div>
          </div>
        </div>
        
        
        </div>
      )}
    </div>
  );
};

export default SchDetails;









// import React, { useState } from 'react';
// import './SchDetails.css';
// import 'typeface-montserrat';


// const SchDetails = ({ data }) => {
//   const [showEligibility, setShowEligibility] = useState(false);
//   const [showResources, setShowResources] = useState(false);

//   const showEligibilityContent = () => {
//     setShowEligibility(true);
//     setShowResources(false);
//   };

//   const showResourcesContent = () => {
//     setShowEligibility(false);
//     setShowResources(true);
//   };

//   return (
//     <div className="page-container">
//       <div className='img-breif'>
//         <div className="image-container">
//           <img src={data.img} alt="Your Image" />
//         </div>
//         <div className="brief-container">
//           <h3>{data.head}</h3>
//           <ul>
//             {data.content.map((content, index) => (
//               <li key={index}>
//                 <>{content}</>
//               </li>
//             ))}
//           </ul>          
//           <p>{data.para}</p>
//         </div>
//       </div>
//       <div className="ele-res">
//         <button
//           className={`ele ${showEligibility ? 'active' : ''}`}
//           onClick={showEligibilityContent}
//         >
//           Eligibility
//         </button>
//         <button
//           className={`res ${showResources ? 'active' : ''}`}
//           onClick={showResourcesContent}
//         >
//           Resources
//         </button>
//       </div>
//       {showEligibility && (
//         <div className="eligibility-container">
//           <h2>Eligibility Criteria</h2>
//           <ul className='criterias'>
//             {data.eligibility.map((eligibility, index) => (
//               <li key={index}>
//                 <>{eligibility}</>
//               </li>
//             ))}
//           </ul>
//           <button className='apply-now'>Apply Now</button>
//         </div>
//       )}
//       {showResources && (
//         <div className="resources-container">
//           <h2>Reference links</h2>
//           <ul>
//             {data.resources.map((resource, index) => (
//               <li key={index}>
//                 <a href={resource.link}>{resource.name}</a>
//               </li>
//             ))}
//           </ul>
//           <button className='apply-now'>Apply Now</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SchDetails;









// import React, { useState } from 'react';
// import './SchDetails.css';

// const SchDetails = ({ data }) => {
//   const [showEligibility, setShowEligibility] = useState(false);
//   const [showResources, setShowResources] = useState(false);

//   const showEligibilityContent = () => {
//     setShowEligibility(true);
//     setShowResources(false);
//   };

//   const showResourcesContent = () => {
//     setShowEligibility(false);
//     setShowResources(true);
//   };

//   return (
//     <div className="page-container">
//     <div className='img-breif'>
//       <div className="image-container">
//         <img src={data.img} alt="Your Image" />
//       </div>
//       <div className="brief-container">
//         <p>{data.para}</p>
//       </div>
//       </div>
//         <div className="ele-res">
//           <button className='ele' onClick={showEligibilityContent}>Eligibility</button>
//           <button className='res' onClick={showResourcesContent}>Resources</button>
//         </div>
//         {showEligibility && (
//           <div className="eligibility-container">
//             <h2>Eligibility Criteria</h2>
//             <p>{data.eligibility}</p>
//           </div>
//         )}
//         {showResources && (
//           <div className="resources-container">
//             <h2>Reference links</h2>
//             <ul>
//               {data.resources.map((resource, index) => (
//                 <li key={index}>
//                   <a href={resource.link}>{resource.name}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//     </div>
//   );
// };

// export default SchDetails;