import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const Header = () => {
  const handleClick = async (e, path) => {
    if (path === '/reboot') {
      await fetch(`${process.env.REMOTE_HOST}/reboot`);
    }
    if (path === '/shutdown') {
      await fetch(`${process.env.REMOTE_HOST}/shutdown`);
    }
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>YT Remote</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='#link'>Remote Setup</Nav.Link>
            <NavDropdown title='Settings' id='basic-nav-dropdown'>
              <NavDropdown.Item
                href='/'
                onClick={(e) => handleClick(e, '/reboot')}
              >
                Reboot
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href='/'
                onClick={(e) => handleClick(e, '/shutdown')}
              >
                Shutdown
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
