import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import samplePic from "../../Assets/sample.png"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              paddingLeft: "30px",
              paddingRight: "30px"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              TEXT for <strong className="purple">story</strong>
              <img src={samplePic} alt="sample" className="img-fluid"/>
            </h1>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              paddingLeft: "30px",
              paddingRight: "30px"
            }}
          >
            <img src={samplePic} alt="sample" className="img-fluid"/>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              TEXT for <strong className="purple">story</strong>
            </h1>
          </Col>
        </Row>
        <Aboutcard/>
      </Container>
    </Container>
  );
}

export default About;
