import { createSlice } from "@reduxjs/toolkit";


const carts = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addTocart:(state,action)=>{
         state.push(action.payload)
        },
        removeToCart:(state,action)=>{
  return state.filter((item)=> item !== action.payload )

        }
    }
})

export const cartsActions = carts.actions;
export default carts;