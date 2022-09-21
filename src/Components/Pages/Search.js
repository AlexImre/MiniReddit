import React from 'react'
import { Board } from '../Board/Board';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import './Search.css';
import { useLocation } from 'react-router-dom';

export function Search() {
  
  const location = useLocation().pathname.slice(8);

  return (
    <>
    <Navbar />
    <div className="searchMasterContainer" id="home">
    <div className='searchContainer'>
    <div className='searchTitle'>
      <i className="fa-solid fa-magnifying-glass"></i>Search results for "{location}" 
    </div>
    <div className='AppWrapper'>
      <Board />
      <Sidebar />
    </div>
    </div>
  </div>
  </>
  )
};