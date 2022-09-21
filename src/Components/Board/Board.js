import './Board.css';
import { Post } from '../Posts/Post';
import { useSelector } from 'react-redux';
import { selectData } from '../Posts/PostsSlice';
import { store } from '../../Store';
import { useLocation } from 'react-router-dom';

export function Board() {

  const pathName = useLocation().pathname;
  console.log(pathName);

  // Get the Data from the store, this works, but should really get state using useSelector...  
  const posts = store.getState();
  const data = useSelector(selectData);

  console.log(data);

  return (
    <div className='boardMaster'>
    <div className='boardContainer'>
      <div className='boardWrapper'>
        <div className='boardPostsContainer'>
          {/* If data has been fetched successfully, create posts */}
          {data.status === 'loading' ? <div className='boardLoading'>Loading data... Hang in there!</div> : ''}
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