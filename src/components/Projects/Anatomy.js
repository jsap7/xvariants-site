import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import anatomyimg from "../../Assets/Variants/blueprint.png";
import curvedarr from "../../Assets/arrow5.png";
import spinnyimg from "../../Assets/spinnyb.gif";
import pheno from "../../Assets/PHENOTYPES.png";
import xFedh from "../../Assets/xFedhats.png";
import xrp from "../../Assets/xrp.png";
import TheTech from "./TheTech.js";
import TheCommunity from "./TheCommunity.js";
function Anatomy() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <>
        <Col>
        <Row className="story-about-row" style={{paddingTop: 80}}>
              <>
                <Col md={6} className="story-about-pic-r" style={{paddingTop: 0, paddingRight: 30}}>
                  <img
                    src={pheno}
                    alt="pic"
                    className="img-fluid"
                    style={{ maxHeight: "650px", maxWidth: "600px", borderRadius: "20px" }}
                  />
                </Col>
                <Col md={5} className="lab-description">
                  <p className="lab-about-body" style={{paddingTop: 0, paddingLeft: 100}}>
                    Some variants are more unique than others...
                    <br />
                    <br />
                    
                    All xVariants are one of the four phenotypes:
                    <i>
                      <b className="green"> Ghosts_</b>,
                      <b className="blue"> Spectres_</b>,
                      <b className="pink"> Wraiths_</b>, or
                      <b className="purple"> Phantoms_</b>.
                    </i>
                  </p>
                  <br />
                </Col>
              </>
          </Row>
            <p className="lab-about-body" style={{paddingTop: 0, paddingLeft: 300, paddingRight: 300}}>
            <b className="pink"> Wraiths </b> and 
            <b className="purple"> Phantoms </b> have early access to new drops and another variety of benefits soon to come.
                    <br />
                    <br />
                    However, each phenotype has its own set of perks in the long run.
            </p>
          </Col>
          <Row className="story-about-row">
              <>
              
                <Col md={5} className="story-about-pic-r" style={{paddingTop: 0}}>
                  <img
                    src={xFedh}
                    alt="pic"
                    className="img-fluid"
                    style={{ maxHeight: "650px", maxWidth: "500px", borderRadius: "35px" }}
                  />
                </Col>
                <Col md={7} className="lab-description">
                  <p className="lab-about-body" style={{paddingTop: 40, paddingLeft: 110}}>
                   All variants have their own <b className="purple">style</b>, <b className="purple">look</b>, and <b className="purple">personality</b>.
                   <br/>
                   <br/>
                   There are an assortment of <b className="blue">traits</b> that make each variant like <b className="pink"> no other</b>.
                   <br/>
                   <br/>
                   Some of these traits can be <b className="green">rarer</b> than others, 
                   making all variants even more unique with their own <b className="green">origins</b>.

                  </p>
                </Col>
              </>
          </Row>
          <TheTech/>
          <TheCommunity/>
        </>
        </Container>
      </Container>
    </section>
  );
}

export default Anatomy;
