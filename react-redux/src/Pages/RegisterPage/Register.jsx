import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useDispatch } from 'react-redux';
import { createUserAsync } from '../../features/authSlice';

const Register = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    receiveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRegister = async () => {
    try {
      // Dispatch the Redux action to create a user
      await dispatch(createUserAsync(formData));

      // After successful registration, send additional data to your server
      const serverResponse = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle server response if needed
      const serverData = await serverResponse.json();
      console.log('Server Response:', serverData);

      // Handle successful registration, then navigate to login
      navigate('/login');
    } catch (error) {
      // Handle registration failure, show error message, etc.
      console.error('Registration failed:', error.message);
    }
  };

  const handleNext = () => {
    setShowAdditionalFields(true);
  };

  return (
    <div>
      <div className='register_container'>
        <div>
          {showAdditionalFields ? <h2>Let's get started</h2> : <h2>Sign up now</h2>}
          <span>Have an account?<Link to='/login'>Log in</Link></span>
        </div>
        <div>
          {showAdditionalFields ? (
            <>
              <input type='text' name='firstname' placeholder='First Name' value={formData.firstname} onChange={handleChange} /><br></br>
              <input type='text' name='lastname' placeholder='Last Name' value={formData.lastname} onChange={handleChange} /><br></br>
              <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
            </>
          ) : (
            <>
              <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
            </>
          )}
          <p>Do you want to receive LES MILLS Group workout plans, fitness information, and offers to keep motivated?</p>
          <div>
            <label>
              Yes
              <input type="checkbox" name="receiveInfo" checked={formData.receiveInfo} onChange={handleChange} />
            </label>
            <br />
            <label>
              No
              <input type="checkbox" name="receiveInfo" checked={!formData.receiveInfo} onChange={handleChange} />
            </label>
            <br />
          </div>
          {showAdditionalFields && (
            <input type='password' name='password' placeholder={formData?.email} value={formData.password} onChange={handleChange} />
          )}
        </div>
        <span>Our <Link to='/'>Privacy policy </Link> applies</span>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
