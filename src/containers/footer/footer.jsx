import React from 'react'
import "./footer.css"
import gpt3Logo from "../../assets/logo.svg"


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Copyright All the way from design</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Join JSM on Discord</p>
          <p>Follow JSM on Twitter</p>
          <p>Follow JSM Instagram</p>
          <p>Business Inquiries:</p>
          <p>GitHub Code</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Join JSM on Discord</p>
          <p>Follow JSM on Twitter</p>
          <p>Follow JSM Instagram</p>
          <p>Business Inquiries:</p>
          <p>GitHub Code</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Join JSM on Discord</p>
          <p>Follow JSM on Twitter</p>
          <p>Follow JSM Instagram</p>
          <p>Business Inquiries:</p>
          <p>GitHub Code</p>
        </div>
      </div> 
      <div className='gpt3__footer-copyright'>
        <p>© 2024- All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
