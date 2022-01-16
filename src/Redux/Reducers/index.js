import {combineReducers} from "redux"
 import { productReducer, selectedProductReducer, productCategoryReducer, selectedCategoryReducer } from "./productReducer"

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    allCategory: productCategoryReducer,
    category: selectedCategoryReducer,
});
export default reducers;