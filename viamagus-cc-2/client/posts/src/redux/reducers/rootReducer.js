import { combineReducers } from "redux";
import { postsReducer, singlePostReducer } from "./posts";
import { uploadReducer } from "./upload";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: singlePostReducer,
  upload: uploadReducer,
});

export { rootReducer };
