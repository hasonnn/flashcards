import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopics: (state, action) => {
            const { topicsId, name, icon } = action.payload;
            state.topics[topicsId] = {
                id: topicsId,
                name: name,
                icon: icon,
                quizIds: []
            }
        }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopics } = topicsSlice.actions;

export default topicsSlice.reducer;