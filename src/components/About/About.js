import React from 'react';
import profile_img from '../../assets/croped.png';
import theme_pattern from '../../assets/theme_pattern.svg';

import './About.css';

const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about-title'>
    <h1>About me</h1>
    <img src={theme_pattern} alt=''/>
</div>
<div className='about-sections'>
    <div className='about-left'>
        <img src={profile_img} alt=''/>
    </div>

   <div className='about-right'>
    <div className='about-para'>
        <p>
I am excited to pursue opportunities 
 in software engineering, where I can contribute
  to impactful projects, grow professionally, 
  and make a meaningful difference through technology.
 </p>
 <p>Besides academics, I take an interest in Co-curricular activities, public speaking, Geopolitics, creative content writing, and I always try to create a lively and cheerful environment.
Let us connect and build something incredible together!</p>
    </div>
    <div className='about-skills'>
        <div className='about-skill'><p>HTML & CSS</p>
        <hr style={{width:'60%'}}/></div>
        <div className='about-skill'><p>React JS</p>
        <hr style={{width:'65%'}}/></div>
        <div className='about-skill'><p>JavaScript</p>
        <hr style={{width:'40%'}}/></div>
        <div className='about-skill'><p>Node JS</p>
        <hr style={{width:'50%'}}/></div>
        <div className='about-skill'><p>C,C++</p>
        <hr style={{width:'60%'}}/></div>
        <div className='about-skill'><p>Core JAVA</p>
        <hr style={{width:'60%'}}/></div>
        <div className='about-skill'><p>Communication</p>
        <hr style={{width:'70%'}}/></div>
    </div>
   </div>  </div> 
    </div>
  )
}

export default About
