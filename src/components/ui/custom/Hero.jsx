import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56  gap-9 mt-16'>
      <h1
      className='font-extrabold text-[70px] text-center'
      >
        <span className='text-[aqua]'>Discover Your Next Adventure with AI:</span><br /> Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, custom itineraries tailored to your interests and budget.</p>
        
        <Link to={'/create-trip'}>
        <Button> Get Started</Button>
        </Link>

        <img src='/landing.png' className='-mt-5 border border-black border-8'/>
    </div>
  )
}

export default Hero