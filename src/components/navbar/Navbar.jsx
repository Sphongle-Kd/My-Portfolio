import React from 'react';
import { Link } from 'react-scroll';
import Toggle from '../toggle/Toggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Deopa</div>
      <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
            <li>Home</li>
            </Link>
            <Link spy={true} to='About' smooth={true}>
            <li>About</li>
            </Link>
            <Link spy={true} to='Skills' smooth={true} >
            <li>Skills</li>
            </Link>
            <Link spy={true} to='Projects' smooth={true} >
            <li>Projects</li>
            </Link>
            <Link spy={true} to='Contact' smooth={true} >
            <button className='button n-button'>Contact</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;