import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <Link to='/' className='brand--name'>CANV<span>AI</span></Link>
        <Link className='about--link' to='/about'>About</Link>
    </header>
  )
}

export default Navbar