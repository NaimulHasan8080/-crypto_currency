import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import logo3 from "../../images/mix-image/Medium.png";
import "./Header.css";
const Header = () => {
  return (
    <section className="header-section">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="header_text">
              <h6>Welcome to</h6>
              <h3>
                PoorToRich Decentralized Marketplace Combined Blockchain and
                Artificial Intelligence to Increase your Profits While
                Minimizing Risk on the BSC
              </h3>
              <p className="mt-3">
                Earn Passive Income Daily and Monthly with Our Combined Defi &
                Al
                <p>
                  Financial Tools and Diversify your Investment portfolio fully
                  Automated.
                </p>
              </p>
            </div>
            <div>
              <button className="buy">Buy Now</button>
              <button className="launch">Launch App</button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}></Col>
        </Row>
        <div className="icons-parent-grd">
          <div className="icons-parent">
            <a
              href="Link-Facebook"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="Link-twitter"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="Link-Paper"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPaperPlane />
            </a>
            <a
              href="Link-medium"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={logo3} alt="" />
            </a>
            <a
              href="Link-youtube"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
