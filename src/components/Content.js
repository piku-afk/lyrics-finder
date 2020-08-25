import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import { Paper, makeStyles } from '@material-ui/core';
import Trending from './Trending';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import TrackDetails from './TrackDetails';
import Lyrics from './Lyrics';


const useStyles = makeStyles({
  container: {
    backgroundColor: '#525252',
    maxWidth: 750,
    margin: '66px auto 0',
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

        <Switch>

          <Route path='/' exact>
            {getContent(tabValue)}
          </Route>

          <Route path='/track/:id' exact>
            <TrackDetails />
          </Route>

          <Route path='/lyrics/:artist/:track'>
            <Lyrics />
          </Route>

        </Switch>

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