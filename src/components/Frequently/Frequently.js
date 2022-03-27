import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/mix-image/img.png";
import "./Frequently.css";
import General from "./General";
import PrivateSale from "./PrivateSale";
import Token from "./Token";
const Frequently = () => {
  const [tab, setTab] = useState('gen');

  return (
    <div className="frequently_section">
      <Container>
        <Row>
          <h2 className="text-white text-center py-3">
            FREQUENTLY ASK QUESTIONS
          </h2>
          <small className="text-white text-center">
            We are providing have the answers for the common questions
            concerning this ICO and how to buy.If <br /> you have any other
            questions , please get in touch using the contact form below.
          </small>
          <Col sm={12} md={12} lg={12}>
            <div className="py-5 text-center">
              <button onClick={()=> setTab("gen")} className="btn_gen">GENERAL</button>
              <button onClick={()=> setTab("pub")} className="btn_public">PRIVATE SALE & PUBLIC</button>
              <button onClick={()=> setTab("token")} className="btn_token">TOKEN</button>
            </div>
          </Col>

          <Col sm={12} md={6} lg={7} className="pt-5">
           {tab === "gen" && <General></General>}
           {tab === "pub" && <PrivateSale></PrivateSale>}
           {tab === "token" && <Token></Token>}
          </Col> 
          <Col sm={12} md={6} lg={5}>
            <img className="img-fluid" src={logo} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Frequently;
