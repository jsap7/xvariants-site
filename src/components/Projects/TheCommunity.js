import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colonies from "../../Assets/13colonies.png";
function TheCommunity() {
  return (
    <section>
      <Row className="story-about-row">
              <>
                <Col md={5} className="story-about-pic-r" style={{paddingTop: 250}}>
                  <img
                    src={colonies}
                    alt="pic"
                    className="img-fluid"
                    style={{ maxHeight: "650px", maxWidth: "500px", borderRadius: "35px" }}
                  />
                </Col>
                <Col className="lab-description-2">
                  <h className="heading" style={{textAlign: 'center', paddingRight: 80}}>[THE COMMUNITY]</h>
                  <p className="lab-about-body-2" style={{paddingTop: 20, paddingLeft: 30, paddingRight: 20}}>
                    <br/>
                    <br/>
                    The syndicate of Variants is known as the <b className="blue"> xFederation</b>, <b className="blue"> xFed</b> for short.

                    This is a entity divided into <b className="pink"> 13 colonies </b> that are assembled with the purpose of following the path of
                    the dauntless by creating a republic working to improve the <b className="purple"> community </b> and 
                    create an innovative experience for all of the <b className="green"> Variants</b>.
                    <br/>
                    <br/>
                    <b className="blue">Create or Join colonies</b>
                    <br/>
                        <li style={{textAlign: 'left'}}>Propose new ideas</li>
                        <li style={{textAlign: 'left'}}>Vote on changes using colonies</li>
                    <br/>
                    <b className="purple">IP Ownership</b>
                    <br/>
                        <li style={{textAlign: 'left'}}>Receive full IP ownership of your variant</li>
                        <li style={{textAlign: 'left'}}>Create…</li>
                        <br/>
                    <b className="pink">Collect and Earn</b>
                    <br/>
                        <li style={{textAlign: 'left'}}>Collect more variants and build a larger colony with the most rare variants. These colonies get competitive </li>
                        <li style={{textAlign: 'left'}}>Play to earn games is on the horizon. Help the xFed reach its goals so we can develop a utopian society within the blockchain </li>
                        <li style={{textAlign: 'left'}}>Trade your variants with others</li>

                        


                  </p>
                </Col>
              </>
          </Row> 
    </section>
  );
}

export default TheCommunity;
