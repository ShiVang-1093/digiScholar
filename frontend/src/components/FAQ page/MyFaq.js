import React, { useState } from "react";
import "./FAQs.css";

const MyFaq =({question,answer}) => {
    const [show,setShow] = useState(false);
    return(
        <div className="faqs-flex">
        <div className="faq">
            <button onClick={() => setShow(!show)}>{show ? "–" : "+"}</button>
            <div className="que">{question}</div>
            <div className="ans">
                {show && <p>{answer}</p>}
            </div>
        </div>
        </div>
    )
}
export default MyFaq;