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
      <Link className="subredditLink" to="/r/funny">/r/funny</Link>
    </button>     
    <button className='subredditButton'><img src={gaming} className='subredditLogo'/>
      <Link className="subredditLink" to="/r/gaming">/r/gaming</Link>
    </button>        
    <button className='subredditButton'><img src={aww} className='subredditLogo'/>
    <Link className="subredditLink" to="/r/aww">/r/aww</Link>
    </button>
    <button className='subredditButton'><img src={science} className='subredditLogo'/>
    <Link className="subredditLink" to="/r/science">/r/science</Link>
    </button>  
    <button className='subredditButton'><img src={video} className='subredditLogo'/>
    <Link className="subredditLink" to="/r/videos">/r/videos</Link>
    </button>  
    <button className='subredditButton'><img src={til} className='subredditLogo'/>
    <Link className="subredditLink" to="/r/todayilearned">/r/todayilearned</Link>
    </button>    
  </div>
  )
}