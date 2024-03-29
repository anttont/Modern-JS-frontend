import React from 'react'
import "./whatGPT3.css"
import Feature from '../../components/feature/feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wht3">
      <div className='gpt3__whatgpt3-feature'>
         <Feature title="What is GPT3" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own web development portfolio!"/>
         </div>
         <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
         </div>
         <div className='gpt3__whatgpt3-container'>
          <Feature title ="Chat bots" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designe"/>
          <Feature title ="Knowledgebase" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designe" />
          <Feature title ="Education" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designe"/>
          
         </div>
    </div>
  )
}

export default WhatGPT3
