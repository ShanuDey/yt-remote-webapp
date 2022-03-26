import { Search } from '../components/Search';
import { VideoList } from '../components/VideoList';
import { VideosContext } from '../contexts/VideosContext';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [videos, setVideos] = useState([]);

  return (
    <Layout>
      <VideosContext.Provider value={{ videos, setVideos }}>
        <Search />
        <VideoList />
      </VideosContext.Provider>
    </Layout>
  );
}
