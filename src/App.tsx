import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/googleForm/Home';
import { ThemeProvider, useTheme } from '@mui/material';



function App() {
  const theme=useTheme()
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
      <Home />
      </ThemeProvider>
     

       
    </div>
  );
}

export default App;
