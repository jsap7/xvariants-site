import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import MarketplaceView from "./MarketplaceView";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          The <strong className="purple"> Variants </strong>
      </h1>
      <p style={{ color: "white" }}>
          Explore some these guys
      </p>
        <MarketplaceView/>
      </Container>
    </Container>
  );
}

export default Projects;
