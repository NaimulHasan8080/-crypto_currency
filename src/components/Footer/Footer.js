import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiOutlineMail,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsYoutube, BsFillCursorFill } from "react-icons/bs";

import Icone1 from '../../images/mix-image/f-icon1.png'
import Icone2 from '../../images/mix-image/f-icon2.png'
import Icone3 from '../../images/mix-image/f-icon3.png'
import Icone4 from '../../images/mix-image/f-icon4.png'
import Icone5 from '../../images/mix-image/f-icon5.png'
import Icone6 from '../../images/mix-image/f-icon6.png'
import logo from "../../images/mix-image/Logo.png";

const Footer = () => {
  return (
    <footer className="footer_bg">
      <div className="container">
        <div>
          <h2 className="text-center my-5 pt-5">AS SEEN ON</h2>
          <div className=" row row-cols-1 row-cols-md-3 row-cols-lg-6 ">
            <div className="col d-flex justify-content-center">
              <img className="img_footer img-fluid" src={Icone1} alt="" />
            </div>
            <div className="col d-flex justify-content-center">
              <img className="img_footer img-fluid" src={Icone2} alt="" />
            </div>
            <div className="col d-flex justify-content-center">
              <img className="img_footer img-fluid" src={Icone3} alt="" />
            </div>
            <div className="col d-flex justify-content-center">
              <img className="img_footer img-fluid" src={Icone4} alt="" />
            </div>
            <div className="col d-flex justify-content-center">
              <img className="img_footer img-fluid" src={Icone5} alt="" />
            </div>
            <div className="col d-flex justify-content-center">
              <img className="img_footer img-fluid" src={Icone6} alt="" />
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 input_bg">
          <div className="col">
            <h1 className="text-black">Subscribe for Newsletter</h1>
            <h1 className="text-black">to get all updates</h1>
          </div>
          <div className="col subscribe_top">
            <div className="input-group subscribe  flex-nowrap justify-content-end">
              <input
                img={AiOutlineMail}
                placeholder="Your Email Address"
                className="px-1"
              />
              <span className="input-group-text " id="basic-addon2 ">
                <BsFillCursorFill className="me-2" />
                Subscribe
              </span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="row social_links">
            <div className="col d-flex justify-content-center mt-3">
              <a href="Link-Facebook" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
            </div>
            <div className="col d-flex justify-content-center mt-3">
              <a href="Link-twitter" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </div>
            <div className="col d-flex justify-content-center mt-3">
              <a
                href="Link-TelegramPlane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </div>
            <div className="col d-flex justify-content-center mt-3">
              <a href="Link-Medium" target="_blank" rel="noopener noreferrer">
                <AiFillMediumSquare />
              </a>
            </div>
            <div className="col d-flex justify-content-center mt-3">
              <a href="Link-youtube" target="_blank" rel="noopener noreferrer">
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-5 col-lg-5">
            <img className="img-fluid" src={logo} alt="" />
            <p className="mt-4">
              The First decentralized Marketplace developed <br /> the most
              advanced all-integrated DeFi and AI platform to <br /> provide
              institutional-grade tools for
              <br /> the investors, in one single place to Earn Passive Income .
            </p>
          </div>
          <div className="col col-md-2 col-lg-3">
            <h2 className="mb-5 footer_heading">Menu</h2>
            <p>Home</p>
            <p>Token Information</p>
            <p>Whitepaper</p>
            <p>Roadmap</p>
            <p>Tokenomics</p>
            <p>Audits</p>
            <p>FAQ</p>
          </div>
          <div className="col col-md-5 col-lg-4">
            <h2 className="mb-5 footer_heading">Contact Us</h2>
            <p>Get latest updates, news, surveys & offers </p>
            <p>123 Second Street Fifth Avenue, Manhattan,</p>
            <p> New York</p>
            <p>+00 41 258 489 6587</p>
            <p> info@demo.com</p>
          </div>
        </div>
      </div>
      <div className="copy_right mt-5 pb-2 pt-3 text-black text-center">
        <p>Copyright@2020, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
