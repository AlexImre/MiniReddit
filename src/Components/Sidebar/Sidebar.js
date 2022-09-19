import React from 'react';
import './Sidebar.css';
import funny from '../../Images/funny.png';
import gaming from '../../Images/gaming.png';
import science from '../../Images/science.png';
import aww from '../../Images/aww.jpg';
import til from '../../Images/til.png';
import video from '../../Images/video.jpg';
import { useDispatch } from 'react-redux';
import { getPosts } from '../Posts/PostsSlice';
import { Link } from 'react-router-dom';

export function Sidebar() {

  const dispatch = useDispatch();

  return (
    <div className='subredditContainer'>
    <div  className='subredditTitle'>
      Popular subreddits
    </div>
    <button className='subredditButton'><img src={funny} className='subredditLogo'/>
      <Link className="subredditLink" to="/funny" onClick={() => dispatch(getPosts('r/funny.json'))}>/r/funny</Link>
    </button>     
    <button className='subredditButton'><img src={gaming} className='subredditLogo'/>
      <span className="subredditLink" onClick={() => dispatch(getPosts('r/gaming.json'))}>/r/gaming</span>
    </button>        
    <button className='subredditButton'><img src={aww} className='subredditLogo'/>
    <span className="subredditLink" onClick={() => dispatch(getPosts('r/aww.json'))}>/r/aww</span>
    </button>
    <button className='subredditButton'><img src={science} className='subredditLogo'/>
    <span className="subredditLink" onClick={() => dispatch(getPosts('r/science.json'))}>/r/science</span>
    </button>  
    <button className='subredditButton'><img src={video} className='subredditLogo'/>
    <span className="subredditLink" onClick={() => dispatch(getPosts('r/videos.json'))}>/r/videos</span>
    </button>  
    <button className='subredditButton'><img src={til} className='subredditLogo'/>
    <span className="subredditLink" onClick={() => dispatch(getPosts('r/todayilearned.json'))}>/r/todayilearned</span>
    </button>    
  </div>
  )
}