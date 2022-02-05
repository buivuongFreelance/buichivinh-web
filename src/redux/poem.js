import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null
};

export const poemSlice = createSlice({
    name: 'poem',
    initialState,
    reducers: {
        loadPoem: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {
    loadPoem
} = poemSlice.actions;

export const selectPoem = (state) => state.poem.value;

export default poemSlice.reducer;