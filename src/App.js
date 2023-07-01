import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "black"
      document.getElementsByClassName('navTheme')[0].style.display = 'block'
      showAlert("Dark Mode activated", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.getElementsByClassName('navTheme')[0].style.display = 'none'
      showAlert("Light Mode activated", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter" mode={mode}/>
      </div>
    </>
  )
}

export default App;
