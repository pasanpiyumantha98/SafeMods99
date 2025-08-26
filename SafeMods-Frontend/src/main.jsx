import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './assets/pages/contact'
import Games from './assets/pages/games'
import Mods from './assets/pages/mods'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/games" element={<Games/>}/>
  <Route path="/mods" element={<Mods/>}/>


  </Routes>
    
  </BrowserRouter>,
)
