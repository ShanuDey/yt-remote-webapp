import React, { useContext } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import { VideosContext } from '../contexts/VideosContext';
import { Video } from './Video';

export const VideoList = () => {
  const videosContext = useContext(VideosContext);

  return (
    <div className='container mt-5 mb-5'>
      <Row xs={1} sm={2} md={4} className='g-4'>
        {videosContext.videos.map((video) => (
          <Col key={video.videoId}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
