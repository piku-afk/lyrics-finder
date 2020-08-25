import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import { Paper, makeStyles } from '@material-ui/core';
import Trending from './Trending';
import Search from './Search';


const useStyles = makeStyles({
  container: {
    maxWidth: 750,
    margin: 'auto',
    minHeight: '50vh',
    marginBottom: 56,
  }
});

export default function Content() {

  const {tabValue} = useContext(GlobalContext);
  const classes = useStyles();

  return (
      <Paper classes={{
        elevation0: classes.container
      }} elevation={0} square >
        {getContent(tabValue)}
      </Paper>
  );
}

function getContent(value) {
  switch(value) {
    default:
    case 0: return <Trending />;
    case 1: return <Search />;
  }
}