import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import logo from "../../Assets/Variants/blueprint.png";
import TypeSomewhere from "./TypeSomewhere";
import background from "../../Assets/testingbackground.png";
import borderbot from "../../Assets/borderbot.png";
import bordertop from "../../Assets/bordertop.png";
import beaker from "../../Assets/beakerv.png";
import blockchain from "../../Assets/blockchain1.png";
import halfhead from "../../Assets/halfheadside.png";
import thumb from "../../Assets/thumb1.png";
import xFed from "../../Assets/xFed.png";
import dna from "../../Assets/dna.png";
import HomeBar from "./HomeBar"
import BorderDiff from "./BorderDiff";



function Story() {
  return (
    <section id="thestory">
      <BorderDiff/>
      <HomeBar text={"[The Story]"}/>
      <Container fluid className="home-section">
        <Container className="story-content">
        <Particle />
        <Row>
            <Col md={7} className="story-header">
              <div style={{textAlign: "center" }}>
                <TypeSomewhere />
              </div>
            </Col>
          </Row>
          <Row className="story-about-row">
            <>
              <Col md={6} className="story-about-description">
                <p className="story-about-body" style={{paddingTop: 60}}>
                  <br />
                  <br />There was a boy called Drax, with delusions of one day becoming a scientist.
                      <br/>
                      <br/>
                      Before quitting formal education, Drax realized that no one knew anything to the extent which he believed,
                  <i>
                    <b className="pink"> no one really had all the answers.</b>
                  </i>
                  <br/>
                  <br/>
                  The curious individual decided to follow his passions of knowledge toward the unknown, into the path of the dauntless.
                  <br />
                  <br />
                </p>
              </Col>
              <Col md={5} className="story-about-pic-r">
                <img
                  src={beaker}
                  alt="pic"
                  className="img-fluid"
                  style={{ maxHeight: "650px", maxWidth: "850px" }}
                />
              </Col>
            </>
          </Row>
          <Row className="story-about-row">
            <>
              <Col md={6} className="story-about-pic-r" style={{paddingRight: -70, paddingTop: 90}}>
                <img
                  src={dna}
                  alt="pic"
                  className="img-fluid"
                  style={{ maxHeight: "500px", maxWidth: "500px"}}
                />
              </Col>
              <Col md={1}>
              </Col>
              <Col md={4} className="story-about-description">
                <p className="story-about-body" style={{paddingLeft: 40}}>
                  <br />
                  <br />
                    A great deal of time goes by without any immediate success, fame, or excitement.
                    <br/>
                    <br/>
                    <b className="purple">Only solitude . . . </b> 
                    <br/>
                    <b className="purple">Only isolation . . .</b> 
                    <br/>
                    <br/>
                    Alone with the thoughts that maybe his decisions had destroyed all possibilities of a good life.&nbsp;
                    <br/>
                    <br/>
                  <i>
                    <b className="purple">Then it hits him. </b>
                  </i>
                  <br />
                  <br />
                </p>
              </Col>
            </>
          </Row>
          <Row className="story-about-row">
            <>
              <Col md={6} className="story-about-description">
                <p className="story-about-body" style={{paddingTop: 80}}>
                  <br />
                  <br />
                    The young Drax began experimenting on a new creation in the early stages of development.
                    <br/>
                    <br/>
                    An immutable force like the laws of nature, a cutting-edge technology that would grant people the power to communicate with alternate realities.
                    <br/>
                    <br/>
                    Drax identifies the creation as something he likes to call, 
                    <br/>
                    <br/>
                    <b className="blue"> the blockchain. </b>
                    <br/>
                    <br/>
                    He believed that this newfound mechanism would take civilization to the next level by creating endless possibilities.&nbsp;
                  <br />
                  <br />
                </p>
              </Col>
              <Col md={5} className="story-about-pic-r" style={{paddingTop: 160, paddingLeft: 70}}>
                <img
                  src={blockchain}
                  alt="pic"
                  className="img-fluid"
                  style={{ maxHeight: "550px", maxWidth: "550px" }}
                />
              </Col>
            </>
          </Row>
          <Row className="story-about-row">
            <>
              <Col md={5} className="story-about-pic-r" style={{paddingTop: 30}}>
                <img
                  src={thumb}
                  alt="pic"
                  className="img-fluid"
                  style={{ maxHeight: "550px" }}
                />
              </Col>
              <Col md={1}>
              </Col>
              <Col md={6} className="story-about-description" style={{paddingLeft: 70}}>
                <p className="story-about-body">
                  <br />
                  <br />
                  Drax had been testing out the new technology, recording the project and his notes while referring to himself as 
                  <b className="green"> Subject X. </b>
                  <br/>
                  <br/>
                  During one of the trial experiments, Drax had made a 
                  <b className="green"> miscalculation. </b>
                  <br/>
                  <br/>
                  One that led to a ripple effect in the blockchain,
                  simultaneously trapping himself as well as
                  <b className="green"> 9,999 </b>
                  other variations of himself in there with him into the land of the lost.
                  <br />
                  <br />
                </p>
              </Col>
            </>
          </Row>
          <Row className="story-about-row">
            <>
              <Col md={6} className="story-about-description">
                <p className="story-about-body">
                  <br />
                  <br />
                    At first, it had seemed like all possibilities of hope had vanished.
                    <br/>
                    <br/>
                    But destruction is a form of creation, and there were new possibilities that were possible in the blockchain that were never imaginable before.
                    <br/>
                    <br/>
                    A syndicate of 
                    <b className="coral"> 10,000 unique variants </b>
                    of Drax are now pursuing the unknown, forming a new society to discover what is truly possible.
                    <br/>
                    <br/>
                    The citizens are essential elements of our newly founded 
                    <b className="blue"> xFederation  </b>
                    and they are known as 
                    <b className="purple"> xVariants. </b>
                  <br />
                  <br />
                </p>
              </Col>
              <Col md={1}>
              </Col>
              <Col md={5} className="story-about-pic-r" style={{paddingTop: 80}}>
                <img
                  src={xFed}
                  alt="pic"
                  className="img-fluid"
                  style={{ maxHeight: "700px" }}
                />
              </Col>
            </>
          </Row>
          <Row className="story-about-row">
              <br />
              <br />
                <b>Join the federation and help form a new genesis society where we are in command of our own sovereignty,
                and capable of leading the world into a multiverse of opportunities with no limits to stop us. &nbsp; 
                </b>
              <br />
              <br />
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Story;
