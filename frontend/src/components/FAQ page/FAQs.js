import React, { useState } from "react";
import { que } from "./Api";
import MyFaq from "./MyFaq";
import "./FAQs.css";
import ContactUs from "./ContactUs";

const Faq = () => {
  const [data, setData] = useState(que);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleGetInTouchClick = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <section className="faq-sec">
        <div className="heading">
          <h3>Frequently asked question</h3>
          <p>Everything you need to know about scholarships</p>
        </div>
        {data.map((curele) => {
          return <MyFaq key={curele.answer} {...curele} />;
        })}
      <div className="contact-us">
        <div>
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
};

export default Faq;







// import React, { useState } from "react";
// import { que } from "./Api";
// import MyFaq from "./MyFaq";
// import "./FAQs.css";
// import ContactUs from "./ContactUs";

// const Faq =() => {
//   const [data,setData] = useState(que);
//     return(
//       <>
//       <>
//       <section className="faq-sec">
//       <div className="heading">
//         <h3>Frequently asked question</h3>
//         <p>Every thing you need to know about scholarship</p>
//       </div>
//         {
//           data.map((curele) => {
//             return <MyFaq key={curele.answer} {...curele}/>;
//           })
//         }
//         </section>  
//         <section className="contact-us">
//           <div>
//             <h3>Still Have Questions ?</h3>
//             <p>If you are still confused ? get in touch with our team</p>
//           </div>
//           <button className="touch">Get in Touch</button>
//         </section>
//         </> 
//         </>
          
//     )
// }
// export default Faq;