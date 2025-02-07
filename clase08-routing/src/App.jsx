import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {home,login,register} from "./routes/path"
import Datos from './components/Datos'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={home}  element={<Home />} />
          <Route path={login} element={<Login/>} />
          <Route path={register} element={<Register />} />
          <Route path="/datos/:id" element={<Datos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
