import Image from 'next/image';
import React, { useContext } from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
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

  const handlePlayVideoByLink = async (event) => {
    event.preventDefault();
    const url = event.target.yt_video_link.value;
    event.target.yt_video_link.value = '';
    const data = `video_url=${encodeURIComponent(url)}`;

    // API endpoint where we send form data.
    const endpoint = `${remoteContext.remoteHost}/start_video`;

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      // Body of the request is the JSON data we created above.
      body: data,
    };
    await toast.promise(fetch(endpoint, options), {
      pending: 'Loading video ...',
      success: 'Video Found 👌',
      error: 'Failed to start video 🤯',
    });
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>
          <div className='d-inline-block align-top me-2'>
            <Image alt='Logo' src='/icon-512x512.png' width='30' height='30' />
          </div>
          YT Remote
        </Navbar.Brand>
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
          <Form className='d-flex' onSubmit={handlePlayVideoByLink}>
            <FormControl
              type='url'
              placeholder='YT Video Link'
              className='me-2'
              id='yt_video_link'
              aria-label='Search'
            />
            <Button variant='outline-secondary' type='submit'>
              Play
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
