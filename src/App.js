// import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForms from './components/TextForms';
// let name = "Ashu01"
function App() {
  return (
    <>
      <Navbar title="textUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        {/* <TextForms heading="Enter the text to anylyst below" /> */}
        <About></About>
      </div>
    </>
  );
}
export default App;