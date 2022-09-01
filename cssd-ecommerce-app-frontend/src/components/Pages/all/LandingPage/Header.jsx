import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div id='main'>
      <div className='name'>
        <h1>Here to make </h1>
        <h1>Your Life easier</h1>
        {/* <h1>Buy it</h1> */}
        {/* <h1><span>SUCCESS</span></h1> */}
        {/* <p className='details'>Build Your Body And Fitness With Professional Touch</p> */}
        <div className='header-btns'>
          <Link to='/registration'>
            <a href="#" style={{ textDecoration: 'none' }} className='header-btn'>SIGN UP</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
