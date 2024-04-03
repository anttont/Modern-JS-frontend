import React from 'react'
import "./whatGPT3.css"
import Feature from '../../components/feature/feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
         <Feature title="What is GPT3" text="I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."/>
         </div>
         <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
         </div>
         <div className='gpt3__whatgpt3-container'>
          <Feature title ="Chat bots" text="I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."/>
          <Feature title ="Knowledgebase" text="Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain" />
          <Feature title ="Education" text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"/>
          
         </div>
    </div>
  )
}

export default WhatGPT3
