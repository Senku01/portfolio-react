import React from 'react'
import { FaGithub,FaLinkedinIn } from 'react-icons/fa'
function Footer() {
  const linkedin = 'https://www.linkedin.com/in/vignesh-p-57034a1a1/'
  const github = 'https://github.com/Senku01'
  return (
    <div className='p-8'>

      <div className='flex items-center justify-center py-4'>
        <a href={github}>
          <FaGithub size={30}/>
        </a>
        <a href={linkedin}>
          <FaLinkedinIn size={30} />
        </a>
      </div>
      <div className='text-center'>
        <p className='font-bold text-lg'>  © Vignesh P </p>
      </div>
    </div>
  )
}

export default Footer