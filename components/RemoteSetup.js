import React from 'react';
import { Form, FormControl, Card, Button } from 'react-bootstrap';
import { LOCAL_STORAGE_KEY } from './Layout';
import { toast } from 'react-toastify';

const RemoteSetup = () => {
  const handleSetupRemoteHost = (event) => {
    event.preventDefault();
    const remoteHostAddress = event.target.remoteHostAddress.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, remoteHostAddress);
    toast.success('New remote host saved');
  };

  return (
    <div className='container mt-5'>
      <Card className='text-center'>
        <Card.Header>Remote Setup</Card.Header>
        <Card.Body>
          <Card.Title>Change Remote Host Address</Card.Title>
          <Form onSubmit={handleSetupRemoteHost}>
            <Card.Text>
              <FormControl
                type='url'
                className='text-center'
                placeholder='Remote Host Address'
                aria-label='Remote Host'
                id='remoteHostAddress'
              />
            </Card.Text>
            <Button variant='outline-primary' type='submit'>
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RemoteSetup;
