import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-950 w-full h-52 mt-10 text-white flex'>
        <div className='w-5/12 flex flex-col gap-2 ml-4 mt-5'>
            <h1 className='text-4xl'>IRN <br></br>COMUNICACIONES</h1>
            <p>&copy;Derechos reservador IRN 2023</p>
            <h2>Siguenos</h2>
            <div className='flex gap-5 text-2xl'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-youtube"></i>

            </div>
        </div>
        <div className='flex gap-10 mt-10 text-xl '>
            <div className='flex flex-col items-center gap-2'>
                <h4>Music</h4>
                <p className='text-sm'>PODCAST</p>
                <p className='text-sm'>PODCAST</p>
                

            </div>
            <div className='flex flex-col items-center gap-2'>
                <h4>Events</h4>
                <p className='text-sm'>PODCAST</p>
                <p className='text-sm'>PODCAST</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h4>Artists</h4>
                <p className='text-sm'>PODCAST</p>
                <p className='text-sm'>PODCAST</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h4>Blog</h4>
                <p className='text-sm'>PODCAST</p>
                <p className='text-sm'>PODCAST</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h4>Album</h4>
                <p className='text-sm'>PODCAST</p>
                <p className='text-sm'>PODCAST</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h4>Contact</h4>
                <p className='text-sm'>PODCAST</p>
                <p className='text-sm'>PODCAST</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
