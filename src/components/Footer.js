import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    backgroundColor: '#323232',
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  selected: {
    color: '#ca3e47 !important'
  },
  initial: {
    color: '#525252'
  }
});

export default function Footer() {

  const {tabValue, setTabValue} = useContext(GlobalContext);
  const classes = useStyles();
 

  return (

      <BottomNavigation

      classes={{
        root: classes.root
      }}

      value={tabValue}
       onChange={(e, newValue) => {
        setTabValue(newValue)
       }}

      >
          <BottomNavigationAction classes={{
            selected: classes.selected,
            iconOnly: classes.initial
          }} component={Link} to='/' label='Trending' icon={<TrendingUpIcon />} />


        <BottomNavigationAction classes={{
          selected: classes.selected,
          iconOnly: classes.initial
        }} component={Link} to='/search/' label='Search' icon={<SearchIcon />} />
      </BottomNavigation>


  );
}