import React, { useState } from "react";
import "./Testinomial.css";

const MyTest =({img,heading,paragraph,show}) => {
    const [sh,setSh] = useState(false);
    return(
        <>
        <div className="tstnml">
            <div className="sch-img">
                <img src={img} alt="Image"></img>
            </div>
            <div className="tst-content">
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <button className="read-btn" onClick={() => setSh(!sh)}>{sh ? "Read less" : "Read more"}</button>
                {sh && <p>{show}</p>}
            </div>   
        </div>
        {/* <div className="tstnml">
            <h2>{heading}</h2>
            <img className="sch-img" src={img} alt="Image"></img>
            <p>{paragraph}</p>
            <button className="read-btn" onClick={() => setSh(!sh)}>{sh ? "Read less" : "Read more"}</button>
        {sh && <p>{show}</p>}
        </div> */}
        </>
    );
};
export default MyTest;