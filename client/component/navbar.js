import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <Navbar> 
      <Navbar.Toggle />
      <Navbar.Collapse>

        <Nav>
          <NavItem eventKey={1} href="#">Create a New Event</NavItem>
        </Nav>

        <Nav pullRight>
          <NavItem eventKey={2} href="#">Login / Sign Up</NavItem>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;