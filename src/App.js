import React, { useState } from 'react'

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router ,Routes,
//   Route

// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    };


const light =()=>{
  setMode('light');
  document.body.style.backgroundColor="white";
  showAlert("light mode has been enabled!!","success")

};


const dark =()=>{
  setMode('dark');
  document.body.style.backgroundColor="black";
  showAlert("Dark mode has been enabled!!","success")

};


const Lblue =()=>{
  setMode('light');
  document.body.style.backgroundColor="#0dcaf0";
  showAlert("Blue mode has been enabled!!","success")
};


const yellow =()=>{
  setMode('light');
  document.body.style.backgroundColor="yellow";
  showAlert("Yellow mode has been enabled!!","success")

};
const red =()=>{
  setMode('light');
  document.body.style.backgroundColor="red";
  showAlert("Red mode has been enabled!!","success")

};
const green  =()=>{
  setMode('dark');
  document.body.style.backgroundColor="green";
  showAlert("Greens mode has been enabled!!","success")

};

  // const toggleMode = ()=>{
  //   if(Mode === 'light'){ 
  //     setMode ('dark');
  //     document.body.style.backgroundColor="#042743"
  //     showAlert("Dark mode has been enabled!!","success")
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor="white"
  //     showAlert("Light mode has been enabled!!","success")
  //   }
  
  return (
<>
<Navbar heading="Portfolio" mode={Mode} light={light} red={red} green={green} dark={dark} Yellow={yellow} lblue={Lblue}  /> {/*  toggleMode={toggleMode} */}
<Alert  alert={alert}/>
<div className="container my-3">
<Text mode={Mode}  light={light} dark={dark}  red={red} green={green} Yellow={yellow} lblue={Lblue} showAlert={showAlert}/>
    {/* <Routes>
  <Route exact path="/about" element={<About />} />

    <Route exact path='/' element={<Text mode={Mode}  light={light} dark={dark}  red={red} green={green} Yellow={yellow} lblue={Lblue} showAlert={showAlert}/>} / >


  </Routes> */}


           





</div>
</>
  );
}

export default App;
