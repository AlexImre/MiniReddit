import React from 'react';
import './Comment.css';

export function Comment(props) {
  return (
    <div className='commentContainer'>
      <div className='commentWrapper'>
      <div className='commentUpvoteContainer'>
          <div className='commentUpvotes'>
            <i className="fa-solid fa-sort" style={{color: '#007BFF'}}></i>
            {props.ups}
          </div>
          <div className='commentTopSection'>
          {props.author} x time ago
        </div>
        </div>

        <div className='commentBody'>
          {props.body}
        </div>
      </div>
    </div>
  )
};