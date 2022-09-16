import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectPosts } from './PostsSlice';
import { store, Store } from '../../Store';
import './Post.css';


export function Post(props) {
  

  return (
    <div className='postContainer'>
      <div className='postUpvotes'>
        <i class="fa-solid fa-sort"></i>{props.upvotes > 1000 ? `${props.upvotes/1000}k` : props.upvotes}
      </div>
      <div className='postWrapper'>
      <div className='postSubreddit'>
          {props.index}, {props.subreddit}
        </div>
        <div className='postTitle'>
          {props.title}
        </div>
        <div className='postText'>
        </div>
        <div className='postComments'>
          Comments
        </div>
        </div>
      </div>
  )
}