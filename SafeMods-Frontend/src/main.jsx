import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SupportPublic from './assets/pages/support'
import Games from './assets/pages/games'
import Mods from './assets/pages/mods'
import Report from './assets/pages/report'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/support" element={<SupportPublic/>}/>
  <Route path="/games" element={<Games/>}/>
  <Route path="/mods" element={<Mods/>}/>
    <Route path="/report" element={<Report/>}/>


  </Routes>
    
  </BrowserRouter>,
)
