import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import props from "react";

function HomeBar(props) {
  return (
    <Container fluid className="home-bar-section" id="bar">
      <Container fluid className="home-bar-section">
        <Row>
        <Col md={12} className="home-new-section-bar">
            <h1 className="home-bar-header">
              {props.text}
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeBar;
