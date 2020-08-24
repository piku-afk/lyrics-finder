import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import { Paper } from '@material-ui/core';
import Trending from './Trending';
import Search from './Search';

export default function Content() {

  const {tabValue} = useContext(GlobalContext);

  console.log(tabValue);

  return (
    <Paper>
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