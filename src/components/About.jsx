import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p>Hi. I'm Vignesh, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a passionate software developer who loves to code and compete in programming challenges. I'm also interested in cybersecurity and enjoy participating in bug bounties to improve my knowledge in this area. My goal is to find a job in either security or development roles where I can leverage my skills to build secure and reliable software systems. </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About