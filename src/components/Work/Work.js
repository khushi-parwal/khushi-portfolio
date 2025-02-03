import React from 'react';
import mywork_data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Work.css';

const Work = () => {
  return (
    <div id='work' className='work'>
    <div className='work-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt=''/>
    </div>
      <div className='work-container'>
        {mywork_data.map((work,index)=>{
            return <div key={index} className='work-format'>
                <h3>{work.w_name}</h3>
                <img src={work.w_img} alt=''/>
                <p>{work.w_desc}</p>
                {/* <button  className='button'>
                <Link to="https://github.com/khushi-parwal">
                GitHub Link</Link></button> */}
            </div>
        })}
      </div>
    </div>
  )
}

export default Work
