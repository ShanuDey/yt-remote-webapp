import React, { useContext } from 'react';
import { Form, FormControl, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { RemoteContext } from '../contexts/RemoteContext';
import { VideosContext } from '../contexts/VideosContext';
import ConfirmButton from './ConfirmButton';

export const Search = () => {
  const remoteContext = useContext(RemoteContext);
  const videosContext = useContext(VideosContext);

  const handleSearch = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      searchKeyword: event.target.searchInput.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/searchVideos';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await toast.promise(fetch(endpoint, options), {
      pending: 'searching in youtube ...',
      success: 'Found videos in youtube 👌',
      error: 'Failed to get videos from youtube 🤯',
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    videosContext.setVideos(result);
  };

  const handleCloseVideo = async () => {
    await toast.promise(fetch(`${remoteContext.remoteHost}/close_video`), {
      pending: 'Closing video ...',
      success: 'Video Closed 👌',
      error: 'Failed to close video 🤯',
    });
  };

  return (
    <div className='container mt-5'>
      <Card className='text-center' border='info'>
        <Card.Header>Search Youtube Videos</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSearch}>
            <Card.Text>
              <FormControl
                type='search'
                placeholder='Example: Tom and Jerry'
                className='text-center'
                aria-label='Search'
                id='searchInput'
              />
            </Card.Text>
            <Button variant='outline-success' type='submit'>
              Search
            </Button>
            <ConfirmButton
              className='ms-2'
              variant='outline-danger'
              handleYes={handleCloseVideo}
              title={'Close Video'}
              body={'Do you want to close the currently playing video?'}
            >
              Close Video
            </ConfirmButton>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
