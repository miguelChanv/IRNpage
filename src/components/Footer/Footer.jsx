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
                        <Heading3 text="Follow Us" />
                        <div className='flex justify-between items-center text-3xl'>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-whatsapp"></i>
                            <i className="bi bi-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-6 grid-rows-2">
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Music" />
                        <ul>
                            <li><FooterList text="Podcast" /></li>
                            <li><FooterList text="Charts" /></li>
                            <li><FooterList text="Album" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Events" />
                        <ul>
                            <li><FooterList text="Calendar" /></li>
                            <li><FooterList text="Festival" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Artists" />
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
                        <Heading3 text="Album" />
                        <ul>
                            <li><FooterList text="Album" /></li>
                            <li><FooterList text="Album - 2" /></li>
                            <li><FooterList text="Album - Single" /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Heading3 text="Contact" />
                        <ul>
                            <li><FooterList text="24 No. Aewsome St. New York, USA" /></li>
                            <li><FooterList text="+11 921 323 423 83" /></li>
                            <li><FooterList text="info@fridayadia.com" /></li>
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
