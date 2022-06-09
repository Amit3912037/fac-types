import AppState from "../models/AppState";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./actionTypes";
import { ProductActions } from "../models/types";

const initialState: AppState = {
  Electronics: {
    loading: false,
    categoryProducts: [],
  },
  Clothes: {
    loading: false,
    categoryProducts: [],
  },
  Laptops: {
    loading: false,
    categoryProducts: [],
  },
};

const productsReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      const requestCategoryName = action.payload.categoryName;
      const requestUpdatedState = {
        ...state,
        [requestCategoryName]: { categoryProducts: [], loading: true },
      };
      return requestUpdatedState;

    case FETCH_PRODUCTS_SUCCESS:
      const successCategoryNamee = action.payload.categoryName;
      const successUpdatedState = {
        ...state,
        [successCategoryNamee]: {
          categoryProducts: action.payload.products,
          loading: false,
        },
      };
      return successUpdatedState;
    case FETCH_PRODUCTS_FAILURE:
      const failureCategoryName= action.payload.categoryName;
      const failureUpdatedState = {
        ...state,
        [failureCategoryName]: {
          loading: false,
          categoryProducts: [],
        },
      };
      return failureUpdatedState;
    default:
      return state;
  }
};
export default productsReducer;
