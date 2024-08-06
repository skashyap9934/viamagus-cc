import {
  FETCH_CART_DATA,
  FETCH_CART_ERROR,
  FETCH_CART_LOADING,
} from "./actions";

import axios from "axios";

const fetchCartProducts = async (dispatch) => {
  dispatch({ type: FETCH_CART_LOADING });

  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cart`);
    dispatch({ type: FETCH_CART_DATA, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CART_ERROR });
  }
};

export { fetchCartProducts };
