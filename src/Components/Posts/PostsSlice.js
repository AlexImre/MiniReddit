import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (path) => {
        console.log(`fetching reddit data, and path is: ${path}`);
        if (path === undefined) {
            const response = await fetch(`https://www.reddit.com/hot.json`);
            const json = await response.json();
            return json;
        }
        const response = await fetch(`https://www.reddit.com/${path}`);
        const json = await response.json();
        return json;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: {},
        status: false
    },
    reducers: {

    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getPosts.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export default postsSlice.reducer;

export const selectData = (state) => state.posts;