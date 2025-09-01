import React from 'react'

const Navbar = () => {
  return (
    <header>
        <Navlink to="/" className="w-10 h-10 bg-slate-300/20 flex items-center justify-center rounded-full shadow-md">
        <p className='blue-gradient_text'>AH</p>
        </Navlink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink class ="navlinks" >Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Contact</NavLink>

        </nav>
    </header>
  )
}

export default Navbar