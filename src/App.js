import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // Optional: Add intervals to change the document title dynamically
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact  */}
              {/* path="/about"  */}
              {/* element={<About />}  */}
            {/* /> */}
            {/* <Route  exact 
              path="/" 
              element={ */}
                <TextForm 
                  showAlert={showAlert} 
                  heading="Enter the text to analyze below" 
                  mode={mode} 
                />
              {/* } 
            />
            {/* Optional: Add a 404 Not Found Route */}
            {/* <Route 
              path="*"
              element={<h1>404: Page Not Found</h1>} 
            /> */}
          {/* </Routes> */} 
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
