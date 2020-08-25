import React, { useState } from 'react';
import './components/css/app.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';
import { Paper, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';


const useStyles = makeStyles({
  parentContainer: {
    height: '100%',
    overflowX: 'auto'
  }
});

export const GlobalContext = React.createContext();

function App() {
  const [tabValue, setTabValue] = useState(0);
  const classes = useStyles();
  const contextValue = {
    tabValue: tabValue,
    setTabValue: setTabValue
  }

  // console.log(tabValue);


  return (
    <GlobalContext.Provider value={contextValue}>
      <Router>
        <Paper classes={{
          elevation0: classes.parentContainer
        }} elevation={0}>
            <Nav />
            <Content />
            <Footer />
        </Paper>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
