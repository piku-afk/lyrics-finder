import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper, makeStyles, Typography, Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ReactAudioPlayer from 'react-audio-player';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    placeItems: 'center'
  },
  parentPaper: {
    marginTop: 66,
    padding: '10px'
  },
  imgContainer: {
    padding: '30px 0',
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

const audioPlayer = {
  display: 'block',
  margin: '15px auto 0'
}


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





  console.log(track);

  return (
      <Container classes={{
        root: classes.container
      }}>
        <Paper classes={{
          root: classes.parentPaper
        }} square>
          <Paper classes={{
            root: classes.imgContainer
          }} elevation={2} square >
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
            {track.artistName}
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
      </Container>
  );
}


const image = {
  display: 'block',
  margin: 'auto'
}