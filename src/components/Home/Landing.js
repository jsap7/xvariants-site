import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import logoname from "../../Assets/logoname.png";
import grid from "../../Assets/grid.svg";
import xFed from "../../Assets/xFed.png";
import halfhead from "../../Assets/head-half.png";
import sidehead from "../../Assets/head-side.png";
import borderbot from "../../Assets/borderbot.png";
import bordertop from "../../Assets/bordertop.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Home3 from "./Home3"
import HomeBar from "./HomeBar"
import MarketplaceView from "../Projects/MarketplaceView";
import TheLab from "../Projects/TheLab";
import Story from "./Story";

function Landing() {
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Col>
          <Col style={{justifyContent: 'center', paddingLeft: 400}}>
            <img 
              src={logoname} 
              alt="sample" 
              display="block"
              margin="auto"
              height="55%"
              width="55%"
              style={{paddingRight: 0, paddingLeft: 0, paddingTop: 100}}
            />
          </Col>
          <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15, paddingTop: 130 }} className="heading">  
                  <strong className="main-name"> xVariants</strong>
                  {/* <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻👽
                  </span> */}
                </h1>
                <h2 style={{ paddingLeft: 50 }} className="main-quoteref">
                  <strong className="main-quote">Destruction is a form of creation...</strong>
                </h2>
                <div style={{ paddingLeft: 50, textAlign: "left" }}>
                  <Type />
                  <img 
                      src={halfhead} 
                      alt="sample" 
                      className="img-fluid" 
                      height="400" 
                      width="400"
                      style={{paddingLeft: 100}}
                  />
                </div>
              </Col>
              <Col md={5} style={{ paddingLeft: 50, paddingTop: 95, paddingBottom: 0}}>
                <img 
                  src={xFed} 
                  alt="sample" 
                  className="img-fluid"
                  width="800"
                  height="800"
                />
              </Col>
            </Row>
          </Col>
        </Container>
      </Container>
    </section>
  );
}

export default Landing;
