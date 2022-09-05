import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "@mui/material";
import Hamburger from "hamburger-react";
const NavbarWrapper = styled.section`
  .navbar {
    margin-top: 20px;
  }
  .navlink {
    margin-right: 40px;
    text-decoration: none;
    color: light-blue;
  }
  .div-center {
    margin-left: 80px;
  }
  h5 {
    background-image: linear-gradient(to right, purple, purple 50%, #000 50%);
    background-size: 200% 100%;
    font-size: 18px;

    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }

  h5:before {
    content: "";
    background: purple;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  h5:hover {
    background-position: 0;
  }

  h5:hover::before {
    width: 100%;
  }
  Button {
    background-color: purple;
  }
  Button:hover {
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 930px) {
    .navlink {
      margin-left: 40px;
      margin-bottom: 20px;
    }
    .navbutton {
      margin-left: -120px;
    }
  }
  @media screen and (max-width: 820px) {
    .navbar {
      margin-top: 20px;
    }
    .navlink {
      margin-left: 30px;
      margin-bottom: 13px;
    }
    .navbutton {
      margin-left: -90px;
    }
  }
  @media screen and (max-width: 540px) {
    .navlink {
      margin-left: -55px;
    }
    .navbutton {
      margin-left: -80px;
    }
  }
  @media screen and (max-width: 539px) {
    .navlink {
      margin-left: -105px;
    }
    .navbutton {
      margin-left: -80px;
    }
  }

  @media screen and (max-width: 280px) {
    .navlink {
      margin-left: -165px;
      margin-bottom: 5px;
    }
    .navbutton {
      margin-left: -80px;
    }
  }
`;

function CollapsibleExample() {
  return (
    <NavbarWrapper>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="black"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src="images/logo.png" alt="profile img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Hamburger size={30} />
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav" className="div-center">
            <Nav className="me-auto" style={{ marginLeft: 170 }}>
              <Link className="navlink">
                <h5>Home</h5>
              </Link>
              <Link className="navlink">
                <h5>About me</h5>
              </Link>
              <Link className="navlink">
                <h5>Portfolio</h5>
              </Link>
              <Link className="navlink">
                <h5>Contact us</h5>
              </Link>
            </Nav>
            <Nav className="navbutton">
              <Button variant="dark">Contact Me</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarWrapper>
  );
}

export default CollapsibleExample;
