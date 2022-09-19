import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
    'comments/getComments',
    async (path) => {
        const response = await fetch(`https://www.reddit.com/${path}`);
        const json = await response.json();
        return json;
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        data: {},
        status: false
    },
    reducers: {

    },
    extraReducers: {
        [getComments.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getComments.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        },
        [getComments.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export default commentsSlice.reducer;

export const selectData = (state) => state.comments;