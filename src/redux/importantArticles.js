import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const importantArticlesSlice = createSlice({
    name: 'importantArticles',
    initialState,
    reducers: {
        loadImportantArticles: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {
    loadImportantArticles
} = importantArticlesSlice.actions;

export const selectImportantArticles = (state) => state.importantArticles.value;

export default importantArticlesSlice.reducer;