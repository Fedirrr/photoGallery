import {createStore, applyMiddleware} from "redux";
import {unsplashReducer} from "./components/redux/reducer/unsplashReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    unsplashReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;