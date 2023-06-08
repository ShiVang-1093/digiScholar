import React, { useState } from 'react';
import './SchDetails.css';

const SchDetails = ({ data }) => {
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

  return (
    <div className="page-container">
      <div className='img-breif'>
        <div className="image-container">
          <img src={data.img} alt="Your Image" />
        </div>
        <div className="brief-container">
          <h3>{data.head}</h3>
          <ul>
            {data.content.map((content, index) => (
              <li key={index}>
                <>{content}</>
              </li>
            ))}
          </ul>          
          <p>{data.para}</p>
        </div>
      </div>
      <div className="ele-res">
        <button className='ele' onClick={showEligibilityContent}>Eligibility</button>
        <button className='res' onClick={showResourcesContent}>Resources</button>
      </div>
      {showEligibility && (
        <div className="eligibility-container">
          <h2>Eligibility Criteria</h2>
          <p>{data.eligibility}</p>
          <button className='apply-now'>Apply Now</button>
        </div>
      )}
      {showResources && (
        <div className="resources-container">
          <h2>Reference links</h2>
          <ul>
            {data.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link}>{resource.name}</a>
              </li>
            ))}
          </ul>
          <button className='apply-now'>Apply Now</button>
        </div>
      )}
    </div>
  );
};

export default SchDetails;









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