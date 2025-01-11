import { configureStore } from '@reduxjs/toolkit';

const exampleReducer = (state = {}, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: {
        example: exampleReducer, // Add your reducers here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
