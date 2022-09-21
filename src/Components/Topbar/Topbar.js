import React from 'react';
import './Topbar.css';
import { getPosts } from '../Posts/PostsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


export function Topbar() {

    const dispatch = useDispatch();
    const getRedditData = (e) => {
        dispatch(getPosts(e.target.value))
    }

    return (
        <div className='topbarContainer'>
            <div className='topbarWrapper'>
                <Link className='topbarLinks' to='/home/hot'>
                    <button className='boardTopBarButton button-18' value='hot.json' onClick={getRedditData}><i className="fa-solid fa-fire"></i> Hot</button>
                </Link>
                <Link className='topbarLinks' to='/home/new'>
                    <button className='boardTopBarButton button-18' value='new.json' onClick={getRedditData}><i className="fa-solid fa-tag"></i> New</button>
                </Link>
                <Link className='topbarLinks' to='/home/top'>
                    <button className='boardTopBarButton button-18' value='top.json' onClick={getRedditData}><i className="fa-solid fa-trophy"></i> Top</button>
                </Link>
            </div>
        </div>
    )
};