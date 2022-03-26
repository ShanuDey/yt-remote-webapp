import React, { useEffect, useState } from 'react';
import { RemoteContext } from '../contexts/RemoteContext';
import { Header } from './Header';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export const LOCAL_STORAGE_KEY = 'YT_Remote_Key';

const Layout = ({ children }) => {
  const [remoteHost, setRemoteHost] = useState('http://localhost');

  useEffect(() => {
    // Perform localStorage action
    setRemoteHost(localStorage.getItem(LOCAL_STORAGE_KEY));
  }, []);

  return (
    <div>
      <Head>
        <title>YT Remote</title>
        <meta name='description' content='YT remote web application' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <RemoteContext.Provider value={{ remoteHost, setRemoteHost }}>
          <Header />
          <main>{children}</main>
        </RemoteContext.Provider>
      </main>
      <ToastContainer position='bottom-center' />
    </div>
  );
};

export default Layout;
