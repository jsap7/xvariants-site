import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import variant1 from "../../Assets/Variants/variant-1.png";
import variant2 from "../../Assets/Variants/variant-2.png";
import variant3 from "../../Assets/Variants/variant-3.png";
import variant4 from "../../Assets/Variants/variant-4.png";
import variant5 from "../../Assets/Variants/variant-5.png";
import variant6 from "../../Assets/Variants/variant-6.png";
import variant7 from "../../Assets/Variants/variant-7.png";
import variant8 from "../../Assets/Variants/variant-8.png";
import variant9 from "../../Assets/Variants/variant-9.png";

function MarketplaceView() {
  return (
    <Container className="lab-section">
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <Container>
      <Col md={7} className="home-about-description">
        <h1 style={{ fontSize: "2.4em" }}>
          [The Subjects]
        </h1>
      </Col>
    </Container>
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant1}
        isBlog={false}
        title="Subject: xVariant#0001"
        description="Control Freak"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>

    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant2}
        isBlog={false}
        title="Subject: xVariant#0002"
        description="Stoner"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant3}
        isBlog={false}
        title="Subject: xVariant#0003"
        description="Clumsy"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>

    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant4}
        isBlog={false}
        title="Subject: xVariant#0004"
        description="Stoner"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant5}
        isBlog={false}
        title="Subject: xVariant#0005"
        description="Alcoholic"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>

    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant6}
        isBlog={false}
        title="Subject: xVariant#0006"
        description="Lazy"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant7}
        isBlog={false}
        title="Subject: xVariant#0007"
        description="Quiet"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant8}
        isBlog={false}
        title="Subject: xVariant#0008"
        description="Bad Driver"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>

    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={variant9}
        isBlog={false}
        title="Subject: xVariant#0009"
        description="Total Slob"
        link="http://localhost:3000/static/media/variant-1.8fe91ca620f58de433d1.png"
      />
    </Col>
    </Row>
    </Container>
  );
}

export default MarketplaceView;
