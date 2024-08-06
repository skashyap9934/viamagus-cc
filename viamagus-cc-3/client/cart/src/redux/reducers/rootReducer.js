import { combineReducers } from "redux";

import { cartProductsReducer } from "./cart.reducer";
import { updateReducer } from "./update.reducer";

const rootReducer = combineReducers({
  cart: cartProductsReducer,
  update: updateReducer,
});

export { rootReducer };
