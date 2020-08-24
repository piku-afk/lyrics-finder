import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  selected: {
    color: 'white !important'
  },
  initail: {
    color: 'slategray'
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
          iconOnly: classes.initail
        }} label='Trending' icon={<TrendingUpIcon />} />

        <BottomNavigationAction classes={{
          selected: classes.selected,
          iconOnly: classes.initail
        }} label='Search' icon={<SearchIcon />} />
      </BottomNavigation>


  );
}