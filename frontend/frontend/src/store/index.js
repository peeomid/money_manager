import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from "../reducers/index";
import { transactionReducer } from "../reducers/transactions";

// const store = createStore(rootReducer);
const store = createStore(transactionReducer, composeWithDevTools());

export default store;