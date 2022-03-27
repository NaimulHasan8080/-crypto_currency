import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ECommerce from "./ECommerce";
import Farming from "./Farming";
import HoldEarn from "./HoldEarn";
import MarketPlace from "./MarketPlace";
import "./Partner.css";
import Stake from "./Stake";
import Trading from "./Trading";
import TradingBots from "./TradingBots";
const Partner = () => {
  const [tab, setTab] = useState("hold");
  return (
    <section className="partner_section">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} className="text-center text-white">
            <h2  className="pt-5">
              AN ALL-IN-ONE PLATFORM FOR THE CRYPTO INVESTORS.
            </h2>
            <p>
              We have developed the most advanced all-integrated Defi and Al
              platform to provide Institutional-grade <br /> tools for the
              Investors, in one single place.
            </p>
          </Col>
          <Col sm={12} md={12} lg={12} className="text-center">
            <Button onClick={() => setTab("hold")} className="btn button_part">
              Hold & Earn
            </Button>
            <Button onClick={() => setTab("stake")} className="btn button_part">
              Staking
            </Button>
            <Button onClick={() => setTab("farm")} className="btn button_part">
              Copy Farming
            </Button>
            <Button onClick={() => setTab("trade")} className="btn button_part">
              Copy Trading
            </Button>
            <Button onClick={() => setTab("bots")} className="btn button_part">
              Ai Trading Bots
            </Button>
            <Button onClick={() => setTab("net")} className="btn button_part">
              NET Marketplace
            </Button>
            <Button
              onClick={() => setTab("commerce")}
              className="btn button_part"
            >
              E-commerce
            </Button>
          </Col>
        </Row>
      </Container>
      {tab === "hold" && <HoldEarn></HoldEarn>}
      {tab === "stake" && <Stake></Stake>}
      {tab === "farm" && <Farming></Farming>}
      {tab === "trade" && <Trading></Trading>}
      {tab === "bots" && <TradingBots></TradingBots>}
      {tab === "net" && <MarketPlace></MarketPlace>}
      {tab === "commerce" && <ECommerce></ECommerce>}
    </section>
  );
};

export default Partner;
