import React from 'react';
import github_logo from '../../assets/github_logo.png';
import linkedin_icon from '../../assets/linked_icon.png';
// import footer_logo from '../../assets/new_portfolio_logo.png';
import footer_logo from '../../assets/my_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div id='connect' className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={footer_logo} alt='' height="100px"/>
            <p>I am an aspiring software engineer from India, looking for exciting opportunities in the software developemnt domain.</p>
        </div>
        <div className='footer-top-right'>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/khushi-parwal/'><img src={linkedin_icon} width='20px' height='20px' alt=''/></a>
                <p>Khushi Parwal</p>
            </div>
            <div className='icons'>
                <a href='https://github.com/khushi-parwal'><img src={github_logo} width='25px' height='25px' alt=''/></a>
                <p>khushi-parwal</p>
            </div>
        </div>
    </div>
    <div><hr/></div>
    <div className='footer-bottom'>
        <p className='footer-bottom-left'>
        © 2024 Khushi Parwal. All rights reserved </p>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
