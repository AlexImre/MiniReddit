import React from 'react';
import './Board.css';

export function Board() {



  return (
    <div className='boardContainer'>
      <div className='boardWrapper'>
        <div className='boardTopBar'>
          <button className='boardTopBarButton'><i class="fa-solid fa-rocket"></i> Best</button>
          <button className='boardTopBarButton'><i class="fa-solid fa-fire"></i> Hot</button>
          <button className='boardTopBarButton'><i class="fa-solid fa-tag"></i> New</button>
          <button className='boardTopBarButton'><i class="fa-solid fa-trophy"></i> Top</button>
        </div>
      </div>
    </div>
  )
}