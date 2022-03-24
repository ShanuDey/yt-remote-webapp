import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>YT Remote</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Remote Setup</Nav.Link>
            <NavDropdown title='Settings' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Reboot</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.3'>Shutdown</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
