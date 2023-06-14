import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "./DigiScholar.svg";
import usericon from "./usericon.svg";
import './style.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid shadow-lg mt-0">
                    <NavLink to="/">
                        <img
                            src={Logo}
                            className="logo"
                            height="43px"
                            width="242px"
                            alt=""
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="d-flex justify-content-center"> */}
                    <div
                        className="collapse navbar-collapse items"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-1">
                                <NavLink
                                    className="nav-link active-here"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                                <div className="active-div"></div>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to="/scholarships">
                                    Scholarship
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to="/Blog">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to="/news">
                                    News
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to="/testimonial">
                                    Testimonials
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to="/faq">
                                    FAQs
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink className="nav-link" to="/signup">
                                    Signup
                                </NavLink>
                            </li>
                        </ul>
                        <NavLink to="#">
                            <img
                                src={usericon}
                                className="usericon"
                                height="30px"
                                width="36px"
                                alt=""
                            />
                        </NavLink>
                    </div>
                    {/* </div> */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
