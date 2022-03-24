import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { VideoList } from '../components/VideoList';
import { VideosContext } from '../contexts/VideosContext';
import { useEffect, useState } from 'react';
import { RemoteContext } from '../contexts/RemoteContext';

export const LOCAL_STORAGE_KEY = 'YT_Remote_Key';

export default function Home() {
  const [videos, setVideos] = useState([]);
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
          <VideosContext.Provider value={{ videos, setVideos }}>
            <Search />
            <VideoList />
          </VideosContext.Provider>
        </RemoteContext.Provider>
      </main>
    </div>
  );
}
