import React from "react";
import {Button, Col, Container, Row } from "react-bootstrap";
import setting2 from "../../images/crypto/Copy-Farming.png";
const Farming = () => {
 
  return (
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col sm={12} md={8} lg={6}>
          <img className="img-fluid" src={setting2} alt="" />
        </Col>
        <Col sm={12} md={4} lg={6}>
          <h2 className="text-white py-3">COPY FARMING</h2>
          <p>
            Explore an ever-expanding variety of harvesting strategies from real
            top best yield farmers worldwide. It’s easy to get started in yield
            farming without prior knowledge. Use our flexible filters to find a
            strategy that suits your appetite for risk, invest funds and earn
            when those yield farming strategies return a profit.
          </p>
          <h5 className="text-white">Coming Soon</h5>
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

export default Farming;
