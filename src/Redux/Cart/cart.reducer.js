import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from "./cart.actionType";

const initState = {
  data: [],
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case GET_CART:
      return {
        ...state,
        data: action.payload,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        data: state.data.filter((el) => el._id !== action.payload._id),
      };

    default:
      return state;
  }
};
