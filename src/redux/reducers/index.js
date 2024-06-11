import { combineReducers } from "redux";
import AllPostsReducers from "../reducers/reducer-AllPosts";
import SelectedPostReducer from "../reducers/reducer-selectedPost";

const rootReducer = combineReducers({
  allPosts: AllPostsReducers,
  selectedPost: SelectedPostReducer,
});

export default rootReducer;
