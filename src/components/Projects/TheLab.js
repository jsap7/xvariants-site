import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketplaceView from "./MarketplaceView"
import Anatomy from "./Anatomy"
import SimpleSlider from "./Slideshow";
import Carousel from "./Carousel.js";
import HomeBar from "../Home/HomeBar.js";
import BorderTop from "../Home/BorderTop";
import BorderBot from "../Home/BorderBot";
import anatomyimg from "../../Assets/Variants/blueprint.png";
import curvedarr from "../../Assets/arrow5.png";

function TheLab() {
  return (
    <section id="thelab">
      <>
        {/* <Anatomy/> */}
        {/* <SimpleSlider/> */}
        <BorderBot/>
        <BorderTop/>
        <HomeBar text={"[The Lab]"}/>
        <Row className="story-about-row">
              <>
              <Col md={6} className="lab-description">
                  <p className="lab-about-body" style={{paddingTop: 30}}>
                    <br />
                    <br /><b className="white">10,000 xVariants exist but all of them are unique due to their randomized code within the blockchain.</b>
                    <br />
                    <br />

                    <i>
                      <b className="green">Drax put together a blueprint to analyze each one: </b>
                    </i>
                  </p>
                  <br />
                  <br />
                  <img
                    src={curvedarr}
                    alt="pic"
                    className="img-fluid"
                    style={{ maxHeight: "650px", maxWidth: "850px" }}
                  />
                   <p className="lab-about-body" style={{paddingTop: 30}}>
                    <br />
                    <br /><b className="white">Here are some variants in their incubators now!</b>
                    <br />
                    <br />

                  </p>

                </Col>
                <Col md={5} className="story-about-pic-r" style={{paddingTop: 80}}>
                  <img
                    src={anatomyimg}
                    alt="pic"
                    className="img-fluid"
                    style={{ maxHeight: "650px", maxWidth: "850px", borderRadius: "35px" }}
                  />
                </Col>
              </>
          </Row> 
        <Row>
            <Col>
              <div style={{paddingTop: 0, paddingBottom: 190}}>
                <Carousel/>
              </div>
            </Col>
        </Row>
      </>
    </section>
  );
}

export default TheLab;
