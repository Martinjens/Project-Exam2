import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import FilterVenues from "../venues/FilterVenues";
import { NavLink } from "react-router-dom";

function MainNav({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Venues</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="nav-link">
                Logout
              </Nav.Link>
            ) : (
              <>
                <NavLink to="/LoginPage" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/RegisterPage" className="nav-link">
                  Register
                </NavLink>
              </>
            )}
          </Nav>
          <FilterVenues />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
