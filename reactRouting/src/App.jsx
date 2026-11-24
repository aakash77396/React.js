import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'

import Home from './components/Home'
import About from './pages/About'
import Contact from "./pages/Contact"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/about' element= {<About/>} />
          <Route path ='/contact' element ={<Contact/>} />
          <Route path ='/login' element ={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
