import React from 'react';
import challengeImg from '../../../assets/challenge.avif';
import enjoyImg from '../../../assets/enjoy.avif';
import fitImg from '../../../assets/fit.avif';
import trainImg from '../../../assets/train.avif'

const FitnessBanner = () => {
    const banners = [
        {
            title: 'CHALLENGE YOURSELF',
            description: 'Reach new heights following a workout plan or challenge - there are options to suit every goal.',
            image: challengeImg,
        },
        {
            title: 'TRAIN WITH THE BEST',
            description: 'Proven exercises, the latest workout techniques, and motivation from the world\'s top instructors.',
            image: enjoyImg,
        },
        {
            title: 'FIND YOUR FIT',
            description: 'Get top recommendations, find your favorite workout, and track your progress.',
            image: fitImg,
        },
        {
            title: 'ENJOY YOUR CHALLENGE',
            description: 'Build strength, burn energy, increase stamina, take control... Whatever your goal, we have workouts that deliver.',
            image: trainImg,
        },
    ];

    return (
        <div>
            {banners.map((banner, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <img src={banner.image} alt={`Banner ${index + 1}`} />
                    <h2>{banner.title}</h2>
                    <p>{banner.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FitnessBanner;
