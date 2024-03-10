import React from 'react';
import Banner from './Banner/Banner';
import Device from './Device/Device';
import TrailPlan from './TrailPlan/TrailPlan';
import FitnessBanner from './FitnessBanner/FitnessBanner';
import ClientReviews from './ClientReviews/ClientReviews';


const Home = () => {
    return (
        <div>
            <Banner />
            <TrailPlan/>
            <Device/>
            <FitnessBanner/>
            <ClientReviews/>
        </div>
    );
};

export default Home;