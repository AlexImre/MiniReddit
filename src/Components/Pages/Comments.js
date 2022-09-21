import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectData } from '../Comments/CommentsSlice';
import { Comment } from '../Comments/Comment';
import { useNavigate } from 'react-router-dom';
import { Post } from '../Posts/Post';
import './Comments.css';

export function Comments() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const comments = useSelector(selectData);

    if (comments.status !== 'success'){
        return;
    }
    const postData = comments.data[0].data.children[0].data;
    const commentsData = comments.data[1].data.children;
    console.log(comments);

    return (
        
        <>
        <Navbar />
        <div className="commentsContainer">
            <button onClick={goBack}>BACK BUTTON</button>
            {comments.status === 'success'? <Post 
                title={postData.title} 
                text={''}
                url={postData.url}
                isVideo={postData.is_video}
                video={postData.media}
                upvotes={postData.ups}
                selftext={postData.selftext}
                id={postData.id}
                author={postData.author}
                created={postData.created_utc}
                postHint={postData.post_hint}
                subreddit={postData.subreddit_name_prefixed}
                showCommentsButton={false}
            /> : '' }
          <div className='commentsWrapper'>
            <div className='commentsHeader'>
                Comments
            </div>
            <div className='commentsComments'>
                {comments.status === 'success'? commentsData.map((comment, index) => <Comment 
                    key={index}
                    author={comment.data.author}
                    created={comment.data.created}
                    ups={comment.data.ups}
                    body={comment.data.body}
                /> ) : ''}
            </div>
          </div>
          <div className='AppWrapper'>
          </div>
        </div>
        </>
      );
}