import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import setting from '../../images/crypto/eCommerce.png';
const ECommerce = () => {
  const handleButton = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more_text");
    const more_btn = document.getElementById("more_btn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      more_btn.innerText = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      more_btn.innerText = "Read less";
      moreText.style.display = "inline";
    }
  };
  return (
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col sm={12} md={8} lg={6}>
          <img className="img img-fluid" src={setting} alt="" />
        </Col>
        <Col sm={12} md={4} lg={6}>
          <h2 className="text-white py-3">E-COMMERCE</h2>
          <p>What is Decentralized E-commerce and How does it work?</p>
          <p>
            Everyone knows the importance of E-commerce today, as for most of us
            it has become a convenient way to acquire many of our needs and
            wants.
          </p>
          <p>
            Needless to say, E-commerce has drastically grown over time and has
            become the now and future of buying and selling goods electronically
            over the internet. The process involves Merchants or retailers
            selling products through a platform like Amazon, eBay, etc. the
            platform acts as a middleman and thereby helping the buyer and the
            seller to complete a trade.<span id="dots">...</span>
          </p>
          <p id="more_text">
            In a Decentralized E-Commerce, people can buy and sell products in
            peer to peer form. Users can register and list their products and
            become a seller or act as a seller. The buyer will be able to see
            the rates and track their purchases. It is the cost-effective way of
            trading for both parties as the trade is happening directly between
            the buyer and the seller. Here the platforms like PoorToRich would
            ensure the genuinity and smooth transaction of the process by making
            sure that both the parties trade fairly.
          </p>
          <br/>
          <Button
            onClick={handleButton}
            id="more_btn"
            className="btn button_part"
          >
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ECommerce;