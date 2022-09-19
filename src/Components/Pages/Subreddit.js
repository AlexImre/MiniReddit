import React from 'react'
import { Board } from '../Board/Board';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import './Subreddit.css';

export function Subreddit() {

    

    return (
        <div className="SubredditContainer">
          <Navbar />
          <div className='subredditH2'>
            <h2>{`Posts from ${useLocation().pathname.slice(1)}`}</h2>
          </div>
          <div className='AppWrapper'>
            <Board />
            <Sidebar />
          </div>
        </div>
      );
}