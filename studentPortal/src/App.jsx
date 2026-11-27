import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import './App.css'
import Home from './pages/Home'
import AnnounceResult from './pages/AnnounceResult'
import NotFound from './pages/NotFound'
import Auth from './pages/Auth'
import { AuthProvider } from './context/Authcontext'


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<Layouts />}>
              <Route path='/' element={<Home />} />
              <Route path='/result' element={<AnnounceResult />} />
            </Route>

            <Route path='/auth' element={<Auth />} />
            {/* unknown routes */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
