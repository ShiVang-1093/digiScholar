import React, { useState, useEffect } from "react";
import "./FAQs.css";
import 'typeface-montserrat';

const MyFaq = ({ question, answer, index }) => {
    const [show, setShow] = useState(false);
    const accordionId = `accordionExample-${index}`;
    const collapseId = `collapse-${index}`;

    useEffect(() => {
        setShow(false); // Ensure accordion is initially collapsed
    }, []);

    const toggleAccordion = () => {
        setShow(!show);
    };

    return (
        <div className="d-flex justify-content-center align-items-center faq-accr">
            <div className="col-md-11">
                <div className="accordion" id={accordionId}>
                    <div className="accordion-item m-0">
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${show ? "" : "collapsed"}`} type="button" onClick={toggleAccordion} aria-expanded={show ? "true" : "false"} aria-controls={collapseId}>
                                {question}
                            </button>
                        </h2>
                        <div id={collapseId} className={`accordion-collapse collapse ${show ? "show" : ""}`} data-bs-parent={`#${accordionId}`}>
                            <div className="accordion-body">
                                {answer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFaq;
