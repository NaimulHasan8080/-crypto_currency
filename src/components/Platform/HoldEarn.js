import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import processor from "../../images/crypto/hold-&-earn.png";

const HoldEarn = () => {

  
  return (
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col sm={12} md={8} lg={6}>
          <img className="img-fluid" src={processor} alt="" />
        </Col>
        <Col sm={12} md={4} lg={6}>
          <h2 className="text-white py-3">HOLD & EARN</h2>
          <p>
            is a Great Universal Reward Protocol, the first dividend system
            designed to diversify your cryptocurrency portfolio by holding $PTR
            to promotes holding by generating pasive income daily and monthly
            for Holders.
          </p>

          <p>
            You can chose any coins in our bleu chip for rewards : BTC / ETH /
            BNB / USDT / SOL / DOGE / DOT / BUSD / LINK/ XRP / ADA / AVAX /
            MATIC / CRO / LUNA. or any partners tokens for rewards : SHIBA /
            BABYDOGE / CAKE / SAFEMOON and many more tokens for rewards comming
            soon.
          </p>
          <Button
            className="btn button_part"
           
          >
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HoldEarn;
