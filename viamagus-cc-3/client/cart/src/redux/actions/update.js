import axios from "axios";

import {
  FETCH_UPDATE_ERROR,
  FETCH_UPDATE_LOADING,
  FETCH_UPDATE_STATUS,
} from "./actions";

const changeQuantity = (id, value) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_UPDATE_LOADING });

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/cart/update?id=${id}&value=${value}`
      );
      dispatch({ type: FETCH_UPDATE_STATUS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_UPDATE_ERROR });
    }
  };
};

export { changeQuantity };
