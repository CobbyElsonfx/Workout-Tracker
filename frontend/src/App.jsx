import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import  Home  from "./pages/Home"
import Navbar from "./components/Navbar"
import Forms from "./components/Forms"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
         <div  className="pages">
          <Routes>
              <Route 
              path="/"
              element ={<Home/>}
              />
            </Routes>
          </div>
          <Forms/>
      </BrowserRouter>
        
    </div>
  )
}

export default App
