import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import xrp from "../../Assets/xrp.png";
function TheTech() {
  return (
    <section>
      <Row className="story-about-row">
              <>
                <Col className="lab-description-2">
                  <h className="heading" style={{textAlign: 'center', paddingRight: 80}}>[THE TECH]</h>
                  <p className="lab-about-body-2" style={{paddingTop: 20, paddingLeft: 0, paddingRight: 20}}>
                    <br/>
                    <br/>
                    <b className="purple">xVariants</b> is a community driven collection of
                    <b className="blue"> 10,000</b> randomly generated <b className="green"> XLS-20 </b> tokens on the XRP Ledger.
                    <br/>
                    <br/>
                    The XRP ledger is an incredibly advanced blockchain <b className="blue"> without </b>
                    any <b className="pink"> gas fees </b> or carbon footprint.
                    <br/>
                    <br/>
                    That means minting your <b className="purple">Variant</b> will come at <b className="pink"> no </b> additional cost than what is displayed
                    <br/>
                    <br/>
                    Better for your <b className="blue"> pockets </b> and the  <b className="green"> Earth</b>!
                    <br/>
                    <br/>
                    What makes XRP so advanced compared to the other blockchains is really its ability to
                    simplify the process of creating and sending information as immutable data in a network built to expand. 
                    <br/>
                    <br/>
                    Its open source … run by a <b className="purple">centralized authority</b>.
                  </p>
                </Col>
                <Col md={5} className="story-about-pic-r" style={{paddingTop: 120}}>
                  <img
                    src={xrp}
                    alt="pic"
                    className="img-fluid"
                    style={{ maxHeight: "650px", maxWidth: "450px", borderRadius: "35px" }}
                  />
                </Col>
              </>
          </Row> 
    </section>
  );
}

export default TheTech;
