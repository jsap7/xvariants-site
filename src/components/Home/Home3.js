import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home3() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Can't you see me blud, I'm outside
            </h1>
            <p className="home-about-body">
              
              <br />
              <br />Man have got hoes some days,
              <i>
                <b className="purple"> And wanna be alone some days </b>
              </i>
              <br />
              <br />
              True, say I be at home somedays,&nbsp;
              <i>
                <b className="blue">and be drillin' with the bros somedays </b>
              </i>
              <br />
              <br />
              Mama told me not to <b className="green">sell work.</b> Seventeen five, same color 
              <i>
                <b className="purple">
                  {" "}
                   T-Shirt.
                </b>
              </i>
              &nbsp; Mama told me not to
              <i>
                <b className="coral"> sell work</b>
              </i>
            </p>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home3;
