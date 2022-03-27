import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import setting4 from "../../images/crypto/NFT-marketplace-image.png";
const MarketPlace = () => {
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
        <Col sm={12} md={5} lg={6}>
          <img className="img-fluid" src={setting4} alt="" />
        </Col>
        <Col sm={12} md={6} lg={6}>
          <h2 className="text-white py-3">NFT MARKETPLACE</h2>
          <p>
            Discover, collect, and sell extraordinary NFTs. Create and sell your
            NFTs
          </p>
          <p>
            Set up your wallet : <br /> Once you’ve set up your wallet of
            choice, connect it to PoorToRich by clicking the wallet icon in the
            top right corner. Learn about the wallets we support.
            <span id="dots">.....</span>
          </p>
          <span id="more_text">
            <p>Create your collection:</p>
            <p>
              Click My Collections and set up your collection. Add social links,
              a description, profile & banner images, and set a secondary sales
              fee.
            </p>
          </span>
          <br />
          <Button
            className="btn button_part"
            onClick={handleButton}
            id="more_btn"
          >
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketPlace;
