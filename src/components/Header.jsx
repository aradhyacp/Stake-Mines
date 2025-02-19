import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-container">
            <span className="logo">MINES</span>
            <div className='header-links-container'>
                <ul className='header-links'>
                    <li>Play more Games</li>
                    <li>Add Money</li>
                    {/* <li></li>
                    <li></li> */}
                </ul>
            </div>
        
        <div className="login-box">
            <div className="login-btn">Login</div>
            <div className="signup-btn">Register</div>
        </div>
        </div>
    </div>
  )
}

export default Header