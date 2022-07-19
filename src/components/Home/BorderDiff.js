import React from "react";
import borderdiff from "../../Assets/borderdiff.png";
import { Row } from "react-bootstrap";

function BorderDiff() {
  return (
    <Row className="home-section">
        <img 
            src={borderdiff} 
            alt="border-diff" 
            className="img-fluid"
            width="1300"
            height="400"
        />
    </Row>
  );
}

export default BorderDiff;