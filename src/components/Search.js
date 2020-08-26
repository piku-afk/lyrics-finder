import React, { useState, useEffect, useRef } from 'react';
import { Paper, TextField, makeStyles } from '@material-ui/core';
import './css/search.css'
import GetTable from './GetTable';

const useStyles = makeStyles({
  paperContainer: {
    padding: 10
  },
  formContainer: {
    padding: '15px 10px'
  }
});

export default function Search() {

  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('maroon 5');
  const [searchTrack, setSearchTrack] = useState([]);
  const [searchArtist, setSearchArtist] = useState([]);
  const inputRef = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    setSearchValue(inputRef.current.value);
  }

  useEffect(() => {
    fetch(`http://api.napster.com/v2.2/search/verbose?apikey=${process.env.REACT_APP_API_KEY}&query=${searchValue}&per_type_limit=5`)
      .then(res => res.json())
      .then(data => {
        setSearchTrack(data.search.data.tracks);
        setSearchArtist([data.search.data.artists[0]]);
      });
  }, [searchValue]);

  return (
    <Paper classes={{
      root: classes.paperContainer
    }}>
      <Paper classes={{
      root: classes.formContainer
    }}>
        <form onSubmit={handleChange}>
          <TextField 
            label='Search'
            fullWidth
            inputRef={inputRef}
          />
        </form>
      </Paper>
      <GetTable title='Tracks' data={searchTrack} song />
      <GetTable title='Artists' data={searchArtist} />
    </Paper>
  );
}