import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  const anchorOffset = 100;

  return (
    <div id='navbar' className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
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