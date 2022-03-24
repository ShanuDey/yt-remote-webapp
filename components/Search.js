import React, { useContext, useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { VideosContext } from '../contexts/VideosContext';

export const Search = () => {
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
      </Form>
    </div>
  );
};