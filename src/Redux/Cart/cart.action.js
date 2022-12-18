import axios from "axios";
import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from "./cart.actionType";
const token = localStorage.getItem("token");
export const addCart = (product) => async (dispatch) => {
  console.log(token);
  try {
    const res = await fetch(`https://fithub.onrender.com/carts`, {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    

    dispatch({ type: ADD_TO_CART, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const getCart = () => async (dispatch) => {
  try {
    let response = await axios.get(`https://fithub.onrender.com/carts/`, {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    });
    dispatch({ type: GET_CART, payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const removeCartItem = (prodID) => async (dispatch) => {
  try {
    let response = await axios.delete(
      `https://fithub.onrender.com/carts/${prodID}`,
      {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );
    dispatch({ type: REMOVE_FROM_CART, payload: response.data.product });
  } catch (e) {
    console.log(e);
  }
};
