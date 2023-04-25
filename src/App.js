// import logo from './logo.svg';
import './App.css';  
import React, { useState } from 'react';

// import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForms from './components/TextForms'; 

// let name = "Ashu01"
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enablw or not 

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode = 'dark';
      }
      else{
        setMode('light');
      }
    }
  return (
    <>
     {/* aboutText="About TextUtils" */}
      <Navbar title="textUtils" mode= {mode} toggleMode = {toggleMode} />   
      <div className="container my-3">
        <TextForms heading="Enter the text to anylyst below"/>
        {/* <About></About> */}
      </div>
    </>
  );
}
export default App;