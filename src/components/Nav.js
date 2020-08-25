import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    backgroundColor: '#ca3e47',
    color: 'white'
  },
  toolbar: {
    padding: '1 16px'
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

        <AppBar position='fixed' classes={{
          root: classes.root
        }} >
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
        </AppBar>

  );
}

export default Nav;