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
          <button className='apply-now'>Apply Now</button>
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
          <button className='apply-now'>Apply Now</button>
        </div>
      )}
    </div>
  );
};

export default SchDetails;