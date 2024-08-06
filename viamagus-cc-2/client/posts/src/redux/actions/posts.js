import axios from "axios";

import {
  FETCH_POSTS_DATA,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING,
  FETCH_SINGLE_POSTS_DATA,
  FETCH_SINGLE_POSTS_ERROR,
  FETCH_SINGLE_POSTS_LOADING,
} from "./actions";

const fetchPosts = (_start = 0, _limit = 10) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POSTS_LOADING });

    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/posts/?_start=${_start}&_limit=${_limit}`
      );

      dispatch({
        type: FETCH_POSTS_DATA,
        payload: {
          posts: response.data.posts,
          totalPosts: response.data.totalPosts,
        },
      });
    } catch (error) {
      dispatch({ type: FETCH_POSTS_ERROR });
    }
  };
};

const fetchSinglePost = (postId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_SINGLE_POSTS_LOADING });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/posts/${postId}`
      );

      dispatch({
        type: FETCH_SINGLE_POSTS_DATA,
        payload: {
          post: response.data.post,
        },
      });
    } catch (error) {
      dispatch({ type: FETCH_SINGLE_POSTS_ERROR });
    }
  };
};

export { fetchPosts, fetchSinglePost };
