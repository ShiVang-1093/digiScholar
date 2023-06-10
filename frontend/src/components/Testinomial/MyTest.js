import React, { useState } from "react";
import "./Testinomial.css";

const MyTest = ({ id, name, testimonial }) => {
    const [sh, setSh] = useState(false);
    return (
        <>
            <div className="tstnml">
                {/* <div className="sch-img">
                    <img src={img} alt="Image"></img>
                </div> */}
                <div className="tst-content">
                    <h2>{name}</h2>
                    <p>{testimonial}</p>
                    {/* <button className="read-btn" onClick={() => setSh(!sh)}>{sh ? "Read less" : "Read more"}</button>
                    {sh && <p>{show}</p>} */}
                </div>
            </div>
        </>
    );
};
export default MyTest;