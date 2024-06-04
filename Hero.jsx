import React from 'react'
import './Hero.css'
import mutu from '../../assets/mutu2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={mutu} alt=""></img>
        <h1><span>I'm Mutahhar Ahmed</span>, Forntend Developer in Pakistan</h1>
        <p>I am Frontend Developer from Skardu Pakistan.I am specializes in HTML, CSS, JavaScript, and React, building responsive and interactive websites. </p>
       <div className="hero-action">
       <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
       <div className="hero-resume">My resume</div>
       </div>
    </div>
  )
}

export default Hero
