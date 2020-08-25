import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Paper, makeStyles, Typography, Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ReactAudioPlayer from 'react-audio-player';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    placeItems: 'center'
  },
  parentPaper: {
    marginTop: 66,
    padding: '10px 5px'
  },
  h5 : {
    margin: '15px 0 20px'
  },
  h6: {
    marginTop: 15
  },
  subtitle2: {
    marginBottom: 15
  },
  icon: {
    fontSize: 10,
    margin: '0 10px'
  }, 
  button: {
    color: '#ca3e47',
    border: '1px solid #ca3e47',
    display: 'inline-block',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
  }
});


export default function TrackDetails() {

  
  const classes = useStyles();


  const { id } = useParams();
  const [track, setTrack] = useState({});

  useEffect(() => {

    fetch(`http://api.napster.com/v2.2/tracks/${id}?apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => setTrack(data.tracks[0]));

  }, [id]);

  const imgSrc = `https://api.napster.com/imageserver/v2/albums/${track.albumId}/images/300x300.jpg`;

  return (
        <Paper classes={{
          root: classes.parentPaper
        }} square>
          <Typography classes={{
            h5: classes.h5
          }} variant='h5' align='center' >
            {track.albumName}
          </Typography>
          <Paper elevation={2} square >
            <img style={image} src={imgSrc} alt={track.name}/>
          </Paper>
        
          <Typography classes={{
            h6: classes.h6
          }} variant='h6' align='center'>
            {track.name}
          </Typography>
          <Typography classes={{
            subtitle2: classes.subtitle2
          }} variant='subtitle2' align='center'>
            <Link style={link} to={`/artist/${track.artistId}`} >
              {track.artistName}
            </Link>
            <FiberManualRecordIcon classes={{
              root: classes.icon
            }} fontSize='small' />
            {(track.playbackSeconds / 60).toFixed(2).replace(/\./, ':')}
          </Typography>
          <Button href={`/lyrics/${track.artistName}/${track.name}`} size='small' classes={{
            outlined: classes.button
          }} variant='outlined' >
              get lyrics
          </Button>
          <ReactAudioPlayer style={audioPlayer} src={track.previewURL} controls/>

        </Paper>
  );
}


const image = {
  display: 'block',
  margin: 'auto',
  width: '100%',
  height: '300px',
  objectFit: 'contain'
}

const audioPlayer = {
  display: 'block',
  margin: '15px auto 0',
  width: '100%',
  maxWidth: '300px'
}

const link = {
  color: 'white',
  textDecoration: 'none'
}