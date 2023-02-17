import React, { useEffect, useState } from 'react'
import { AiOutlineClose ,AiOutlineMenu } from 'react-icons/ai'
function Nav() {

    const [nav,setNav] = useState(false)
    const [show,handleShow] = useState(false)
    const handleNav= () => {
        setNav(!nav)
    }

    const transistionNavBar = () => {
        if(window.pageYOffset > 100){
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }


    useEffect(()=>{
        window.addEventListener("scroll", transistionNavBar)
        return () => window.removeEventListener("scroll", transistionNavBar)
    })


  return (
    <div className={`flex justify-between items-center h-24 max-w-[1220px] mx-auto px-4 ${show && 'bg-black'} `}>
        <h1 className='w-48 text-3xl font-bold'>Vignesh P</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Projects</li>
        </ul>
        <div onClick={handleNav}  className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}

        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-[#2d3748] ease-in duration-300 z-10':
        'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}>
            <ul className='uppercase p-4'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Projects</li>
            </ul>
        </div>

    </div>
  )
}

export default Nav