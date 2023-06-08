import React, { useState } from "react";
import MyTest from "./MyTest";
import { testdata } from "./testapi";
import "./Testinomial.css";


const Testinomial =() => {
    const [tests,setTests] = useState(testdata);

    return(
        <div className="tst-flex">
        <h3 className="tst-heading">Stories of successfull scholarships</h3>
        {
            tests.map((testd,index) => {
                return <MyTest key={index} {...testd}/>;    
              })
        }
        </div>
    )
}
export default Testinomial;