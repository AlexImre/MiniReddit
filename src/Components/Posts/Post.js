import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import { getComments } from '../Comments/CommentsSlice';
import { useDispatch } from 'react-redux';



export function Post(props) {

  const id = props.id;
  const created = props.created;
  const dateCreated = new Date(created * 1000);
  const dispatch = useDispatch();
  
  return (
    <div className='postContainer'>
      <div className='postUpvotes'>
        <i className="fa-solid fa-sort postUpvotes"></i>{props.upvotes > 1000 ? `${(props.upvotes/1000).toFixed(1)}k` : props.upvotes}
      </div>
      <div className='postWrapper'>

      <div className='postSubreddit'>
        {props.subreddit}
        </div>
        <div className='postAuthor'>
          {`Posted by `}<a className='postUserLink' href={`https://www.reddit.com/user/${props.author}`} target='_blank' rel='noreferrer'>{`u/${props.author}`}</a>
        </div>
        <div className='postUTC'>
          {`${dateCreated.toLocaleString().slice(0,-3)}`}
        </div>
        </div>
        <div className='postTitle'>
          {props.title}
        </div>
        <div className='postText'>
          {props.selftext.length > 500? `${props.selftext.slice(0, 500)}...` : props.selftext}
        </div>
        <div className='postReadMore'>
          <Link to='/comments' onClick={() => {dispatch(getComments(`comments/${id}.json`))}}>
            {props.selftext.length > 500? `Read More` : ''}
          </Link>
        </div>
        <div className='postUrl'>
          {props.isVideo ? <video className='postVideo' src={props.video.reddit_video.fallback_url} controls muted /> : ''}
          {props.postHint === 'image' ? <img className='postImage' src={props.url} alt='pulled from reddit api'/> : ''}
          {props.postHint === 'link'? <a href={props.url} className='postExternalLink' target="_blank" rel='noreferrer'>{props.url}<i class="fa-solid fa-arrow-up-right-from-square"></i></a> : ''}
          {props.postHint === 'rich:video' ? <iframe className='postVideo' width={600} height={450} title={props.videoTitle.oembed.title} src={`https://www.youtube.com/embed/${props.url.slice(17)}`} /> : ''}
        </div>
        <div className='postComments'>
          {props.showCommentsButton ? 
          <Link to='/comments'>
            <button className='commentButton' onClick={() => {dispatch(getComments(`comments/${id}.json`))}}>
              Comments
            </button>
          </Link>
          : '' }
        </div>

      </div>
  )
}
