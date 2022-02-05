import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const importantPoemsSlice = createSlice({
    name: 'importantPoems',
    initialState,
    reducers: {
        loadImportantPoems: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {
    loadImportantPoems
} = importantPoemsSlice.actions;

export const selectImportantPoems = (state) => state.importantPoems.value;

export default importantPoemsSlice.reducer;