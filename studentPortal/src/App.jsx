import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AnnounceResult from './components/AnnounceResult'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/result' element={<AnnounceResult/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
