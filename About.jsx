import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mutu from '../../assets/mutu2.jpg'
const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""></img>

        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={mutu} alt=""></img>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a frontend developer from Pakistan with expertise in creating user-friendly and visually appealing web interfaces. I specializes in HTML, CSS, JavaScript, and React, building responsive and interactive websites. I am is passionate about delivering high-quality code and improving user experience.</p>
                </div>
                <div className="about-skill">
                <div className="about-skills">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}></hr>
                </div>
                <div className="about-skills">
                    <p>React Js</p><hr style={{width:"70%"}}></hr>
                </div>
                <div className="about-skills">
                    <p>JavaScript</p><hr style={{width:"60%"}}></hr>
                </div>
                <div className="about-skills">
                    <p>Flutter</p><hr style={{width:"50%"}}></hr>
                </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPRIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
