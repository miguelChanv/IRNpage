import Heading3 from "../Titles/Heading3"
import FooterList from "./FooterList"

const Footer = () => {
    return (
        <footer className="h-72 bg-secondary text-white">
            <div className="h-full grid grid-cols-5 max-w-7xl mx-auto py-8 gap-8">
                <div className="flex flex-col justify-center gap-8">
                    <div className="">
                        <span>Logo</span>
                        <p className="text-xs font-markProLight">&copy;Derechos reservador IRN 2023</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Heading3 text="Siguenos En" />
                        <div className='flex justify-between items-center text-3xl'>
                           <a href="https://www.facebook.com/profile.php?id=100090003677483" target="_blank"> <i className="bi bi-facebook"> </i></a>
                           <a href="https://www.instagram.com/irncomunicaciones/" target="_blank"><i className="bi bi-instagram"></i></a>
                           <a href="https://api.whatsapp.com/send/?phone=525615418189&text&app_absent=0" target="_blank"><i className="bi bi-whatsapp"></i></a>
                           <a href="https://www.youtube.com/@irncomunicaciones" target="_blank"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-6 grid-rows-2">
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Musica" />
                        <ul>
                            <li><FooterList text="Podcast" /></li>
                            <li><FooterList text="Charts" /></li>
                            <li><FooterList text="Album" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Eventos" />
                        <ul>
                            <li><FooterList text="Calendar" /></li>
                            <li><FooterList text="Festival" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Invitados" />
                        <ul>
                            <li><FooterList text="Artists" /></li>
                            <li><FooterList text="Artists - Single" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Blog" />
                        <ul>
                            <li><FooterList text="Fullpage" /></li>
                            <li><FooterList text="With Sidebar" /></li>
                            <li><FooterList text="Masonry" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Contactanos" />
                        <ul>
                            <li><FooterList text="Edomex Nezahualcoyotl" /></li>
                            <li><FooterList text="+52 56 1541 8189" /></li>
                            <li><FooterList text="irncomunicaciones@hotmail.com" /></li>
                        </ul>
                    </div>
                    
                    
                    <div className="col-span-3 place-self-center">
                        <span>Mobile app</span>
                        <div className="flex">

                        </div>
                    </div>
                    <div className="col-span-3 place-self-center flex flex-col">
                        <span>SUSCRIBE US</span>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </footer>
        // <footer className='bg-secondary w-full h-52 mt-10 text-white flex'>
        //     <div className='w-5/12 flex flex-col gap-2 ml-4 mt-5'>
        //         <h1 className='text-4xl'>IRN <br></br>COMUNICACIONES</h1>
        //         <p>&copy;Derechos reservador IRN 2023</p>
        //         <h2>Siguenos</h2>
        //         <div className='flex gap-5 text-2xl'>
        //             <i className="bi bi-facebook"></i>
        //             <i className="bi bi-instagram"></i>
        //             <i className="bi bi-whatsapp"></i>
        //             <i className="bi bi-youtube"></i>
        //         </div>
        //     </div>
        //     <div className='flex gap-10 mt-10 text-xl '>
        //         <div className='flex flex-col items-center gap-2'>
        //             <h4>Music</h4>
        //             <p className='text-sm'>PODCAST</p>
        //             <p className='text-sm'>PODCAST</p>
        //         </div>
        //         <div className='flex flex-col items-center gap-2'>
        //             <h4>Events</h4>
        //             <p className='text-sm'>PODCAST</p>
        //             <p className='text-sm'>PODCAST</p>
        //         </div>
        //         <div className='flex flex-col items-center gap-2'>
        //             <h4>Artists</h4>
        //             <p className='text-sm'>PODCAST</p>
        //             <p className='text-sm'>PODCAST</p>
        //         </div>
        //         <div className='flex flex-col items-center gap-2'>
        //             <h4>Blog</h4>
        //             <p className='text-sm'>PODCAST</p>
        //             <p className='text-sm'>PODCAST</p>
        //         </div>
        //         <div className='flex flex-col items-center gap-2'>
        //             <h4>Album</h4>
        //             <p className='text-sm'>PODCAST</p>
        //             <p className='text-sm'>PODCAST</p>
        //         </div>
        //         <div className='flex flex-col items-center gap-2'>
        //             <h4>Contact</h4>
        //             <p className='text-sm'>PODCAST</p>
        //             <p className='text-sm'>PODCAST</p>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer
