import React from 'react';
import  led from '../../../assets/led.jpg'
import  mobile from '../../../assets/mobile.jpg'

const Device = () => {
    return (
        <div>
            <div>
<img src={led}/>
            </div>
            <div>
                <div><h2>WORK OUT ANYTIME,
                    ANYWHERE,
                    ON ANY DEVICE</h2></div>
            </div>
            <div>
<img src={mobile}/>
            </div>
        </div>
    );
};

export default Device;