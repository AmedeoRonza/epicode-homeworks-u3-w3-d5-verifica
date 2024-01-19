import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "../Assets/Style.css";

const Sidebar = () => {
  return (
    <Navbar
      expand="md"
      fixed="left"
      className="flex-column align-items-start navbar fixed-left"
    >
      <Nav>
        <ul>
          <li>
            <Nav.Link href="#">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
          </li>
        </ul>
      </Nav>
      <div className="nav-btn">
        <Button className="signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="login-btn" type="button">
          Login
        </Button>
        <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
      </div>
    </Navbar>
  );
}

export default Sidebar;
