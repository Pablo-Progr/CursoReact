import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const router = createBrowserRouter([{
  path: "/",
  element: <Home/>,
  errorElement: <h3>Pagina No Encontrada</h3>,
},{
  path: "/Register",
  element: <Register/>,
  errorElement: <h3>Pagina No Encontrada</h3>,
},{
  path: "/Login",
  element: <Login/>,
  errorElement: <h3>Pagina No Encontrada</h3>,
  
},
])

createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router}/>
    <App />
)
