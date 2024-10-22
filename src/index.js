import React from 'react'
import * as ReactDOMClient  from 'react-dom/client'
import Header from './components/header'
import Obloshka from './components/abloshka'
import Section from './components/Section'
import Project from './components/project'
import Material from './components/material'
import Footer from './components/footer'
import './css/partfol.css'

const App=()=>{
  return(
  <div>
    <Header/>
    <Obloshka/>
    <Section/>
    <Project/>
    <Material/>
    <Footer/>

  </div>
  )
}

const app =ReactDOMClient.createRoot(document.getElementById('root'))
app.render(<App/>)