import React from 'react';
import { NavLink } from 'react-router-dom';
// 
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/signup';

    // Render the footer component conditionally
    if (isLoginPage || isSignupPage) {
        return null; // Return null to hide the footer
    }
    return (
        <div id='footer-sec' className="container-fluid mt-3 d-flex justify-content-center align-items-center h-100">
            <div className="footer-inner ol-md-4 d-flex flex-column justify-content-center align-items-center faq-contact flex-grow-1">
                <h2>Contact Us</h2>
                <div className="footerone d-flex justify-content-center align-items-between flex-column flex-grow-1">
                    <div className="rowone d-flex mb-3">
                        <div className="col-3"><img className="phnimg" src="./Images/phone.png" alt="" /></div>
                        <div className="col-9">+91 1234567890</div>
                    </div>
                    <div className="rowtwo d-flex justify-content-end mb-3">
                        <div className="col-3"><img className="mailimg" src="./Images/mail.png" alt="" /></div>
                        <div className="col-9">digischolar@gmail.com</div>
                    </div>
                    <div className="rowthree">
                        <div className="col-3"><img className="locimg" src="./Images/location.png" alt="" /></div>
                        <div className="india">India</div>
                    </div>
                    <div className="rowfour d-flex justify-content-center mt-5 align-items-center flex-row">
                        <img className="mx-3" height={30} src="./Images/twitter.png" alt="" />
                        <img className="mx-3" height={30} src="./Images/linkedin.png" alt="" />
                        <img className="mx-3" height={30} src="./Images/insta.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="opt col-md-8 faq-options ms-3">
                <h2>Options</h2>
                <div className="row">
                    <div className="col-3">
                        <li className='faq-options-li'>
                            <NavLink to="/" className="faq-options text-decoration-none">Home</NavLink>
                        </li>
                        <li className='faq-options-li'>
                            <NavLink to="/scholarships" className="faq-options text-decoration-none">Scholarship</NavLink>
                        </li>
                        <li className='faq-options-li'>
                            <NavLink to="/Blog" className="faq-options text-decoration-none">Blogs</NavLink>
                        </li>
                        <li className='faq-options-li'>
                            <NavLink to="/news" className="faq-options text-decoration-none text-decoration-none">News</NavLink>
                        </li>
                        <li className='faq-options-li'>
                            <NavLink to="/testimonial" className="faq-options text-decoration-none">Testimonials</NavLink>
                        </li>
                        <li className='faq-options-li'>
                            <NavLink to="/faq" className="faq-options text-decoration-none">FAQs</NavLink>
                        </li>
                    </div>
                    <div className="digiimg col-9 d-flex justify-content-center align-items-center">
                        <img src="./Images/digiScholar.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;