import React, { useState, useEffect } from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    padding: 10
  },
  metadata: {
    padding: '15px 0',
    marginBottom: 20
  },
  text: {
    whiteSpace: 'break-spaces'
  }
});

export default function Lyrics() {

  const classes = useStyles();
  const {artist, track} = useParams();
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${track}`)
      .then(res => res.json())
      .then(data => setLyrics(data.lyrics));
  }, [artist, track]);

  return (
      <Paper classes={{
        root: classes.paper
      }} square >
        <Paper classes={{
          root: classes.metadata
        }} >
        <Typography align='center' variant='h6'>
            {track}
          </Typography>
          <Typography variant='body1' align='center'>
            {artist}
          </Typography>
        </Paper>
        <Typography classes={{
          body1: classes.text
        }} variant='body1'>
          {lyrics.length === 0 ? 'No lyrics found for this song' : lyrics}
        </Typography>
      </Paper>
  );
}