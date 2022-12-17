import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";

let token = localStorage.getItem("userToken") || "";
console.log(token);

let initState = {
  loading: false,
  error: "",
  token: token,
  userRegister: { loading: false, error: false, message: "" },
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        token: payload,
      };
    case AUTH_SIGNUP_LOADING:
      return {
        ...state,
        userRegister: { loading: true, error: false, message: "" },
      };
    case AUTH_SIGNUP_ERROR:
      return {
        ...state,
        userRegister: { loading: false, error: true, message: payload },
      };
    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        userRegister: { loading: false, error: false, message: payload },
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};
