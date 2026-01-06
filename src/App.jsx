import React from 'react'
import Home from './pages/Home'
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div>
      <Home/>
      <ToastContainer/>{/*now it can be used anywhere in App*/}
    </div>
  )
}

export default App
