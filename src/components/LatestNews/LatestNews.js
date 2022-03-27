import React from "react";
import Base from "../../images/base/base.png";
import Base2 from "../../images/base/base2.png";
import Base3 from "../../images/base/base3.png";
import { BsPersonFill } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";
import './LatestNews.css'

const LatestNews = () => {
  return (
    <div className="container my-5">
      <h1 className="text-white text-center my-5">Latest News</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col mt-4">
          <div className="card h-100">
            <img className="img-fluid" src={Base} alt="" />
            <div className="news-color p-3">
              <span className="me-5">
                <BsPersonFill className="news_icon" />
                <span>Sunil Smith</span>
              </span>
              <span>
                <AiTwotoneCalendar className="news_icon" />
                <span>17 Sep 2019</span>
              </span>
              <h4 className="mt-3">
                Pre and Post Launch Software Marketing Pit falls to Avoid in you
              </h4>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className="card h-100">
            <img className="img-fluid" src={Base2} alt="" />
            <div className="news-color p-3">
              <span className="me-5">
                <BsPersonFill className="news_icon" />
                <span>Sunil Smith</span>
              </span>
              <span>
                <AiTwotoneCalendar className="news_icon" />
                <span>17 Sep 2019</span>
              </span>
              <h4 className="mt-3">
                Pre and Post Launch Software Marketing Pit falls to Avoid in you
              </h4>
            </div>
          </div>
        </div>
        <div className="col mt-4">
          <div className="card h-100">
            <img className="img-fluid" src={Base3} alt="" />
            <div className="news-color p-3">
              <span className="me-5">
                <BsPersonFill className="news_icon" />
                <span>Sunil Smith</span>
              </span>
              <span>
                <AiTwotoneCalendar className="news_icon" />
                <span>17 Sep 2019</span>
              </span>
              <h4 className="mt-3">
                Pre and Post Launch Software Marketing Pit falls to Avoid in you
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
