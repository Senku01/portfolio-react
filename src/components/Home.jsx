import React from 'react'
import Typed from 'react-typed'
function Home() {
  return (
    <div className=''>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <Typed 
          className=''
          strings={['Hola',"Kon'nichiwa",'Ciao']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <div className='flex flex-col justify-center items-center '>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            I'm Vignesh P
          </p>
          <Typed
            className='md:text-5xl sm-text-4xl text-xl font-bold py-4'
            strings={['Full-Stack Developer','Web Application Pentester']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />


        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Scroll Down to know more about me
        </p>
        <button className='rounded-full bg-[#7525ba] w-[200px] font-medium my-6 mx-auto py-3 text-black'>Resume</button>
      </div>
    </div>
  )
}

export default Home