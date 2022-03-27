import React from "react";
import Carousel from "react-elastic-carousel";
import logo1 from "../../images/second-slide/1.png";
import logo2 from "../../images/second-slide/2.png";
import logo3 from "../../images/second-slide/3.png";
import logo4 from "../../images/second-slide/4.png";
import logo5 from "../../images/second-slide/5.png";
import logo6 from "../../images/second-slide/6.png";
import logo7 from "../../images/second-slide/7.png";
import logo8 from "../../images/second-slide/8.png";
import logo9 from "../../images/second-slide/9.png";
import logo10 from "../../images/second-slide/10.png";
import logo11 from "../../images/second-slide/11.png";
import logo12 from "../../images/second-slide/12.png";
import logo13 from "../../images/second-slide/13.png";
import logo14 from "../../images/second-slide/14.png";
import logo15 from "../../images/second-slide/15.png";
import logo16 from "../../images/second-slide/16.png";
import logo17 from "../../images/second-slide/17.png";
import logo18 from "../../images/second-slide/18.png";
import logo19 from "../../images/second-slide/19.png";
import logo20 from "../../images/second-slide/20.png";
import logo21 from "../../images/second-slide/21.png";
import logo22 from "../../images/second-slide/22.png";
import logo23 from "../../images/second-slide/23.png";
import logo24 from "../../images/second-slide/24.png";


import "../GlobalCarousel/GlobalCarousel.css";
import Item from "../CarouselSlide0/Item.js";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
  { width: 1400, itemsToShow: 5 },
];

const CarouselSlider1 = () => {
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
          <Item>
            <img
              className="img-fluid"
              src={logo8}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo9}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo10}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo11}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo12}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo13}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo14}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo15}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo16}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo17}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo18}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo19}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo20}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo21}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo22}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo23}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
          <Item>
            <img
              className="img-fluid"
              src={logo24}
              alt=""
              style={{ height: "80px" }}
            />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlider1;
