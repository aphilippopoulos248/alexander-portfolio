import React, { useState, useRef } from 'react'
import './Navbar.scss'
import logo from '../../assets/ap-logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"
import linkedin_icon from "../../assets/icons8-linkedin.svg"
import github_icon from "../../assets/icons8-github-48.svg"
import mail_icon from "../../assets/gmail.svg"

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    // setIsMenuOpen(true);
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    // setIsMenuOpen(false);
    menuRef.current.style.right="-21.875rem";
  }

  const anchorOffset = 100;

  return (
    <div id='navbar' className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={anchorOffset} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        {/* {isMenuOpen && ( */}
          <div className="nav-connect">
            <a href="mailto:alexanderphilippopoulos@gmail.com">
              <img src={mail_icon} alt="Mail" />
            </a>
            <a href="https://www.linkedin.com/in/alexander-philippopoulos-037268258/">
              <img src={linkedin_icon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/aphilippopoulos248">
              <img src={github_icon} alt="GitHub" />
            </a>
          </div>
        {/* )} */}
      </ul>
      {/* <div className="nav-connect">
        <a href="mailto:alexanderphilippopoulos@gmail.com">
          <img src={mail_icon} alt="Mail" />
        </a>
        <a href="https://www.linkedin.com/in/alexander-philippopoulos-037268258/">
          <img src={linkedin_icon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/aphilippopoulos248">
          <img src={github_icon} alt="GitHub" />
        </a>
      </div> */}
    </div>
  )
}

export default Navbar