import {
  UPLOAD_ERROR,
  UPLOAD_LOADING,
  UPLOAD_SUCCESS,
} from "../actions/actions";

const initState = {
  loading: false,
  error: null,
  res: {},
};

const uploadReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPLOAD_LOADING:
      return { ...initState, loading: true };
    case UPLOAD_SUCCESS:
      return { ...initState, res: payload };
    case UPLOAD_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

export { uploadReducer };
