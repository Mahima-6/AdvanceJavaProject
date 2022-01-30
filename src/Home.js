import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import holderjs from "react";
import React from "react";
import img3 from "./bgtrain.jpg";
import img1 from "./1.jpg";
import img2 from "./4.jpg";

export default function Home() {
  let navigate = useNavigate();

  const logout = () => navigate("/login");
  const navHome = () => navigate("/welcome-home");
  const navExplore = () => navigate("/explore");
  const navMessage = () => navigate("/messages");
  const navNotification = () => navigate("/notification");

  return (
    <div className="container-fluid p-0 m-0">
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#home">Train Ticket Booking</Navbar.Brand>
            <span>
              <i>
                <center>
                  <h1 className="text-center">
                    Welcome {sessionStorage.getItem("customerName")}
                  </h1>
                </center>
              </i>
            </span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/checktrain">
                  Train Availability
                </Nav.Link>
                <Nav.Link as={Link} to="/booktrain">
                  Book Ticket
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
