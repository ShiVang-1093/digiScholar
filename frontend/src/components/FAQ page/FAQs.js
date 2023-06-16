import React, { useState, useEffect } from "react";
import MyFaq from "./MyFaq";
import "./FAQs.css";
import ContactUs from "./ContactUs";
import 'typeface-montserrat';

const Faq = () => {
  const [data, setData] = useState();
  const [showContactForm, setShowContactForm] = useState(false);

  const handleGetInTouchClick = () => {
    setShowContactForm(true);
  };
  const getFAQData = async () => {
    const res = await fetch('http://localhost:5000/faq', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getFAQData();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>
  }
  else {
    console.log(data);
    return (
      <>
        <section className="faq-sec">
          <div className="faq-heading">
            <h3>Frequently asked question</h3>
            <p>Everything you need to know about scholarships</p>
          </div>
          {data.faqs.map((curele, index) => {
            return <MyFaq key={curele.answer} {...curele} index={index} />;
          })}
          <div className="contact-us">
            <div className="still-que">
              <h3>Still Have Questions?</h3>
              <p>If you are still confused, get in touch with our team</p>
            </div>
            <button className="touch-btn" onClick={handleGetInTouchClick}>
              Get in Touch
            </button>
          </div>
          {showContactForm && <ContactUs />}
        </section>
      </>
    );
  }
};

export default Faq;