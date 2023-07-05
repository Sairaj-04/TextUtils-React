import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      typ : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#495057'
      document.body.style.color = 'white'
      showAlert("Dark mode enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Dark mode disabled", "Success");
    }
  }

  
  return (
   <>
      <Router>
        <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        {/* <Navbar/>*/}   {/*It will display default props */}
        <div className="container my-3" >
          <Routes>
            <Route exact path = "/about" element={<About mode = {mode} />} />
            <Route exact path = "/" element={<TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/>} />
          </Routes>
        </div>
      </Router>
   </>
  );
}

export default App;
