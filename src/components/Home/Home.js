import React from "react";
import EasyBoard from "../EasyBoard/EasyBoard.js";
import LatestNews from "../LatestNews/LatestNews.js";

import TokenMics from "../TokenMics/TokenMics.js";
import Header from "../Header/Header.js";
import Mobile from "../Mobile/Mobile.js";
import Partner from "../Platform/Partner.js";
import RoadMap from "../RoadMap/RoadMap.js";
import Frequently from "../Frequently/Frequently.js";
import CarouselSlide1 from "../CarouselSlide1/CarouselSlide1.js";
import CarouselSlide2 from "../CarouselSlider2/CarouselSlider2.js";

import CarouselSlide0 from "../CarouselSlide0/CarouselSlide0.js";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselSlide2 />
      <EasyBoard />
      <Partner />
      <CarouselSlide1 />
      <TokenMics />
      <RoadMap />
      <CarouselSlide0 />
      <Frequently />
      <Mobile />
      <LatestNews />
    </div>
  );
   
};

export default Home;
