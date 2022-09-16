import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Components/Posts/PostsSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer
    },
})