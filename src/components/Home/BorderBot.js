import React from "react";
import borderbot from "../../Assets/borderbot.png";
import { Row } from "react-bootstrap";

function BorderBot() {
  return (
    <Row className="home-section">
        <img 
            src={borderbot} 
            alt="border-bot" 
            className="img-fluid"
            width="1300"
            height="800"
        />
    </Row>
  );
}

export default BorderBot;