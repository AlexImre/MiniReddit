import React from 'react'
import './Navbar.css';

export function Navbar() {
  return (
    <div className='navbarContainer'>
        <img className='logoImage' src={require('../../Images/logo.svg').default} alt='logo'/>
        <div className='navbarTitle'>Mini Reddit</div>
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