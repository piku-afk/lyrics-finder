import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import GetTable from './GetTable';

export default function ArtistDetails() {

  const classes = useStyles();
  const { id } = useParams();
  const [artist, setArtist] = useState({
    bios: [{
      bio: ''
    }],
    links: {}
  });
  const [topTrack, setTopTrack] = useState([]);

  useEffect(() => {
    fetch(`http://api.napster.com/v2.2/artists/${id}?apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => setArtist(data.artists[0]));

    fetch(`http://api.napster.com/v2.2/artists/${id}/tracks/top?apikey=${process.env.REACT_APP_API_KEY}&limit=15`)
      .then(res => res.json())
      .then(data => setTopTrack(data.tracks));

  }, [id]);

  // console.log(topTrack);
  // console.log(artist);

  const imgSrc = `https://api.napster.com/imageserver/v2/artists/${id}/images/356x237.jpg`;

  return (
      <Paper classes={{
          root: classes.textContainer
        }}>
        <Paper elevation={2} >
          <img style={image} src={imgSrc} alt={artist.name} />
        </Paper>
        <Typography classes={{
          h6: classes.h6
        }} variant='h6' align='center' >
          {artist.name}
        </Typography>
        {/* <Typography classes={{
          body1: classes.body1
        }} variant='body1' >
          {artist.bios[0].bio}
        </Typography> */}
        <GetTable title='Top songs' data={topTrack} song />
      </Paper>
  );
}

const image = {
  display: 'block',
  margin: 'auto',
  height: '237px',
  width: '100%',
  objectFit: 'cover'
}

const useStyles = makeStyles({
  textContainer: {
    padding: '10px'
  },
  h6: {
    marginTop: 15
  },
  body1: {
    marginBottom: 15,
    whiteSpace: 'break-spaces'
  }
});