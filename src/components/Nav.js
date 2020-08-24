import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Paper } from '@material-ui/core';


const useStyles = makeStyles({
  h1: {
    fontSize: 28
  }
});


function Nav() {
  
  const classes = useStyles();
 
  return (

        <AppBar position='static'>
          <Paper elevation={0}>
            <Toolbar>
              <Typography variant='h1' classes={{
                h1: classes.h1
              }} > 
                Lyrics Finder
              </Typography>
            </Toolbar>
          </Paper>
        </AppBar>

  );
}

export default Nav;