import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        console.log("fetching reddit data");
        const response = await fetch(`https://www.reddit.com/top.json`);
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