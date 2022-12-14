import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  SUCCESS: "success",
  LOADING: "loading",
  ERROR: "error",
});

const storeSlice = createSlice({
  name: "storeSlice",
  initialState: {
    status: STATUS.LOADING,
    giftArray: [],
    ePassArray: [],
  },
  reducers: {
    setStatus: function (state, action) {
      state.status = action.payload;
    },
    setGiftArray: function (state, action) {
      state.giftArray = action.payload;
    },
    setEPassArray: function (state, action) {
      state.ePassArray = action.payload;
    },
  },
});

export const { setStatus, setGiftArray, setEPassArray } = storeSlice.actions;
export default storeSlice.reducer;
export function getStoreDataArray() {
  return async function getStoreDataArrayThunk(dispatch, getState) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      let res1 = await axios(`https://backend-server-300e.onrender.com/gift`);
      let res2 = await axios(`https://backend-server-300e.onrender.com/fb_plus`);
      let data1 = res1.data;
      let data2 = res2.data;
      console.log(data2)
       dispatch(setGiftArray(data1));
       dispatch(setEPassArray(data2));
       dispatch(setStatus(STATUS.SUCCESS));


    } catch (error) {
      console.log(error.massage);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
