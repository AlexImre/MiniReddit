import React, { useState, useEffect } from 'react';
import './Board.css';
import { Post } from '../Posts/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectData } from '../Posts/PostsSlice';
import { store } from '../../Store';

export function Board() {

  const dispatch = useDispatch();

  // Get the Data from the store, this works, but should really get state using useSelector...  
  const posts = store.getState();
  const data = useSelector(selectData);

  // Display Best / Hot / New / Top subreddits
  const getRedditData = (e) => {
    e.preventDefault();
    let path = e.target.value;
    console.log(`path is: ${path}`);
    dispatch(getPosts(path));
  }


  // fetch data and re-render only once
  useEffect(() => {
  dispatch(getPosts());
  },[dispatch])

  console.log(data);

  return (
    <div className='boardMaster'>
    <div className='boardContainer'>
      <div className='boardWrapper'>
        <div className='boardTopBar'>
          {/* CHANGE BUTTONS SO THEY ARENT HARD CODED, GRAB LOCATION */}
          <button className='boardTopBarButton' value='hot.json' onClick={getRedditData}><i className="fa-solid fa-fire"></i> Hot</button>
          <button className='boardTopBarButton' value='new.json' onClick={getRedditData}><i className="fa-solid fa-tag"></i> New</button>
          <button className='boardTopBarButton' value='top.json' onClick={getRedditData}><i className="fa-solid fa-trophy"></i> Top</button>
        </div>
        <div className='boardPostsContainer'>
          {/* If data has been fetched successfully, create posts */}
          {data.status === 'success' ? posts.posts.data.data.children.map((post, index) => 
            <Post 
              key={index} 
              index={index}
              title={post.data.title} 
              text={''}
              url={post.data.url}
              isVideo={post.data.is_video}
              video={post.data.media}
              upvotes={post.data.ups}
              selftext={post.data.selftext}
              id={post.data.id}
              author={post.data.author}
              created={post.data.created_utc}
              postHint={post.data.post_hint}
              subreddit={post.data.subreddit_name_prefixed}
              showCommentsButton={true}
              />) : ''}
        </div>
      </div>
    </div>
    </div>
  )
}