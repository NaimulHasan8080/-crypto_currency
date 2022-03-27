import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import setting4 from "../../images/crypto/AI-BOT.png";

const TradingBots = () => {
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
          <img className="img img-fluid" src={setting4} alt="" />
        </Col>
        <Col sm={12} md={4} lg={6}>
          <h2 className="text-white py-3">AI TRADING BOTS</h2>
          <p>
            With the PoorToRich AI Bots one can now select from a wide range of
            AI Bots available on our platform. The AutoBot range from different
            trading pairs, different logics applied, and are programmed with
            unique strategies.
          </p>
         
          <p>
            One of the best thing about the AI Bots is the transparency, as the
            Bots can be analyzed before one decides to subscribe, with the
            visual statistics on the dashboard, one can evaluate the bots based
            on the various metrics displayed like Total Returns, Score, the age
            of the bot and its performance graph.<span id="dots">.....</span>
          </p>
          <p id="more_text">
            Clicking on the subscribe button, which will give the user more
            information on how the Bot has been programmed and planned to work.
            Furthermore, on the left side is a PnL (profit & loss) Graph to
            assess and display its performance.
          </p>
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

export default TradingBots;
