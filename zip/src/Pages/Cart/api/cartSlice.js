import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  SUCCESS: "success",
  LOADING: "loading",
  ERROR: "error",
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    status: STATUS.LOADING,
    cart: [],
    totalSum: 0,
    msg: "",
  },
  reducers: {
    setStatus: function (state, action) {
      state.status = action.payload;
    },
  
    massage: (state, action) => {
      state.msg = action.payload;
    },
    setCartArray: (state, action) => {
      state.cart = action.payload;
    },
    setTotalSum: (state, action) => {
      state.totalSum = action.payload;
    },
  },
});

export const {
  setStatus,
  addItem,
  deleteItem,
  massage,
  setCartArray,
  setTotalSum,
} = cartSlice.actions;
export default cartSlice.reducer;

export const addItemToCart = (obj) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUS.LOADING));
     

      const cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
      cartArray.push(obj);
      localStorage.setItem("cartArray", JSON.stringify(cartArray));

      let totalSum = 0;
      cartArray.forEach((el, index) => {
        return (totalSum += Number(el.price));
      });

      dispatch(setTotalSum(totalSum));
      dispatch(setCartArray(cartArray));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const deleteCartItem = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUS.LOADING));

      const cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
      const newCartArray = cartArray.filter((el, ind) => ind !== id);
      localStorage.setItem("cartArray", JSON.stringify(newCartArray));
      dispatch(setCartArray(newCartArray));

      let totalSum = 0;
      newCartArray.forEach((el, index) => {
        return (totalSum += Number(el.price));
      });

      dispatch(setTotalSum(totalSum));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const getCartArrayData = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

      let totalSum = 0;
      cartArray.forEach((el, index) => {
        return (totalSum += Number(el.price));
      });

      dispatch(setTotalSum(totalSum));
      dispatch(setCartArray(cartArray));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
