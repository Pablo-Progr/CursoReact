import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Saludar from './saludar.jsx'
import Despedirme from './despedirme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Saludar />
    <Despedirme/>
  </StrictMode>,
)
