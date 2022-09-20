import React from 'react';
import './Comment.css';

export function Comment(props) {
  return (
    <div className='commentContainer'>
      <div className='commentWrapper'>
        {props.body}
      </div>
    </div>
  )
};