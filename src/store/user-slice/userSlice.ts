import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IState {
    userName:string | null;
    isAuthtorized:boolean
}
const initialState:IState = {
    userName:'',
    isAuthtorized:false
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state, action:PayloadAction<string>) => {
            state.userName = action.payload 
        }
    }

})
