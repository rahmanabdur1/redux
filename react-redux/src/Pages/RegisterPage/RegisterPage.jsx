import React from 'react';
import Register from './Register';
import './RegisterPage.css'
import gym_img from '../../assets/gym_img.jpg'
const RegisterPage = () => {
    return (
        <div>
            <div className='register_page'>
              <div>  <img src={gym_img} alt='fitness_img'/></div>
              <div>  <Register/></div>
            </div>
        </div>
    );
};

export default RegisterPage;