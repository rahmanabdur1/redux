const data = [
    {
        des: "I have been dedicated to Les Mills+ for over eight years now. I love the diversity of classes, the instructors, the energy, the music, and the ability to download track favorites. Thank you Les Mills!",
        author: "Virginia O"
    },
    {
        des: "I’ve been a LES MILLS+ junkie for around five years now. It is seriously the very best way to stay fit physically AND mentally. With amazing classes to choose from, world-class instructors and scientifically proven effective workouts.",
        author: "Jodi U"
    },
    {
        des: "Absolutely brilliant. Excellent workouts – so many ways to challenge yourself, whatever your ability. Les Mills+ works perfectly and Les Mills is great.",
        author: "Kay W"
    },
    {
        des: "I don’t know why I waited so long to get LES MILLS+! It is home workout heaven. Literally 1000s of professional trainer-led workouts at your fingertips. If you are a fan of BODYPUMP you need this app. You don’t need to leave the house. Boom!",
        author: "Amy C"
    },
    {
        des: "I am 67 years old and I very much enjoyed Les Mills+. Body Balance, Stretch, and RPM routines helped me with my arthritic knees exercise. Thank you Les Mills.",
        author: "Teisa B"
    },
    {
        des: "I’ve been a subscriber ever since they launched! It’s the only platform I never stopped loving and following. With the variety of workouts, the music, and the professionalism of the instructors - they are truly one of a kind!",
        author: "Krisztina G"
    },
    {
        des: "Absolutely brilliant, has changed my life and given me my confidence back. Easy to use menu, easy to find what you want, makes you want to try new things and great presenters. If I could give it more than five stars I would.",
        author: "Louise R"
    },
    {
        des: "It’s always there when I need it. My entire family work out together and we have all increased not only our physical strength but our mental strength. We can use it on the go – all thanks to the app.",
        author: "Cathy S"
    },
    {
        des: "I love LES MILLS+ and the variety of workouts available. Being a massive Combat fan, but also being able to include Balance tracks or do a bit of Barre for extra leg conditioning, it’s a nice way to tailor my workout.",
        author: "Jaime L"
    }
];

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './ClientReviews.module.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

const ClientReviews = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: (dots) => (
        <div style={{ Color: "red" }}>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
  
    return (
        <div className={style.container}>
          <div>
            <h2>JOIN OUR 400,000+ STRONG COMMUNITY</h2>
          </div>
          <div className={style.slick_slider}>
            <Slider className={style.slick_slides} {...settings}>
              {data.map((review, index) => (
                <div className={style.card} key={index}>
                  <p>{review.des}</p>
                  <p>- {review.author}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    };
    
    export default ClientReviews;