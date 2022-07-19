import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {Container, Row, Col} from "react-bootstrap";

function AboutCard(props) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col>
            Picture
          </Col>
            Text
          <Col>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
