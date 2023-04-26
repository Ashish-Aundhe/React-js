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
        setMode('dark'); //we cant use setMode='dark' bcz its state varibale
        document.body.style.backgroundColor = '#042743';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }
  return (
    <>
     {/* aboutText="About TextUtils" */}
      <Navbar title="textUtils" mode= {mode} toggleMode={toggleMode} />   
      <div className="container my-3">
        <TextForms heading="Enter the text to anylyst below" mode={mode}/>
        {/* <About></About> */}
      </div>
    </>
  );
}
export default App;