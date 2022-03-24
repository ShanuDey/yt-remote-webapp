import React, { useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { RemoteContext } from '../contexts/RemoteContext';
import { VideosContext } from '../contexts/VideosContext';

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
    console.log('jsonData', JSONdata);

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
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
    videosContext.setVideos(result);
  };

  const handleCloseVideo = async () => {
    await fetch(`${remoteContext.remoteHost}/close_video`);
  };

  return (
    <div className='container mt-5'>
      <Form className='d-flex' onSubmit={handleSearch}>
        <FormControl
          type='search'
          placeholder='Search Youtube Videos'
          className='me-2'
          aria-label='Search'
          id='searchInput'
        />
        <Button variant='outline-success' type='submit'>
          Search
        </Button>
        <Button
          variant='outline-danger'
          className='ms-2'
          onClick={handleCloseVideo}
        >
          Close
        </Button>
      </Form>
    </div>
  );
};
