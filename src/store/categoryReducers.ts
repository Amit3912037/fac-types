import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from "./actionTypes";
import { CategoryActions } from "../models/categoryTypes";
import CategoryState from "../models/CategoryState";


const initialState: CategoryState= {
  categories: [],
  isLoading: false
};

const categoriesReducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      const requestUpdatedState={
        ...state,
        isLoading: true
      }
      return requestUpdatedState;
    case FETCH_CATEGORIES_SUCCESS:
      const successUpdatedState={
        categories: action.payload.categories,
        isLoading: false
      }
      return successUpdatedState;
    case FETCH_CATEGORIES_FAILURE:
      console.log("failure");
      
      const failureUpdatedState={
        ...state,
        isLoading: true
      }
      return failureUpdatedState;
      
    default:
      return state;
  }
};
export default categoriesReducer;
