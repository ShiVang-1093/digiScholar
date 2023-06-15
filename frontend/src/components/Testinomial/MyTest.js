import React, { useState } from "react";
import "./Testinomial.css";
import 'typeface-montserrat';


const MyTest = (props) => {
  const scholarshipData = props.data;
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`tstnml ${expanded ? "expanded" : "collapsed"}`}>
      <div className="tst-content">
        <h2>{scholarshipData.name}</h2>
        <p>{scholarshipData.testimonial}</p>
      </div>
    </div>
  );
};

export default MyTest;