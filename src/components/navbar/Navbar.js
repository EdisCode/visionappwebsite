import React, {useState} from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/icon3.png';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whataydlas'>What is AYDLAS?</a></p>
  <p><a href='#features'>Features</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar" id='index'>
      <div className="navbar-links">
        <div className="navbar-logo">
          <a href='http://www.aydlas.com/'>
            <img src={logo} alt='logo'/>
            <p>AYDLAS</p>
          </a>
        </div>
        <div className="navbar-links-container">
          <Menu/>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#05375a" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#05375a" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className="navbar-menu-container-links">
              <Menu/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar