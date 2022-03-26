import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { Form, FormControl, Card, Button } from 'react-bootstrap';
import { LOCAL_STORAGE_KEY } from '../index';
import ConfirmButton from '../../components/ConfirmButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RemoteSetup = () => {
  const handleSetupRemoteHost = (event) => {
    event.preventDefault();
    const remoteHostAddress = event.target.remoteHostAddress.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, remoteHostAddress);
    toast.success('New remote host saved');
  };

  return (
    <div>
      <Head>
        <title>YT Remote</title>
        <meta name='description' content='YT remote web application' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
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
      </main>
      <ToastContainer position='bottom-center' />
    </div>
  );
};

export default RemoteSetup;
