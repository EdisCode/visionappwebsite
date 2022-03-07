import React from 'react';
import './App.css';

import {Navbar, Home, Feature } from './components';
import {Header, Footer, Features, WhatAYDLAS} from './containers'

const App = () => {
  return (
    <div className=' App'>
      <div className="bg">
        <Navbar/>
      </div>
      <Header/>
      <WhatAYDLAS/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;