import React, { useState, useEffect } from 'react';
import GetTable from './GetTable';

export default function Trending() {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {

    fetch(`http://api.napster.com/v2.2/tracks/top?apikey=${process.env.REACT_APP_API_KEY}&limit=10`)
      .then(res => res.json())
      .then(data => setTracks(data.tracks));

    fetch(`http://api.napster.com/v2.2/artists/top?apikey=${process.env.REACT_APP_API_KEY}&limit=10`)
      .then(res => res.json())
      .then(data => setArtists(data.artists));

  }, []);

  return (
    <>
      <GetTable title='Top 10 songs' data={tracks} song />
      <GetTable title='Top 10 artists' data={artists} />
    </>
  );
}