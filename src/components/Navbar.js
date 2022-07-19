import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Container, Row, Col} from "react-bootstrap";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGift, CgGitFork, CgZoomIn } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { FaFlask, FaDiceFive } from "react-icons/fa";
import TextFuturaBold from "./TextFuturaBold";
import { BiAtom } from "react-icons/bi";
import { FontLink } from "../Fonts/FontLink";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiTwotoneEye,
  AiFillContacts,
  AiTwotoneAppstore,
  AiOutlineTrophy,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" defaultActiveKey="#home">
            {/* <Nav.Item href="#home">
              <Nav.Link as={Link} to="#home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> [HOME]
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                href="#thestory"
                onClick={() => updateExpanded(false)}
              >
                <AiTwotoneEye style={{ marginBottom: "2px" }} /> [THE STORY]
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#thelab"
                onClick={() => updateExpanded(false)}
              >
                <FaFlask
                  style={{ marginBottom: "2px" }}
                />{" "}
                [THE LAB]
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#howToJoin"
                onClick={() => updateExpanded(false)}
              >
                <BiAtom style={{ marginBottom: "2px" }} /> [HOW TO JOIN]
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiceFive style={{ marginBottom: "2px" }} /> [MORE]
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
