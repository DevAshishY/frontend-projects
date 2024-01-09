import { configureStore } from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice';
import fetchStatusSlice from './fetchStatusSlice';
import carts from './cart';

let store = configureStore({
    reducer:{
        itemsSlice:itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        carts:carts.reducer
    }
})

export default store;