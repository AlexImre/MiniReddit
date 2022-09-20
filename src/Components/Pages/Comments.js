import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectData } from '../Comments/CommentsSlice';
import { Comment } from '../Comments/Comment';
import { Post } from '../Posts/Post';
import './Comments.css';

export function Comments() {

    const comments = useSelector(selectData);
    const postData = comments.data[0].data.children[0].data;
    const commentsData = comments.data[1].data.children;
    console.log(comments);

    return (
        
        <>
        <Navbar />
        <div className="commentsContainer">
            BACK BUTTON
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
            <div className='commentsComments'>
                {comments.status === 'success'? commentsData.map((comment, index) => <Comment 
                    key={index}
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