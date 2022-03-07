import React from 'react';
import { Feature } from '../../components';
import './WhatAYDLAS.css';

const WhatAYDLAS = () => {
  return (
    <div className='whataydlas section__margin' id='whataydlas'>
      <div className="whataydlas-feature">
        <Feature/>
      </div>
      <div className="whataydlas-heading">
        <h1 className='text'>Write your Vision and make it plain with AYDLAS</h1>
        <p>Explore The Library</p>
      </div>
      <div className="whataydlas-container">
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default WhatAYDLAS