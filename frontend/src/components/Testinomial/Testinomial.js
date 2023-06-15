import React, { useState, useEffect } from "react";
import MyTest from "./MyTest";
import { testdata } from "./testapi";
import "./Testinomial.css";
import 'typeface-montserrat';



const Testinomial = () => {
    const [tests, setTests] = useState();

    const getTestData = async () => {
        const res = await fetch('http://localhost:5000/testimonial', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        setTests(data);
    };
    useEffect(() => {
        getTestData();
    }, []);

    if (!tests) {
        return <h1>Loading...</h1>
    }
    else {
        console.log(tests.testimonials);
        return (
            <div className="tst-flex">
                <h3 className="tst-heading">Stories of successfull scholarships</h3>
                {
                    tests.testimonials.map((testd, index) => {
                        return <MyTest key={index} data={testd} />;
                    })
                }
            </div>
        )
    }
}
export default Testinomial;