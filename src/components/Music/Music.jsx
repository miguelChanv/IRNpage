import React from 'react'
import jose from '../../assets/JOSEj.jpg'
import gali from '../../assets/gali.jfif'
import juanito from '../../assets/juanito.jfif'
import firme from '../../assets/firme.jpg'
const Music = () => {
  return (
    <>
    
    <div className='flex gap-6 mt-10 flex-wrap '>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 border-2 border-yellow-500 ' src={jose} alt="" />
        <p>Jose Jose</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 border-2 border-yellow-500 ' src={gali} alt="" />
        <p>Galy Galindo</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 border-2 border-yellow-500  ' src={juanito} alt="" />
        <p>Juan Gabriel</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 ' src={jose} alt="" />
        <p>ARTISTA</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 border-2 border-yellow-500 ' src={firme} alt="" />
        <p>Grupo Firme</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 ' src={jose} alt="" />
        <p>ARTISTA</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 ' src={jose} alt="" />
        <p>ARTISTA</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 ' src={jose} alt="" />
        <p>ARTISTA</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 ' src={jose} alt="" />
        <p>ARTISTA</p>
        <p>GENERO </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <img className='rounded-full w-48 ' src={jose} alt="" />
        <p>ARTISTA</p>
        <p>GENERO </p>
      </div>

    </div>
    </>
  )
}

export default Music