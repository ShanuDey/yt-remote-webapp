import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { VideosContext } from '../contexts/VideosContext';
import { Video } from './Video';

export const VideoList = () => {
  const videosContext = useContext(VideosContext);
  console.log('videos count : ', videosContext.videos.length);

  return (
    <div className='container mt-5'>
      <Row xs={1} md={2} className='g-4'>
        {videosContext.videos.map((video) => (
          <Col key={video.videoId}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
