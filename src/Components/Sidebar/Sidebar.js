import React from 'react';
import './Sidebar.css';
import funny from '../../Images/funny.png';
import gaming from '../../Images/gaming.png';
import science from '../../Images/science.png';
import aww from '../../Images/aww.jpg';
import til from '../../Images/til.png';
import video from '../../Images/video.jpg';
import cats from '../../Images/cats.png';
import bestof from '../../Images/bestof.png';
import chess from '../../Images/chess.png';
import oddlysatisfying from '../../Images/oddlysatisfying.png';
import sports from '../../Images/sports.png';
import { useDispatch } from 'react-redux';
import { getPosts } from '../Posts/PostsSlice';
import { Link } from 'react-router-dom';

export function Sidebar() {

  const dispatch = useDispatch();

  return (
    <div className='subredditContainer'>
    <div  className='sidebarTitle'>
      Popular subreddits
    </div>
    <button className='subredditButton'><img src={sports} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/sports">/r/sports</Link>
    </button> 
    <button className='subredditButton'><img src={funny} className='sidebarLogo'/>
      <Link className="subredditLink" to="/r/funny">/r/funny</Link>
    </button>     
    <button className='subredditButton'><img src={gaming} className='sidebarLogo'/>
      <Link className="subredditLink" to="/r/gaming">/r/gaming</Link>
    </button>        
    <button className='subredditButton'><img src={aww} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/aww">/r/aww</Link>
    </button>
    <button className='subredditButton'><img src={science} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/science">/r/science</Link>
    </button>  
    <button className='subredditButton'><img src={video} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/videos">/r/videos</Link>
    </button>  
    <button className='subredditButton'><img src={til} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/todayilearned">/r/todayilearned</Link>
    </button>
    <button className='subredditButton'><img src={chess} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/chess">/r/chess</Link>
    </button> 
    <button className='subredditButton'><img src={cats} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/cats">/r/cats</Link>
    </button> 
    <button className='subredditButton'><img src={bestof} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/bestof">/r/bestof</Link>
    </button> 
    <button className='subredditButton'><img src={oddlysatisfying} className='sidebarLogo'/>
    <Link className="subredditLink" to="/r/oddlysatisfying">/r/oddlysatisfying</Link>
    </button> 
  </div>
  )
}