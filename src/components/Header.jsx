import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-container">
            <span className="logo">MINES</span>
            <div className='header-links-container'>
                <ul className='header-links'>
                    <li>Play more Games</li>
                    <Link to='/landing'><li>Add Money</li></Link>
                    {/* <li></li>
                    <li></li> */}
                </ul>
            </div>
        
        <div className="login-box">
            <Link to='/login'><div className="login-btn">Login</div></Link>
            <Link to='/signup'><div className="signup-btn">Register</div></Link>
        </div>
        </div>
    </div>
  )
}

export default Header