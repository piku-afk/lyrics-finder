import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Trending from './Trending';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import TrackDetails from './TrackDetails';
import Lyrics from './Lyrics';
import ArtistDetails from './ArtistDetails';


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

  const classes = useStyles();

  return (
      <Container classes={{
        root: classes.container
      }} >

        <Switch>

          <Route path='/' exact >
            <Trending />
          </Route>

          <Route path='/search/' exact >
            <Search />
          </Route>

          <Route path='/track/:id' exact >
            <TrackDetails />
          </Route>

          <Route path='/artist/:id' exact >
            <ArtistDetails />
          </Route>

          <Route path='/lyrics/:artist/:track' exact >
            <Lyrics />
          </Route>

        </Switch>

      </Container>
  );
}
