import React from 'react'
import "./App.css"
//import { Article, Brand, CTA} from "./components"
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from "./containers"
import {CTA, Brand, Navbar} from "./components"

const App = () => {
  return (
    <div className="App">
      <div className = "gradient__bg"></div>
      <Navbar/>
      <Header/>
      <div>
        <Brand/>
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App

