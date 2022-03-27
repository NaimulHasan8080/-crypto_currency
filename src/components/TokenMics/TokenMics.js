import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img from "../../images/mix-image/pull.png";
const TokenMics = () => {
  return (
    <>
      <Container className="mt-4">
        <h1 className="text-center mb-3 text-uppercase text-white">
          Tokenomics
        </h1>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className="common_bg text-center py-3 mt-3 text-black rounded-2">
              <h6>Network</h6>
              <h4>Binance Smart Chain</h4>
            </div>
            <div className="common_bg text-center py-3 mt-3 text-black rounded-2">
              <h6>Total Supply</h6>
              <h4>10,000,000</h4>
            </div>
            <h4 className="mt-4 mb-2">TAX BUY/SELL 12%</h4>
            <div className="common_bg px-3 py-4 text-black rounded-2">
              <h6>
                <span className="net_number" style={{ padding: "5px 13px" }}>
                  1
                </span>{" "}
                <span className="sell_text">3% REWARDS HOLDERS</span>
              </h6>
              <h6>
                <span className="net_number">2</span>{" "}
                <span className="sell_text">3% AUTO LIQUIDITY</span>
              </h6>
              <h6>
                <span className="net_number">3</span>{" "}
                <span className="sell_text">3% AUTO BUYBACK & BURN</span>
              </h6>
              <h6>
                <span className="net_number">4</span>{" "}
                <span className="sell_text">3% ECOSYSTEM & MARKETING</span>
              </h6>
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center mt-5"
            sm={12}
            md={8}
            lg={8}
          >
            <img className="img-fluid" src={Img} alt="img" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TokenMics;
