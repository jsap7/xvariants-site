import React from "react";
import bordertop from "../../Assets/bordertop.png";
import { Row } from "react-bootstrap";

function BorderTop() {
  return (
    <Row className="home-section">
        <img 
            src={bordertop} 
            alt="border-top" 
            className="img-fluid"
            width="1300"
            height="800"
        />
    </Row>
  );
}

export default BorderTop;