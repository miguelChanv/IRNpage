import React from 'react'
import fondo from '../../assets/fondo.jpg'

const Banner = () => {
  return (
    <div className='bg-zinc-600 w-full h-96  flex justify-center items-center'>
      <img className='w-full h-full' src={fondo} alt="" />
    </div>
  )
}

export default Banner
