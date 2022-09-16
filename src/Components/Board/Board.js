import React, { useState, useEffect } from 'react';
import './Board.css';
import { Post } from '../Posts/Post';
import { getRedditData } from '../../Features/Data/GetData';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectData } from '../Posts/PostsSlice';
import { store } from '../../Store';

export function Board() {

  const dispatch = useDispatch();

  // Get the Data from the store, this works, but should really get state using useSelector...  
  const posts = store.getState();
  const data = useSelector(selectData);

  // fetch data and re-render only once
  useEffect(() => {
  dispatch(getPosts());
  },[dispatch])

  console.log(data);

  return (
    <div className='boardContainer'>
      <div className='boardWrapper'>
        <div className='boardTopBar'>
          <button className='boardTopBarButton'><i className="fa-solid fa-rocket"></i> Best</button>
          <button className='boardTopBarButton'><i className="fa-solid fa-fire"></i> Hot</button>
          <button className='boardTopBarButton'><i className="fa-solid fa-tag"></i> New</button>
          <button className='boardTopBarButton'><i className="fa-solid fa-trophy"></i> Top</button>
        </div>
        <div className='boardPostsContainer'>
          {/* If data has been fetched successfully, create posts */}
          {data.status === 'success' ? posts.posts.data.data.children.map((post, index) => 
            <Post 
              key={index} 
              index={index}
              title={post.data.title} 
              text={''}
              upvotes={post.data.ups}
              subreddit={post.data.subreddit_name_prefixed}/>) : ''}
        </div>
      </div>
    </div>
  )
}