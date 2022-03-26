import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { RemoteContext } from '../contexts/RemoteContext';

export const Header = () => {
  const remoteContext = useContext(RemoteContext);

  const handleClick = async (e, path) => {
    if (path === '/reboot') {
      await fetch(`${remoteContext.remoteHost}/reboot`);
      toast.error('Rebooting...');
    }
    if (path === '/shutdown') {
      await fetch(`${remoteContext.remoteHost}/shutdown`);
      toast.error('Shutting Down...');
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
            <Nav.Link href='/views/remote_setup'>Remote Setup</Nav.Link>
            <NavDropdown title='Settings' id='basic-nav-dropdown'>
              <NavDropdown.Item onClick={(e) => handleClick(e, '/reboot')}>
                Reboot
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={(e) => handleClick(e, '/shutdown')}>
                Shutdown
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
