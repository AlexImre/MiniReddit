import React, { useState } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../Posts/PostsSlice';

export function Navbar() {

  // Update local state with user's search
  const [search, setSearch] = useState('');
  const getSearchData = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  // Call reddit API based on the user's search
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitSearch = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      navigate(`/search/${search}`);
      dispatch(getPosts(`search.json?q=${search}`));
    }
  }

  return (
    <div className='navbarContainer'>
        <div className='navbarLogoAndTitle'>
          <Link to="/home/hot">
            <img className='logoImage' src={require('../../Images/logo.svg').default} alt='logo'/>
          </Link>
          <Link id='title' to="/home/hot">
            <div className='navbarTitle'><span className='titleLeft'>Mini</span><span className='titleRight'>Reddit</span></div>        
          </Link>
        </div>

        <div className='navbarWrapper'>
              <form onSubmit={submitSearch}>
              <div className='navbarSearch'>
                <input className='search' type='search' placeholder="Search..." onChange={(e) => getSearchData(e)}></input>
              </div>
              </form>

        </div>
    </div>
  )
}