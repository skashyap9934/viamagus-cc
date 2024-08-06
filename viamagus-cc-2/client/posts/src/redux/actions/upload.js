import axios from "axios";

import { UPLOAD_ERROR, UPLOAD_LOADING, UPLOAD_SUCCESS } from "./actions";

const uploadPost = (data) => {
  return async (dispatch) => {
    dispatch({ type: UPLOAD_LOADING });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/posts/add`,
        data
      );

      dispatch({ type: UPLOAD_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPLOAD_ERROR });
    }
  };
};

export { uploadPost };
