import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import Logo from "./DigiScholar.svg";
import usericon from "./usericon.svg";
import './style.css';
import isLoggedin from '../../Helpers/isLoggedin';

const Navbar = () => {
    const isLoggedIn = isLoggedin(); // Check if the user is logged in
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                    <div
                        className="collapse navbar-collapse items ms-auto"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-1">
                                <NavLink
                                    exact
                                    className={({ isActive }) =>
                                        "nav-link" + (isActive ? " active-div" : "")
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link" + (isActive ? " active-div" : "")
                                    }
                                    to="/scholarships"
                                >
                                    Scholarship
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active-div' : ''}`
                                    }
                                    to="/Blog"
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active-div' : ''}`
                                    }
                                    to="/news"
                                >
                                    News
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active-div' : ''}`
                                    }
                                    to="/testimonial"
                                >
                                    Testimonials
                                </NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active-div' : ''}`
                                    }
                                    to="/faq"
                                >
                                    FAQs
                                </NavLink>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li className="nav-item ms-3">
                                        <NavLink
                                            className={({ isActive }) =>
                                                `nav-link${isActive ? ' active-div' : ''}`
                                            }
                                            to="/logout"
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <NavLink
                                            className={({ isActive }) =>
                                                `nav-link${isActive ? ' active-div' : ''}`
                                            }
                                            to="/profile"
                                        >
                                            <img src={usericon} alt="" height={30} className='m-0 p-0 mb-1' />
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item ms-3">
                                        <NavLink
                                            className={({ isActive }) =>
                                                `nav-link${isActive ? ' active-div' : ''}`
                                            }
                                            to="/login"
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ms-3">
                                        <NavLink
                                            className={({ isActive }) =>
                                                `nav-link${isActive ? ' active-div' : ''}`
                                            }
                                            to="/signup"
                                        >
                                            Signup
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;
