import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:1,text:"Learn Redux Toolkit"}],
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        
    }
})