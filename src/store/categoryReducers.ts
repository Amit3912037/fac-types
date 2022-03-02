import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from "./actionTypes";
import { CategoryActions } from "../models/categoryTypes";

// type CategoryState={
//     categories: string[]
// }
const initialState: string[]= [];

const categoriesReducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return state;
    case FETCH_CATEGORIES_SUCCESS:
      return action.payload.categories
    case FETCH_CATEGORIES_FAILURE:
      return state;
    default:
      return state;
  }
};
export default categoriesReducer;
