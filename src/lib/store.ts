import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userdetails'
export const makeStore = () => {
  return configureStore({
    reducer: {
        user:userReducer
    }
  })
}

const store = makeStore();

// Infer types from the store instance
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;