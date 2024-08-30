import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  cart: cartReducer,
  // Add other reducers here
});

export default rootReducer;
