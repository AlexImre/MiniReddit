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
        <div className='postAuthor'>
          {`Posted by u/${props.author}`}
        </div>
        {/* Add date if needed? */}
        {/* <div className='postUTC'>
          {`at ${postDate.toDateString()}`}
        </div> */}
        </div>
        <div className='postTitle'>
          {props.title}
        </div>
        <div className='postText'>
          {props.selftext}
        </div>
        <div className='postText'>
        </div>
        <div className='postUrl'>
          {props.isVideo ? <video className='postVideo' src={props.video.reddit_video.fallback_url} controls muted /> : ''}
          {props.postHint === 'image' ? <img className='postImage' src={props.url} /> : ''}
          {props.postHint === 'link'? <a href={props.url} className='postExternalLink' target="_blank">{props.url}<i class="fa-solid fa-arrow-up-right-from-square"></i></a> : ''}
        </div>
        <div className='postComments'>
          Comments
        </div>

      </div>
  )
}