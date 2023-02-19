import React, { useEffect, useState } from 'react'
import { AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-scroll'

function Nav() {

    const [nav,setNav] = useState(false)
    const [show,handleShow] = useState(false)

    const handleNav= () => {
        setNav(!nav)
    }



  return (
    <div className='flex justify-between items-center h-24 max-w-[1220px] mx-auto px-4 '>
        <h1 className='w-48 text-3xl font-bold'>Vignesh P</h1>
        <div>
            <ThemeToggle />
        </div>
        <ul className='hidden md:flex'>
            <Link to='home' smooth>
                <li className='p-4'>Home</li>
            </Link>
            <Link to='about' smooth>
                <li className='p-4'>About</li>
            </Link>
            <Link to='work' smooth>
                <li className='p-4'>Work</li>
            </Link>
            <li className='p-4'><ThemeToggle/></li>
        </ul>
        <div onClick={handleNav}  className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}

        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10':
        'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}>
            <ul className='uppercase p-4'>
            <Link to='home' smooth>
                <li onClick={handleNav} className='p-4'>Home</li>
            </Link>
            <Link to='about' smooth>
                <li onClick={handleNav} className='p-4'>About</li>
            </Link>
            <Link to='work' smooth>
                <li onClick={handleNav} className='p-4'>Work</li>
            </Link>
            </ul>
        </div>

    </div>
  )
}

export default Nav