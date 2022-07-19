import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import logo from "../../Assets/logo.png";
import grid from "../../Assets/grid.svg";
import xFed from "../../Assets/xFed.png";
import halfhead from "../../Assets/head-half.png";
import sidehead from "../../Assets/head-side.png";
import borderbot from "../../Assets/borderbot.png";
import bordertop from "../../Assets/bordertop.png";
import Particle from "../Particle";
import Landing from "./Landing";
import Home2 from "./Home2";
import Type from "./Type";
import Home3 from "./Home3"
import HomeBar from "./HomeBar"
import MarketplaceView from "../Projects/MarketplaceView";
import TheLab from "../Projects/TheLab";
import Story from "./Story";
import BorderTop from "../Home/BorderTop";
import BorderBot from "../Home/BorderBot";
import HowToJoin from "./HowToJoin"


function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Landing/>
        <Story/>
      </Container>
      <TheLab/>
      <HowToJoin/>
      <Home2 />
    </section>
  );
}

export default Home;
