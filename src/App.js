import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import Aboutus from './components/Aboutus';

function App() {
  const [mode, setMode] = useState('light')
  const [btn, setBtn] = useState('Enable Light Mode')
  const [alert, setAlert] = useState('')
  // const [color, setColor] = useState("primary")

  // const showColor =(message,type)=>{
  //   setColor({
  //     msg:message,
  //     type:type
  //  })
  // }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtn('Enable Light Mode');
      document.body.style.backgroundColor = '#042732';
      showAlert("Dark mode is enabled", "success");
    }
    else 
      {
        setMode('light');
        setBtn('Enable Dark Mode');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode is enabled", "success");
      }
  }

  return (
    <>
      <Navbar title="Textutils" about="About us" mode={mode} toggleMode={toggleMode} btn={btn} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
