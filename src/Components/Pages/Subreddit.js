import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Board } from '../Board/Board';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import './Subreddit.css';
import { getPosts } from '../Posts/PostsSlice';
import { selectData } from '../Posts/PostsSlice';

export function Subreddit() {

  const dispatch = useDispatch();
  const getData = useSelector(selectData);
  const location = useLocation();
  const pathName = location.pathname;
  const pathNameForSearch = pathName.slice(1);

  // dispatch(getPosts(`${pathNameForSearch}.json`));
  
  useEffect(() => {
    dispatch(getPosts(`${pathNameForSearch}.json`));
  },[dispatch, pathNameForSearch])

  let subscribers = 0;
  if (getData.status === 'success') {
    subscribers = getData.data.data.children[0].data.subreddit_subscribers;
  }

  return (
      <>
        <Navbar />
        <div className='subredditMasterContainer'>
        <div className='subredditWrapper'>
        <div className='subredditH2'>
          {/* <img className='subredditLogo' src={sports} /> */}
          <div className='subredditTitle'>
            <div className='subredditTitleTop'>{`Posts from ${pathName.slice(1)}`}</div>
            <div className='subredditTitleBottom'>Subscribers: {subscribers > 1000000 ? `${(subscribers/1000000).toFixed(1)}m` : subscribers > 1000 ? `${(subscribers/1000).toFixed(1)}k` : subscribers}</div>
          </div>
          {/* <div className='subredditBreak'></div> */}

        </div>
        <div className='AppWrapper'>
          <Board />
          <Sidebar />
        </div>
        </div>
      </div>
      </>
    );
    
}