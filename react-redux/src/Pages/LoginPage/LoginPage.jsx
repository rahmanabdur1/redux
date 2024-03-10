import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import gym_img from '../../assets/gym_img.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInAsync } from '../../features/authSlice';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignIn = async () => {
        try {
            await dispatch(signInAsync(formData));
            // Handle successful sign-in, maybe redirect to another page
            navigate('/register/selecte-plan/');
        } catch (error) {
            // Handle sign-in failure, show error message, etc.
            console.error('Sign-in failed:', error.message);
        }
    };

    useEffect(() => {
        // Automatically trigger handleSignIn after a certain delay
        const timer = setTimeout(async () => {
            await handleSignIn();
        }, 5000); // Change the delay time according to your requirements

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className='login_page'>
            <div>
                <img src={gym_img} alt='fitness_img' />
            </div>
            <div>
                {/* Your existing login form */}
                <div>
                    <h2>Sign up now</h2>
                    <span>Have not an account?<Link to='/register'>register</Link></span>
                </div>
                <div>
                    <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                    <input type='password' name='password' placeholder='password' value={formData.password} onChange={handleChange} />
                </div>
                <span>Our <Link to='/'>Privacy policy </Link> applies</span>
                <button onClick={handleSignIn}>NEXT</button>
                {/* No need for the button here since handleSignIn is called automatically */}
            </div>
            {/* Add the Messenger chat plugin */}
        </div>
    );
};

export default LoginPage;
