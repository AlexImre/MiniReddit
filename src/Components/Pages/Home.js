import React, { useEffect } from 'react'
import { Board } from '../Board/Board';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../Posts/PostsSlice';

export function Home() {

    const location = useLocation();
    const pathName = location.pathname;
    let pathNameForSearch = pathName.slice(6);

    console.log(`pathnameforsearch is: ${pathNameForSearch}`);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getPosts(`${pathNameForSearch}.json`));
    },[pathNameForSearch])

    return (
        <div className="AppContainer" id="home">
          <Navbar />
          <div className='AppWrapper'>
            <Board />
            <Sidebar />
          </div>
        </div>
      );
}