// client-frontend/src/redux/store.js
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer"; // Import rootReducer

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
