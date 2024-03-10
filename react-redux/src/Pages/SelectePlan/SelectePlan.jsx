import React from 'react';
import gym_img from '../../assets/gym_img.jpg'
import lesmills from '../../assets/lesmills.jpg'
import paypal_icon from '../../assets/download (1).png'
import  visa_card_icon from '../../assets/download.png'
import './SelectePlan.css'

const SelectePlan = () => {
    return (
        <div>
            <div className='SelectePlan_page'>
                <div className='SelectePlan_img'>  <img src={gym_img} alt='fitness' /></div>
                <div>
                    <div>
                         <div className='lesmills' ><img  src={lesmills} alt='les_mills' /></div> 
                        <div>
                            <h2>Start your 14 day free trial</h2>
                            <p>Payments start after 14 day free trial.*</p>
                            <span>Subscriptions auto-renew at the end of each billing period at the standard price, unless cancelled.</span>
                        </div>
                        <div>
                            <span>Base</span>
                            <span>$59.88 USD</span>
                            <span>Billed annually at $59.88 USD after 14-day free trial.</span>
                        </div>
                        <span>CHANGE PLAN</span>
                        </div>
                        {/* pay */}
                        <div>
                            <span>Pay width</span>
                            <div>
                                <input checked />
                                <div className='visa_card'>
                                    <span>Credit/Debit Card</span>
                                    <img src={visa_card_icon}/>
                                </div>
                                <div className='paypal_card'>
                                    <span>Paypal</span>
                                    <img src={paypal_icon}/>
                                </div>
                            </div>
                            <span>When your subscription ends, which payment plan would you like to continue on?</span>
                            <div>
                           <span>Annually </span><span>Monthly</span></div>
                            <span>By clicking PAY NOW, you confirm you are 18 years of age or over and agree with the . Please note the . You also agree to the immediate performance of the contract and acknowledge that you will lose your right of withdrawal once the contract has been fully performed. You can find information about your right of withdrawal under Cancellation in the .
                                Subscriptions auto-renew at the end of each billing period at the standard price. The first payment will be charged automatically at the end of the free trial. You can cancel auto-renewal at any time</span>
                            <button>PAY NOW</button>
                        </div>


                    </div>
            </div>
        </div>
    );
};

export default SelectePlan;

