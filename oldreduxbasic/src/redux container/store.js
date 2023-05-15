import {createStore} from "redux";
import bookReducer from "./Reducer/bookReducer";

const Store = createStore(bookReducer);

export default Store;