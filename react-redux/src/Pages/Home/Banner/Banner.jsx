import React from 'react';
import style from './Banner.module.css'

const Banner = () => {
    return (
        <div className={style.banner}>
            <div>
                <div className={style.banner_content}>
                    <h1>WORKOUTS YOU’LL ACTUALLY ENJOY</h1>
                    <p>Choose from over 2,000 science-backed, endorphin-inducing workouts with the easy-to-use LES MILLS+ app.</p>
                    <button>SEE OFFER</button>
              
                </div>
            </div>
        </div>
    );
};

export default Banner;