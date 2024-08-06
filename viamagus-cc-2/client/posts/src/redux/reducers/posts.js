import {
  FETCH_POSTS_LOADING,
  FETCH_POSTS_DATA,
  FETCH_POSTS_ERROR,
  FETCH_SINGLE_POSTS_LOADING,
  FETCH_SINGLE_POSTS_DATA,
  FETCH_SINGLE_POSTS_ERROR,
} from "../actions/actions";

const initState = {
  loading: false,
  error: null,
  posts: [],
};

const postsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_LOADING:
      return { ...initState, loading: true };
    case FETCH_POSTS_DATA:
      return {
        ...initState,
        posts: payload.posts,
        totalCount: payload.totalPosts,
      };
    case FETCH_POSTS_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

const singlePostInitState = {
  loading: false,
  error: null,
  post: {},
};

const singlePostReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_SINGLE_POSTS_LOADING:
      return { ...singlePostInitState, loading: true };
    case FETCH_SINGLE_POSTS_DATA:
      return { ...singlePostInitState, post: payload.post };
    case FETCH_SINGLE_POSTS_ERROR:
      return { ...singlePostInitState, error: true };
    default:
      return state;
  }
};

export { postsReducer, singlePostReducer };
