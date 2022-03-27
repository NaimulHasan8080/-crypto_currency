import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import setting3 from "../../images/crypto/trading.png";
const Trading = () => {
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
          <img className="img-fluid" src={setting3} alt="" />
        </Col>
        <Col sm={12} md={4} lg={6}>
          <h2 className="text-white py-3 text-uppercase">COPY TRADING</h2>
          <p>
            PoorToRich gives you the chance to invest in the successful
            strategies traders from all over the world. Use our leading copy
            trading engine building on DeFi technology to automatically copy
            their trading portfolio. With these 3 steps; Choose a strategy,
            invest funds and earn from every profitable trade.
          </p>

          <h5 className="text-white text-uppercase">HOW IT WORKS</h5>
          
            <p>• Explore strategies showing in the List section.</p>
            <p>
              • Find strategie you like (Display Description) Confirm with
              Select copy ($PTR token is required).<span id="dots">.....</span>
          </p>
          <span id="more_text">
            <p>
              • Allocate your funds to follow your beloved strategie (only $PTR
              token accepted).
            </p>
            <p>• Receive CTS_PTR tokens as contract tokens.</p>
            <p> • Enjoy your allocated profit from the strategie pool.</p>
            <p>
              • You can add funds or select to withdraw(swap CTS_PTR token back
              to $PTR) at any time.
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

export default Trading;
