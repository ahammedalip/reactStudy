import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value++
        },
        decrement: (state)=>{
            state.value--
        },
        incrementFive:(state, action)=>{
            state.value= state.value+action.payload
        }
    }
})

export const {increment, decrement, incrementFive} = counterSlice.actions
export default counterSlice.reducer;