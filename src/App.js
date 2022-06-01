// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './myComponents/About';
import Alert from './myComponents/Alert';
import NavBar from './myComponents/NavBar';
import TextForm from './myComponents/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")



  const [alert, setAlert] = useState(null)
  const handleAlert = (msg, title) => {
    setAlert({
      msg: msg,
      title: title
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)

  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark")
      handleAlert("dark mode has been enabled", "success")
    }
    else {
      setMode("light")
      handleAlert("light mode has been enabled", "success")
    }
  }





  return (
    <div className="App">
      <Router>



        <NavBar mode={mode} toggleMode={toggleMode} handleAlert={handleAlert} title="Text Utils" about="About TextUtils" />
        <Alert alert={alert} />
        {/* <About mode={mode} toggleMode={toggleMode} /> */}


        <Routes>

        <Route exact path="/" element={<TextForm mode={mode} toggleMode={toggleMode} heading="Enter Your Text Below" />}></Route>
        <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />}></Route>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
