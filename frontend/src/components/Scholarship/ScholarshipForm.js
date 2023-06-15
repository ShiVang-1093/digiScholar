import React, { useState } from 'react';
import './ScholarshipForm.module.css';

const ScholarshipForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [cast, setCast] = useState('');
  const [education, setEducation] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Print the form data in the console
    console.log({
      firstName,
      lastName,
      contactNumber,
      email,
      homeAddress,
      city,
      state,
      age,
      gender,
      cast,
      education,
      income,
    });
  };

  return (
    <div className='form-page'>
      <div className='form-Container'>
      <h1>Scholarship Application</h1>
      
      <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Contact Number:
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Home Address:
        <input
          type="text"
          value={homeAddress}
          onChange={(e) => setHomeAddress(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>

      <label>
        State:
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>

      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Cast:
        <input
          type="text"
          value={cast}
          onChange={(e) => setCast(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Education:
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          required
        />
      </label>

      <label>
        Income:
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
      </label>
      <br />

      <button className='form-submit' type="submit">Submit</button>
    </form>
    </div>
    </div>
    
  );
};

export default ScholarshipForm;
