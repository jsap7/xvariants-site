import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Mint() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Row>
            <Col md={5} style={{ padding: 50}}>
            <h1 className="main-quoteref">
                <strong className="main-quote">Destruction is a form of creation</strong>
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Mint;
