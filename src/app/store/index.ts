import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import appReducer from "@/app/store/testState";

const combinedReducer = combineReducers({
    app: appReducer
});

export const store = configureStore({
    reducer: combinedReducer,
})

export const makeStore = () => store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store