import React, { useState, useEffect } from 'react';
import './Board.css';
import { Post } from '../Posts/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectData } from '../Posts/PostsSlice';
import { store } from '../../Store';
import funny from '../../Images/funny.png';
import gaming from '../../Images/gaming.png';
import science from '../../Images/science.png';
import aww from '../../Images/aww.jpg';
import til from '../../Images/til.png';
import video from '../../Images/video.jpg';


export function Board() {

  const dispatch = useDispatch();

  // Get the Data from the store, this works, but should really get state using useSelector...  
  const posts = store.getState();
  const data = useSelector(selectData);

  // Display Best / Hot / New / Top subreddits
  const display_Best_Hot_New_Top_Subreddits = (e) => {
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
          <button className='boardTopBarButton' value='best.json' onClick={display_Best_Hot_New_Top_Subreddits}><i className="fa-solid fa-rocket"></i> Best</button>
          <button className='boardTopBarButton' value='hot.json' onClick={display_Best_Hot_New_Top_Subreddits}><i className="fa-solid fa-fire"></i> Hot</button>
          <button className='boardTopBarButton' value='new.json' onClick={display_Best_Hot_New_Top_Subreddits}><i className="fa-solid fa-tag"></i> New</button>
          <button className='boardTopBarButton' value='top.json' onClick={display_Best_Hot_New_Top_Subreddits}><i className="fa-solid fa-trophy"></i> Top</button>
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
              author={post.data.author}
              created={post.data.created_utc}
              postHint={post.data.post_hint}
              subreddit={post.data.subreddit_name_prefixed}/>) : ''}
        </div>
      </div>
      <div className='subredditContainer'>
        Popular subreddits
        <div className='subredditSection'>
          <img src={funny} className='subredditLogo'/>
          <a className="subredditLink" value='r/funny.json' onClick={display_Best_Hot_New_Top_Subreddits}>/r/funnyTEST</a>
        </div>
        <button className='subredditButton' value='r/funny.json' onClick={display_Best_Hot_New_Top_Subreddits}><img src={funny} className='subredditLogo'/>/r/funny</button>
        <button className='subredditButton' value='r/askreddit.json' onClick={display_Best_Hot_New_Top_Subreddits}>/r/AskReddit</button>        
        <button className='subredditButton' value='r/gaming.json' onClick={display_Best_Hot_New_Top_Subreddits}><img src={gaming} className='subredditLogo'/>/r/gaming</button>        
        <button className='subredditButton' value='r/aww.json' onClick={display_Best_Hot_New_Top_Subreddits}><img src={aww} className='subredditLogo'/>/r/aww</button>        
        <button className='subredditButton' value='r/music.json' onClick={display_Best_Hot_New_Top_Subreddits}>/r/Music</button>        
        <button className='subredditButton' value='r/pics.json' onClick={display_Best_Hot_New_Top_Subreddits}>/r/pics</button>        
        <button className='subredditButton' value='r/science.json' onClick={display_Best_Hot_New_Top_Subreddits}><img src={science} className='subredditLogo'/>/r/science</button>        
        <button className='subredditButton' value='r/worldnews.json' onClick={display_Best_Hot_New_Top_Subreddits}>/r/worldnews</button>        
        <button className='subredditButton' value='r/videos.json' onClick={display_Best_Hot_New_Top_Subreddits}><img src={video} className='subredditLogo'/>/r/videos</button>        
        <button className='subredditButton' value='r/todayilearned.json' onClick={display_Best_Hot_New_Top_Subreddits}><img src={til} className='subredditLogo'/>/r/todayilearned</button>        
      </div>
    </div>
    </div>
  )
}