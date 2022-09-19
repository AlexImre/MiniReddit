import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className='navbarContainer'>
        <Link to="/home">
          <img className='logoImage' src={require('../../Images/logo.svg').default} alt='logo'/>
        </Link>
        <Link>
          <div className='navbarTitle'>Mini Reddit</div>        
        </Link>
        <div className='navbarWrapper'>
            <div className='navbarSearch'>
                <form>
                    <input type='search' placeholder='search Reddit'></input>
                    <button>Search</button>
                </form>
            </div>
        </div>
    </div>
  )
}