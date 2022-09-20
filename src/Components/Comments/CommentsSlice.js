import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
    'comments/getComments',
    async (path) => {
        console.log(`url is: https://www.reddit.com/${path}`);
        try {
            console.log("trying to fetch comments...");
            const response = await fetch(`https://www.reddit.com/${path}`);
            console.log(response);
            const json = await response.json();
            console.log(json);
            return json;
        } catch (err) {
            console.log(`getComments failed, Error: ${err}`);
        }
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