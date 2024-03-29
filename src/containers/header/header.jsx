import React from 'react'
import "./header.css"
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home"> 
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laltion ullamco</p>

      <div className='gpt3__header-content__input'>
        <input type="email" placeholder='Your email address' />
        <button type="button"> Get started </button>
      </div>

      <div className='gpt3__header-content__people'>
        <img src={people}/>
        <p>1111 people have requested access</p>
      </div>

      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai"  />
      </div>
    </div>
  )
}

export default Header
