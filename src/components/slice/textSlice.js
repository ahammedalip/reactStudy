import { createSlice } from "@reduxjs/toolkit";


const textslice = createSlice({
    name: 'textslice',
    initialState:{
        value:''
    },
    reducers:{
        add:(state, action)=>{
            state.value = action.payload
        }
    }
})



export const {add} = textslice.actions;
export default textslice.reducer;