import {
  FETCH_UPDATE_ERROR,
  FETCH_UPDATE_LOADING,
  FETCH_UPDATE_STATUS,
} from "../actions/actions";

const initState = {
  loading: false,
  error: null,
  response: {},
};

const updateReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_UPDATE_LOADING:
      return { ...initState, loading: true };
    case FETCH_UPDATE_ERROR:
      return { ...initState, error: true };
    case FETCH_UPDATE_STATUS:
      return { ...initState, response: payload.data };
    default:
      return state;
  }
};

export { updateReducer };
