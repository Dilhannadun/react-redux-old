import { combineReducers } from "redux";
import AllPostsReducers from "../reducers/reducer-AllPosts";

const rootReducer = combineReducers({
  allPosts: AllPostsReducers,
});

export default rootReducer;
