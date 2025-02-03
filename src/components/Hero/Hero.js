
import React from 'react';
import profile_img from '../../assets/profile_photo.png';
import './Hero.css';

const Hero = () => {
  
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt='' />
    <h1><span>I'm Khushi Parwal,</span> a full stack developer based in India.</h1> 
    <p>I am a final year student, pursuing BTech in Computer Science stream and 
    skilled in frontend designing and few programming languages.
    I had designed and implemented web developemnt projects using 
    MERN stack.</p>  
    <div className='hero-action'>
    <div className='hero-connect'><a href='#contact'>Connect with Me</a></div>
    <div className='hero-resume'>
    <a href="https://drive.google.com/file/d/1zZTHPZySJWTQt-isgRAzUJp3GDY6th4A/view?usp=sharing" 
    target='_blank' rel='noopener noreferrer'>My Resume</a></div>
    </div>   
    </div>
    

  )
}

export default Hero;
