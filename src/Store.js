import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Components/Posts/PostsSlice";
import commentsReducer from "./Components/Comments/CommentsSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    },
})