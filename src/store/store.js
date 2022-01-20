import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import favMoviesReducers from "./Reducers/MoviesReducers";

const store = createStore(favMoviesReducers , composeWithDevTools());

export default store;
