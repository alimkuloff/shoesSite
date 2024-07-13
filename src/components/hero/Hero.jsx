import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={hero} alt="" />
    </div>
  )
}

export default Hero
