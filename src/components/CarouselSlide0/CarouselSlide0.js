import React from "react";
import Carousel from "react-elastic-carousel";
import logo1 from "../../images/mix-image/logo01.png";
import logo2 from "../../images/mix-image/logo02.png";
import logo3 from "../../images/mix-image/logo03.png";
import logo4 from "../../images/mix-image/logo04.png";
import logo5 from "../../images/mix-image/logo05.png";
import logo6 from "../../images/mix-image/logo06.png";
import logo7 from "../../images/slide1/cf7.png";
import "../GlobalCarousel/GlobalCarousel.css";
import Item from "./Item";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
  { width: 1400, itemsToShow: 5 },
];

const CarouselSlider0 = () => {
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
          <Item>
            <img
              className="img-fluid"
              src={logo7}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider0;
