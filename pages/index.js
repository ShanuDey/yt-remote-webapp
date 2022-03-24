import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { VideoList } from '../components/VideoList';
import { VideosContext } from '../contexts/VideosContext';
import { useState } from 'react';

export default function Home() {
  const [videos, setVideos] = useState([]);
  return (
    <div>
      <Head>
        <title>YT Remote</title>
        <meta name='description' content='YT remote web application' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <VideosContext.Provider value={{ videos, setVideos }}>
          <Search />
          <VideoList />
        </VideosContext.Provider>
      </main>
    </div>
  );
}
