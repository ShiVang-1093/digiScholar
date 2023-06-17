import React, { useState } from 'react';

const SchForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        houseno: '',
        state: '',
        age: '',
        cast: '',
        income: '',
        contactNO: '',
        city: '',
        pincode: '',
        gender: '',
        qualification: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <>
            <form className='modal-form'>
                <div className='modal-flex1'>
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-fname mb-1">First name: </div>
                        <input
                            className='modal-IO-fields'
                            id="apl1"
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            required
                            placeholder="Enter your First name"
                            value={formData.firstname}
                        />
                    </label> <br />
                    <label className='modal-fields w-50 mb-3 mb-3'>
                        <div className="apply-email ">Email:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl3"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                            placeholder="Enter your Email id"
                            value={formData.email}
                        />
                    </label> <br />
                    <div className="f-group-label" style={{ marginLeft: "3rem" }}>Address Details</div>
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-houseNo">House no/Streets:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl5"
                            type="text"
                            name="houseno"
                            onChange={handleChange}
                            required
                            placeholder="Enter your house no"
                            value={formData.houseno}
                        />
                    </label> <br />
                    <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-houseNo">State:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl7"
                            type="text"
                            name="state"
                            onChange={handleChange}
                            required
                            placeholder="Enter State"
                            value={formData.state}
                        />
                    </label> <br />
                    <div className="f-group-label">Personal Details:</div>
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-age">Age:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl9"
                            type="number"
                            name="age"
                            onChange={handleChange}
                            required
                            placeholder="Enter Your age"
                            value={formData.age}
                        />
                    </label> <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-cast">Cast:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl11"
                            type="text"
                            name="cast"
                            onChange={handleChange}
                            required
                            placeholder="Enter your caste"
                            value={formData.cast}
                        />
                    </label> <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-income">Income:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl13"
                            type="text"
                            name="income"
                            onChange={handleChange}
                            required
                            placeholder="Enter your Income"
                            value={formData.income}
                        />
                    </label> <br />
                </div>

                <div className='modal-flex2'>
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-lname">Last Name:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl2"
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            required
                            placeholder="Enter your Last name"
                            value={formData.lastname}
                        />
                    </label> <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-number">Contact No:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl4"
                            type="text"
                            name="contactNO"
                            onChange={handleChange}
                            required
                            placeholder="Enter your Contact No"
                            value={formData.contactNO}
                        />
                    </label> <br />
                    <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">City:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl6"
                            type="text"
                            name="city"
                            onChange={handleChange}
                            required
                            placeholder="Enter your City"
                            value={formData.city}
                        />
                    </label> <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">PinCode:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl8"
                            type="text"
                            name="pincode"
                            onChange={handleChange}
                            required
                            placeholder="Enter your pincode"
                            value={formData.pincode}
                        />
                    </label> <br />
                    <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-gender">Gender:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl10"
                            type="text"
                            name="gender"
                            onChange={handleChange}
                            required
                            placeholder="Enter your gender"
                            value={formData.gender}
                        />
                    </label> <br />
                    <label className='modal-fields w-50 mb-3'>
                        <div className="apply-city">Highest qualification:</div>
                        <input
                            className='modal-IO-fields'
                            id="apl12"
                            type="text"
                            name="qualification"
                            onChange={handleChange}
                            required
                            placeholder="Enter your Highest qualification"
                            value={formData.qualification}
                        />
                    </label> <br />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default SchForm;
