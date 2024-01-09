import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    apiLoaded: false, // false: 'PENDING' and true: 'DONE'
    apiFetchRequest: false,
  },
  reducers: {
    isAPiLoad: (state) => {
      state.apiLoaded = true;
    },
    loderStart: (state) => {
      state.apiFetchRequest = true;
    },
    loaderEnd: (state) => {
      state.apiFetchRequest = false;
    }
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;