import Image from 'next/image';
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { RemoteContext } from '../contexts/RemoteContext';

export const Video = ({ video }) => {
  const remoteContext = useContext(RemoteContext);

  const handleVideoPlay = async () => {
    const data = `video_url=${encodeURIComponent(video.url)}`;

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

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
  };

  return (
    <Card border='primary'>
      {/* <Card.Img variant='top' src={video.thumbnail} /> */}
      <Image
        src={video.thumbnail}
        alt={'Video Thumbnail'}
        height={720}
        width={1280}
        layout='responsive'
      />
      <Card.Body>
        <Card.Title>{video.title.slice(0, 40)}...</Card.Title>
        <Card.Text>{video.description.slice(0, 50)}...</Card.Text>
        <div className='text-end'>
          <Button variant='success' onClick={handleVideoPlay}>
            Play
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className='text-muted text-center'>
        {video.duration.timestamp}
      </Card.Footer>
    </Card>
  );
};
