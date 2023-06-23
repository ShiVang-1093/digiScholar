import React, { useState, useEffect } from 'react';
import SchDetails from './SchDetails';
import { useParams } from 'react-router-dom';
// import { det } from './Schapi'; // Assuming you have the data in a separate file
import './SchDetails.css';
import 'typeface-montserrat';


const Details = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [eligibility, setEligibility] = useState(null);
  const [resources, setresources] = useState(null);

  const fetchScholarship = async () => {
    const response = await fetch(`http://localhost:5000/scholarship/${id}`);
    const data = await response.json();
    console.log("Data form scholarship", data);
    setScholarship(data.scholarship);
  };
  const fetchEligibility = async () => {
    const response = await fetch(`http://localhost:5000/eligibility/scholarship/${scholarship.eligibility}`);
    const data = await response.json();
    console.log("Eligibility", data);
    setEligibility(data.eligibility);
  }

  const fetchResources = async () => {
    const response = await fetch(`http://localhost:5000/resources/scholarship/${scholarship.resources}`);
    const data = await response.json();
    console.log("Resources", data);
    setresources(data.resources);
  }
  useEffect(() => {
    const fetchData = async () => {
      await fetchScholarship();
    };

    if (scholarship !== null) {
      console.log("calling fetch elig ; Scholarship", scholarship);
      fetchEligibility();
      fetchResources();
    } else {
      fetchData();
    }
  }, [scholarship]);

  if (!scholarship) {
    return <h2>Loading...!</h2>;
  }
  else {
    return (
      <div className='det-main'>
        <SchDetails scholarship={scholarship} eligibility={eligibility} resources={resources} />
      </div>
    );
  }
};

export default Details;
