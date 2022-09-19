import React from 'react'
import { Board } from '../Board/Board';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';

export function Home() {
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