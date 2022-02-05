import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        loadArticle: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {
    loadArticle
} = articleSlice.actions;

export const selectArticle = (state) => state.article.value;

export default articleSlice.reducer;