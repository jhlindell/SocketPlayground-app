import React from 'react';
import MainDisplayContainer from './components/MainDisplayContainer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    textAlign: 'center',
  }
}

const App = () => {
  return (
    <div style={styles.container}>
      <MainDisplayContainer />   
    </div>
  );
}

export default App;
