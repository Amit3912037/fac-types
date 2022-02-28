import CATEGORIES from "../data/categories";
import PRODUCTS from "../data/products";
import AppState from "../models/AppState";
import { FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS } from "./actionTypes";
import { ProductActions } from "../models/types";


const initialState: AppState = {
    products: PRODUCTS,
    isLoading: false,
    categories: CATEGORIES
}

const productsReducer = (state = initialState, action:ProductActions) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, isLoading: true }
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, products: PRODUCTS }
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}
export default productsReducer;