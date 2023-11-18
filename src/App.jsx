import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Grid from './components/Grid'


function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Grid/>
    </div>
  )
}

export default App
