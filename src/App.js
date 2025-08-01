import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react';

// import { BrowserRouter as Router, 
//   Routes as Switch, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');

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

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark';
      // setInterval(() => {
      //   document.title = " Text Util NOw";
      //   }, 1500);

      //    setInterval(() => {
      //   document.title = "Learn React";
      //   }, 2000);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light';
    }

  }


  const colortoggleMide = (mode)=>{
    if (mode === "red") {
      setMode("red");
      document.body.style.backgroundColor = "#b44a4aff";
      showAlert("Red mode has been enabled", "success");
      document.title = 'TextUtils - Red';

    }
    else if (mode === "green") {
      setMode("green");
      document.body.style.backgroundColor = "#3f7c5eff";
      showAlert("Green mode has been enabled", "success");
      document.title = 'TextUtils - Green';


    }
    else if (mode === "yellow") {
      setMode("yellow");
      document.body.style.backgroundColor = "#e0d318ff";
      showAlert("Yellow mode has been enabled", "success");
      document.title = 'TextUtils - Yellow';

    }
  }





  return (
      <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} colortoggleMide = {colortoggleMide} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Text heading="Enter the text to analyzer below" mode={mode} showAlert={showAlert} />
         {/* <Switch>
          <Route  exact path="/about" element={<About />} />
          <Route exact path="/" element={<Text heading="Enter the text to analyzer below" mode={mode} showAlert={showAlert} />} />
        </Switch> */}
      </div>
    {/* // </Router> */}
    </>


  );
}

export default App;
