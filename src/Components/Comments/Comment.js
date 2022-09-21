import React from 'react';
import './Comment.css';

export function Comment(props) {

  const created = props.created;
  const dateCreated = new Date(created * 1000);

  return (
    <div className='commentContainer'>
      <div className='commentWrapper'>
      <div className='commentUpvoteContainer'>
          <div className='commentUpvotes'>
            <i className="fa-solid fa-sort" style={{color: '#007BFF'}}></i>
            {props.ups > 1000 ? `${(props.ups/1000).toFixed(1)}k` : props.ups}
          </div>
          <div className='commentTopSection'>
          <a className='commentUserLink' href={`https://www.reddit.com/user/${props.author}`} target='_blank' rel='noreferrer'>{`u/${props.author}`}</a> {`commented on ${dateCreated.toLocaleString().slice(0,-3)}`}
        </div>
        </div>

        <div className='commentBody'>
          {props.body}
        </div>
      </div>
    </div>
  )
};