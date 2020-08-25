import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  toolbar: {
    padding: '10px 16px'
  },
  h1: {
    fontSize: 30
  }
});

const link = {
  color: 'inherit',
  textDecoration: 'none'
}


function Nav() {
  
  const classes = useStyles();
 
  return (

        <AppBar position='static'>
          <Paper square elevation={2}>
            <Toolbar classes={{
              root: classes.toolbar
            }}>
              <Typography variant='h1' classes={{
                h1: classes.h1
              }} > 
                <Link style={link} to='/' >
                  Lyrics Finder
                </Link>
              </Typography>
            </Toolbar>
          </Paper>
        </AppBar>

  );
}

export default Nav;