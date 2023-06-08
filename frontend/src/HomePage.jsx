import React from 'react';
import "./Homepage.css";

const HomePage = () => {
    return (
        <>
            {/* Carousel starts */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="./Images/Header_1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/Header_2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/Header_3.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Testimonial sections starts */}
            <div className="mt-3 container d-flex justify-content-center align-items-center">
                <div className="card mx-4 testi-card testi-first-story" style={{ width: "18rem" }}>
                    <img src="./Images/Testi_Home_1.png" className="card-img-top" alt="Testi_Story" />
                    <div className="card-body">
                        <h5 className="card-title">“This scholarship influenced my decision to attend Illinois.”</h5>
                        <p className="card-text">Community Health, Class of 2025. Recipient of the Larry and Patricia Askew Scholarship</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#" className="btn btn-primary testi-btn">Know More</a>
                        </div>
                    </div>
                </div>
                <div className="card mx-4 testi-card testi-first-story" style={{ width: "18rem" }}>
                    <img src="./Images/Testi_Home_2.png" className="card-img-top" alt="Testi_Story" />
                    <div className="card-body">
                        <h5 className="card-title">“I continue to be thankful for financial support.”</h5>
                        <p className="card-text">Recipient of the Jane Phillips Donaldson Scholarship</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#" className="btn btn-primary testi-btn">Know More</a>
                        </div>
                    </div>
                </div>
                <div className="card mx-4 testi-card testi-third-story" style={{ width: "18rem" }}>
                    <img src="./Images/Testi_Home_3.png" className="card-img-top" alt="Testi_Story" />
                    <div className="card-body">
                        <h5 className="card-title">“This scholarship allows me to approach my day to day with less of a worry.”</h5>
                        <p className="card-text">Recipient of the Lawrence Reuss and Florence House Reuss Family Scholarship</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#" className="btn btn-primary testi-btn">Know More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Find best scholarship section  */}
            <div className="container d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img src="./Images/Find_Best_1.png" id="find-best-1" alt="" />
                    {/* <img src="./Images/Find_Best_2.png" id="find-best-2" alt="" /> */}
                </div>
                <div className="col-md-6">
                    <div className="">
                        <h1>ABC Corporation Scholarship:</h1>
                        <p>
                            The ABC Corporation Scholarship is open to undergraduate students pursuing degrees in business or technology fields. The scholarship aims to support students with exceptional academic achievements and leadership potential. Recipients will receive a financial award of $5,000 to assist with tuition fees and educational expenses.
                        </p>
                        <a href="#" className="btn btn-primary testi-btn">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-end align-items-center">
                <div className="col-md-6">
                    <div className="">
                        <h1>International Peace Scholarship::</h1>
                        <p>
                            The International Peace Scholarship is a prestigious award offered to women from countries outside the United States and Canada who are pursuing graduate degrees in any field of study. The scholarship is administered by the P.E.O. Sisterhood, a philanthropic organization dedicated to empowering women through education. Recipients are chosen based on their academic achievements, financial need, and dedication to promoting peace and understanding. The scholarship provides funding of up to $12,500 per academic year.
                        </p>
                        <a href="#" className="btn btn-primary testi-btn">Learn More</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="./Images/Find_Best_1.png" id="find-best-1" alt="" />
                    {/* <img src="./Images/Find_Best_2.png" id="find-best-2" alt="" /> */}
                </div>
            </div>

            {/* Stay updated with new section */}
            <div className="d-flex justify-content-center align-items-center flex-column">
                <center><h1 className='mt-3'>Stay updated with a news</h1></center>
                <div className="container d-flex justify-content-around align-items-center">
                    <div className="card mx-4" style={{ width: "25rem" }}>
                        <img src="./Images/News_1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">"Local University Establishes Renewable Energy Scholarship to Support Future Innovators"</h5>
                            <p className="card-text">The article discusses how a local university has introduced a new scholarship program aimed at supporting students pursuing degrees in renewable energy. The scholarship will provide financial assistance to promising individuals dedicated to driving sustainable energy solutions</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src="./Images/News_2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tech giants launches AI scholarship program for underrepresnted communities</h5>
                            <p className="card-text">The article discusses how a local university has introduced a new scholarship program aimed at supporting students pursuing degrees in renewable energy. The scholarship will provide financial assistance to promising individuals dedicated to driving sustainable energy solutions</p>
                        </div>
                    </div>
                </div>
                <div className="ms-auto me-5 d-flex justify-content-end">
                    <a href="#" className="see-more-link">See More News</a>
                </div>
            </div>

            {/* Browse the Blogs section */}
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <center><h1 className='mt-3'>Browse the Blogs</h1></center>
                <div className="container d-flex justify-content-around align-items-center">
                    <div className="card mx-4" style={{ width: "25rem" }}>
                        <img src="./Images/Blog_1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">"Local University Establishes Renewable Energy Scholarship to Support Future Innovators"</h5>
                            <p className="card-text">The article discusses how a local university has introduced a new scholarship program aimed at supporting students pursuing degrees in renewable energy. The scholarship will provide financial assistance to promising individuals dedicated to driving sustainable energy solutions</p>
                        </div>
                    </div>
                    <div className="card mx-4" style={{ width: "25rem" }}>
                        <img src="./Images/Blog_2.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tech giants launches AI scholarship program for underrepresnted communities</h5>
                            <p className="card-text">The article discusses how a local university has introduced a new scholarship program aimed at supporting students pursuing degrees in renewable energy. The scholarship will provide financial assistance to promising individuals dedicated to driving sustainable energy solutions</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src="./Images/Blog_3.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tech giants launches AI scholarship program for underrepresnted communities</h5>
                            <p className="card-text">The article discusses how a local university has introduced a new scholarship program aimed at supporting students pursuing degrees in renewable energy. The scholarship will provide financial assistance to promising individuals dedicated to driving sustainable energy solutions</p>
                        </div>
                    </div>
                </div>
                <div className="ms-auto me-5 d-flex justify-content-end">
                    <a href="#" className="see-more-link">See More Blogs</a>
                </div>
            </div>


            {/* Frequently asked question section */}
            <div className="container d-flex flex-column align-items-stretch">
                <center>
                    <h1>Frequently Asked Questions</h1>
                    <p>Everything you need to know about the Scholarship </p>
                </center>
                <div className="d-flex justify-content-center align-items-center faq-accr">
                    <div className="col-md-7">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item m-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Do I have to repay scholarships?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        No, scholarships are typically awarded as a gift and do not need to be repaid. However, it's important to note that some scholarships may have specific requirements, such as maintaining a certain GPA or fulfilling service obligations, to retain the scholarship throughout the duration of your studies.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item m-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How can I apply for scholarships?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        To apply for scholarships, you can start by researching scholarship opportunities offered by various organizations, including educational institutions, government agencies, private foundations, and corporations. Pay attention to the eligibility criteria and application deadlines. Typically, you'll need to submit an application form, provide supporting documents such as academic records or recommendation letters, and possibly write an essay or complete an interview process.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item m-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can I receive multiple scholarships?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Yes, it's possible to receive multiple scholarships. Many organizations offer different scholarships, and you can apply for and be awarded multiple ones if you meet the eligibility criteria. However, it's important to review the terms and conditions of each scholarship to ensure they don't have any restrictions or conflicts regarding receiving multiple awards. Additionally, you may need to report and coordinate the scholarships with your educational institution's financial aid office to ensure compliance and avoid any potential issues.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 d-flex flex-1 mx-4 jusitfy-content-center align-items-center flex-column still-que flex-fill align-self-stretch">
                        <h2>Still have questions</h2>
                        <p>Can't find answer you're looking for?</p>
                        <div className="btn btn-primary testi-btn">Get in touch</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container mt-3 d-flex justify-content-center align-items-center h-100">
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center faq-contact flex-grow-1">
                    <h2>Contact Us</h2>
                    <div className="d-flex justify-content-center align-items-between flex-column flex-grow-1">
                        <div className="row d-flex mb-3">
                            <div className="col-3"><img src="./Images/phone.png" alt="" /></div>
                            <div className="col-9">+91 1234567890</div>
                        </div>
                        <div className="row d-flex justify-content-end mb-3">
                            <div className="col-3"><img src="./Images/mail.png" alt="" /></div>
                            <div className="col-9">digischolar@gmail.com</div>
                        </div>
                        <div className="row">
                            <div className="col-3"><img src="./Images/location.png" alt="" /></div>
                            <div className="col-9">India</div>
                        </div>
                        <div className="d-flex justify-content-center mt-5 align-items-center flex-row">
                            <img className="mx-3" height={30} src="./Images/twitter.png" alt="" />
                            <img className="mx-3" height={30} src="./Images/linkedin.png" alt="" />
                            <img className="mx-3" height={30} src="./Images/insta.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8 faq-options">
                    <h2>Options</h2>
                    <div className="row">
                        <div className="col-3">
                            <li className="faq-options-li">Home</li>
                            <li className="faq-options-li">Scholarship</li>
                            <li className="faq-options-li">Blogs</li>
                            <li className="faq-options-li">News</li>
                            <li className="faq-options-li">Testimonials</li>
                            <li className="faq-options-li">FAQs</li>
                        </div>
                        <div className="col-9 d-flex justify-content-center align-items-center">
                            <img src="./Images/digiScholar.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5"></div>

        </>
    )
}

export default HomePage;