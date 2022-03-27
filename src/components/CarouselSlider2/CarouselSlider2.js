import React from "react";
import Carousel from "react-elastic-carousel";
import logo1 from "../../images/slide1/cf1.png";
import logo2 from "../../images/slide1/cf2.png";
import logo3 from "../../images/slide1/cf3.png";
import logo4 from "../../images/slide1/cf4.png";
import logo5 from "../../images/slide1/cf5.png";
import logo6 from "../../images/slide1/cf6.png";
import "../GlobalCarousel/GlobalCarousel.css";
import Item from "../CarouselSlide0/Item.js";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
  { width: 1400, itemsToShow: 5 },
];

const CarouselSlider2 = () => {
  return (
    <>
      
      <div className="App">
        <Carousel
          loop={Infinity}
          enableAutoPlay
          autoPlaySpeed={1500}
          breakPoints={breakPoints}
        >
          <Item>
            <img
              className="img-fluid"
              src={logo1}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo2}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo3}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo4}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo5}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo6}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider2;
