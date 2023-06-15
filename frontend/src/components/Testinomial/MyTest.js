import React, { useState } from "react";
import "./Testinomial.css";

const MyTest = ({ img, heading, paragraph, show }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`tstnml ${expanded ? "expanded" : "collapsed"}`}>
      <div className="sch-img">
        <img src={img} alt="Image" />
      </div>
      <div className="tst-content">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        {expanded && <p>{show}</p>}
        <button className="read-btn" onClick={toggleContent}>
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

export default MyTest;