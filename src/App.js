import React, { useState } from 'react';
import './components/css/app.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';

export const GlobalContext = React.createContext();

function App() {
  const [tabValue, setTabValue] = useState(0);
  const contextValue = {
    tabValue: tabValue,
    setTabValue: setTabValue
  }

  // console.log(tabValue);


  return (
    <GlobalContext.Provider value={contextValue}>
      <div className="app">
          <Nav />
          <Content />
          <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
