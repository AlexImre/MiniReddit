import React, { useState } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectData } from '../Posts/PostsSlice';

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
        <Link to="/home/hot">
          <img className='logoImage' src={require('../../Images/logo.svg').default} alt='logo'/>
        </Link>
        <Link id='title' to="/home/hot">
          <div className='navbarTitle'><span className='titleLeft'>Mini</span><span className='titleRight'>Reddit</span></div>        
        </Link>
        <div className='navbarWrapper'>
            <div className='navbarSearch'>
              <form onSubmit={submitSearch}>
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                    <input className='search' type='search' placeholder="Search..." onChange={(e) => getSearchData(e)}></input>

                </form>
            </div>
        </div>
    </div>
  )
}