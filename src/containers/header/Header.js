import React from 'react';
import './Header.css';
import apple from '../../assets/appleStore.png';
import google from '../../assets/googlePlay.png';
import image from '../../assets/vb.png';


const Header = () => {
  return (
    <div className='header section__padding' id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Transform dreams into action through inspiring words and pictures!
        </h1>
        <p>Download the AYDLAS app</p>
        <div className="header-content-app">
          <a href="https://play.google.com/store/apps">
            <img src={google} alt='google' />
          </a>
          <a href="https://www.apple.com/store">
            <img src={apple} alt='apple' />
          </a>
        </div>
      </div>
        <div className="header-image">
          <img src={image} alt='image' />
        </div>
    </div>
  )
}

export default Header