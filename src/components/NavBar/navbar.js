import React, { useRef } from 'react';
import menu_close from '../../assets/menu_close.svg';
import menu_open from '../../assets/menu_open.svg';
// import logo from '../../assets/new_portfolio_logo.png';
import logo from '../../assets/new_kp.png';
import './navbar.css';

const Navbar = () => {
  const menuRef = useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-480px";
  }

  return (
    <div className='navbar'>
    <img src={logo} alt='' width="140px" height="100px"/>
    <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
    <ul ref={menuRef} className='nav-menu'>
    <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
      <li><a href='#about'>About Me</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#work'>Projects</a></li>
      <li><a href='#connect'>Contact</a></li>
    </ul>
    <div className='nav-contact'><a href='#contact'>
    Connect With Me</a></div>
    </div>
   
  )
}

export default Navbar;
