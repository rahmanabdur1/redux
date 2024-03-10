import React from 'react';

const TrailPlan = () => {
    return (
        <div>
            <div>
                <h1>START YOUR 14 DAY FREE TRIAL</h1>
                <span>Payments start after 14 day free trial.*</span>
                <span>Subscriptions auto-renew at the end of each billing period at the standard price, unless cancelled.</span>
            </div>

            {/* monthly */}
            <div>
                <div>
                    <button>MONTHLY</button>
                    <button>ANNUALLY
                    </button>
                </div>
                <div>
                    {/* card */}
                    <div>
                        <span>Base</span>
                        <div>
                            <span>$9.99USD</span>
                            <span>Billed monthly after 14-days free trial</span>
                        </div>
                        <span>Get the basics</span>
                        <div>
                            <div><span>17 fitness programs only</span></div>
                            <div><span>Three workouts per program only</span></div>
                            <div><span>Stream from web and mobile only</span></div>
                            <div><span>Iconic BODYPUMP workouts</span></div>
                            <div><span>Indoor Cycling workouts</span></div>
                            <div><span>Plans and Challenges</span></div>
                            <div><span>Download workouts</span></div>
                            <div><button>SIGN UP</button></div>
                        </div>
                    </div>

                    {/* card2 */}
                    <div>
                        <span>Premium</span>
                        <div>
                            <span>$19.99USD</span>
                            <span>Billed monthly after 14-day free trial</span>
                        </div>
                        <span>Get the full experience</span>
                        <div>
                            <div><span>Over 20+ fitness programs</span></div>
                            <div><span>Access over 2000 workouts</span></div>
                            <div><span>Stream from web, mobile, and TV</span></div>
                            <div><span>Iconic BODYPUMP workouts</span></div>
                            <div><span>Plans and Challenges</span></div>
                            <div><span>Download workouts</span></div>
                            <div><button>SIGN UP</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailPlan;