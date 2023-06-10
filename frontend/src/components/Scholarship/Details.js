import React from 'react';
import SchDetails from './SchDetails';
import { det } from './Schapi'; // Assuming you have the data in a separate file
import './SchDetails.css';

const Details = () => {
  return (
    <div className='det-main'>
      {det.map((item, index) => (
        <SchDetails key={index} data={item} />
      ))}
    </div>
  );
};

export default Details;
