import React from 'react';
import './App.css';
import Page from '../Page/Page';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(0);
  
  React.useEffect(() => {
    function resizeWindow (evt) {
      setWindowWidth(evt.target.innerWidth);
    }
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, []);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  return (
    <div className='app'>
      <Page />
    </div>
  );
}

export default App; 
