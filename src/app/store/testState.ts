import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/app/store";


export interface AppStateProps {
    value: boolean;

}

const initialState: AppStateProps = {
    value: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getApp(state){
            state.value = true
        }
    }
})


export const appActions = appSlice.actions
export const selectAppState = (state: RootState) => state.app
export default appSlice.reducer