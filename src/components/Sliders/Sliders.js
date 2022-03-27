import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../images/logo01.png";
import logo2 from "../../images/logo02.png";
import logo3 from "../../images/logo03.png";
import logo4 from "../../images/logo04.png";
import logo5 from "../../images/logo05.png";
import logo6 from "../../images/logo06.png";
import "./Sliders.css";
const Sliders = () => {
     var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='container'>
        <Slider {...settings}>
          <img className="slide_img" src={logo1} alt="img" />
          <img className="slide_img" src={logo2} alt="img" />
          <img className="slide_img" src={logo3} alt="img" />
          <img className="slide_img" src={logo4} alt="img" />
          <img className="slide_img" src={logo5} alt="img" />
          <img className="slide_img" src={logo6} alt="img" />
        </Slider>
      </div>
    );
};

export default Sliders;




