import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import './App.css'
import Home from './pages/Home'
import AnnounceResult from './components/AnnounceResult'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path='/' element={<Home />} />
            <Route path='/result' element={<AnnounceResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
