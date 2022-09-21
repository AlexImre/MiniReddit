import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Board } from '../Board/Board';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import './Subreddit.css';
import { getPosts } from '../Posts/PostsSlice';

export function Subreddit() {

  const location = useLocation();
  const pathName = location.pathname;
  const pathNameForSearch = pathName.slice(1);
  const dispatch = useDispatch();
  console.log(pathName);
  console.log(`pathnameforsearchis: ${pathNameForSearch}`);
  
  useEffect(() => {
    dispatch(getPosts(`${pathNameForSearch}.json`));
  },[])

  return (
      <div className="SubredditContainer">
        <Navbar />
        <div className='subredditH2'>
          <h2>{`Posts from ${pathName.slice(1)}`}</h2>
        </div>
        <div className='AppWrapper'>
          <Board />
          <Sidebar />
        </div>
      </div>
    );
    
}