import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'itemsList',
    initialState: [],
    reducers: {
        getItems: (state, actions) => {
            return actions.payload
        }
    }
})

export const itemsSliceAction = itemsSlice.actions;

export default itemsSlice;

