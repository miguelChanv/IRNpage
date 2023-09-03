import React from 'react'
import logo from '../../assets/utn.png'
const Navbar = () => {
  return (
      <header className=' bg-zinc-800 h-24 text-white flex  '>
      <nav className='w-full flex justify-between text-center self-center text-xl ml-5 mr-5'>
        <img className='w-10' src={logo} alt="" />
        <ul className=' flex gap-10 '>
          <li><a href="">BLOG</a></li>
          <li><a href="">MUSICA</a></li>
          <li><a href="">RADIO</a></li>
          <li><a href="">CONOCENOS</a></li>
          <li><a href="">CONTACTANOS</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
