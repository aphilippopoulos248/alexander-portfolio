import React, { useState, useRef } from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350 / 16 + rem";
  }

  const anchorOffset = 100;

  return (
    <div id='navbar' className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
          <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar