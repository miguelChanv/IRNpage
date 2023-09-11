import React from 'react'
import gif from '../../assets/clic.gif'
const Contact = () => {
  return (
  <>
  <div className='bg-contact bg-no-repeat bg-cover rounded-lg text-black w-full'>
    <h1 className='text-center text-6xl mb-8 text-white font-bold p-5'>Contactanos en</h1>
      <div className=' flex gap-7 justify-center'>
        <div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <a className='text-6xl text-blue-600' href="https://www.facebook.com/profile.php?id=100090003677483" target="_blank"> <i className="bi bi-facebook"> </i></a>
            <h1 className='text-white'>Facebook</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <a className='text-6xl text-rose-600'  href="https://www.instagram.com/irncomunicaciones/" target="_blank"><i className="bi bi-instagram"></i></a>
            <h1 className='text-white'>Instagram</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <a className='text-6xl text-green-500' href="https://api.whatsapp.com/send/?phone=525615418189&text&app_absent=0" target="_blank"><i className="bi bi-whatsapp"></i></a>
            <h1 className='text-white'>WhatsApp</h1>
        </div>
      </div>
      <div className='flex flex-col items-center '>
        <h1 className='text-center text-white font-semibold text-4xl mb-8'>O mandanos un correo a</h1>
        <p className='text-center text-2xl  text-white underline'><a href="mailto:irncomunicaciones@hotmail.com">irncomunicaciones@hotmail.com</a></p>
        <img className='w-20' src={gif} alt="" />
      </div>
    </div>
    </>
  )
}

export default Contact
