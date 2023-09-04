import Links from "../Links/Links.jsx"

const Navbar = () => {
  return (
    <header className='w-full bg-transparent text-white absolute top-0'>
      <nav className='max-w-7xl mx-auto flex justify-between p-5'>
        <h1>IRN</h1>
        <ul className='flex gap-4'>
          <li><Links path="/" text="Music" /></li>
          <li><Links path="/" text="Eventos" /></li>
          <li><Links path="/" text="Artistas" /></li>
          <li><Links path="/" text="Blog" /></li>
          <li><Links path="/" text="Album" /></li>
          <li><Links path="/" text="Contact" /></li>
        </ul>
        <div className="flex gap-2 items-center">
          <span className="">EN</span>
          <i className="bi bi-grip-vertical text-primary text-xl"></i>
          <span className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
