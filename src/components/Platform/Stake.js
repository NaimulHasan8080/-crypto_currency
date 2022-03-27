import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import crypto from '../../images/crypto/Staking-image.png';
const Stake = () => {
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
            <img className="img-fluid" src={crypto} alt="" />
          </Col>
          <Col sm={12} md={4} lg={6}>
            <h2 className="text-white py-3">STAKING</h2>
            <p>
              Staking is a great way to maximize your passive income! You can
              earn amazing rewards by staking $PTR. It is as easy as 1-2-3 to do
              Staking with PoorToRich and we all enjoy earning daily rewards.You
              can stake your $PTR in a selection of pools and earn tokens for
              doing so, with no extra risk.
            </p>

            <p>
              Decide on your investment by looking at the APYs of different
              pools and looking at our calculator, which tells you how much you
              can earn with your stake.<span id="dots">.....</span>
            </p>

            <span id="more_text">
              <p>
                What are Staking Pools? Staking pools are essentially staking
                pools that receive BNB from the Ecosystem, and boost tokens'
                liquidity by buying them on certain contract interactions. The
                purchased tokens are then distributed amongst participants of
                the pool. This concept gives our token its utility. If you want
                to partake in a pool, you’ll have to stake $PTR tokens.
              </p>

              <p>
                We aim to help small-cap tokens and protocols with our pools,
                both with marketing, exposure, and liquidity boosting, since we
                essentially transfer a part of our transaction volume to them.
                Earn passive income while getting exposure to vetted projects.
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

export default Stake;
