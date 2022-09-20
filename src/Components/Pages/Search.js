import React from 'react'
import { Board } from '../Board/Board';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import './Search.css';

export function Search() {
  return (
    <div className="AppContainer" id="home">
    <Navbar />
    <div className='searchTitle'>
        Search Results 
    </div>
    <div className='AppWrapper'>
      <Board />
      <Sidebar />
    </div>
  </div>
  )
};