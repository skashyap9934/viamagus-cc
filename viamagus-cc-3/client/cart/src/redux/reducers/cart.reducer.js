import {
  FETCH_CART_DATA,
  FETCH_CART_ERROR,
  FETCH_CART_LOADING,
} from "../actions/actions";

const initState = {
  loading: false,
  error: null,
  data: [],
  total: 0,
};

const cartProductsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_CART_LOADING:
      return { ...initState, loading: true };
    case FETCH_CART_DATA:
      return { ...initState, data: payload.products, total: payload.total };
    case FETCH_CART_ERROR:
      return { ...initState, error: true };
    default:
      return state;
  }
};

export { cartProductsReducer };
